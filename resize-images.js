/**
 * resize-images.js
 *
 * Batch-resizes/crops every image in an input folder to a consistent
 * size & aspect ratio (matches the 4:3 aspect-ratio used in
 * ProductsModal.css for .pmodal-img-main), using a "cover" crop so
 * nothing gets stretched — just cropped in from the edges like
 * object-fit: cover does in CSS, but baked into the file itself.
 *
 * USAGE
 * -----
 * 1. Install dependency (one-time):
 *      npm install sharp --save-dev
 *
 * 2. Run:
 *      node resize-images.js <inputDir> <outputDir> [width] [height]
 *
 *    Example (defaults to 1200x900, a 4:3 ratio):
 *      node resize-images.js ./src/assets/products ./src/assets/products-resized
 *
 *    Example with custom size:
 *      node resize-images.js ./src/assets/products ./src/assets/products-resized 1000 750
 *
 * 3. Review the output folder, then swap it in for your original
 *    images folder (or update the import paths in products.js).
 *
 * NOTES
 * -----
 * - Recurses into subfolders, preserving folder structure in the output.
 * - Supports .jpg, .jpeg, .png, .webp (other file types are skipped).
 * - Original files are NOT modified — output goes to a separate folder.
 * - Uses "cover" fit + center crop. If a product's subject sits near
 *   the edge of the frame, check that one image after running and
 *   adjust manually if needed (position can be changed below).
 */

import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, extname, relative, resolve } from 'path';

let sharp;
try {
  sharp = require('sharp');
} catch (err) {
  console.error(
    '\n❌ The "sharp" package is not installed.\n' +
    '   Run: npm install sharp --save-dev\n'
  );
  process.exit(1);
}

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function walkAndResize(inputDir, outputDir, width, height) {
  const entries = readdirSync(inputDir, { withFileTypes: true });

  for (const entry of entries) {
    const inputPath = join(inputDir, entry.name);
    const outputPath = join(outputDir, entry.name);

    if (entry.isDirectory()) {
      mkdirSync(outputPath, { recursive: true });
      await walkAndResize(inputPath, outputPath, width, height);
      continue;
    }

    const ext = extname(entry.name).toLowerCase();
    if (!IMAGE_EXT.has(ext)) {
      console.log(`  ↷ skipped (not an image): ${entry.name}`);
      continue;
    }

    mkdirSync(outputDir, { recursive: true });

    try {
      await sharp(inputPath)
        .resize(width, height, {
          fit: 'cover',     // crop to exactly fill the box, like CSS object-fit: cover
          position: 'centre',
        })
        .toFile(outputPath);
      console.log(`  ✓ ${relative(process.cwd(), outputPath)}  (${width}x${height})`);
    } catch (err) {
      console.error(`  ✗ failed: ${entry.name} — ${err.message}`);
    }
  }
}

async function main() {
  const [, , inputArg, outputArg, widthArg, heightArg] = process.argv;

  if (!inputArg || !outputArg) {
    console.log(
      'Usage: node resize-images.js <inputDir> <outputDir> [width] [height]\n' +
      'Example: node resize-images.js ./src/assets/products ./src/assets/products-resized 1200 900'
    );
    process.exit(1);
  }

  const inputDir = resolve(inputArg);
  const outputDir = resolve(outputArg);
  const width = parseInt(widthArg, 10) || 1200;
  const height = parseInt(heightArg, 10) || 900; // 1200x900 = 4:3, matches ProductsModal.css

  if (!existsSync(inputDir)) {
    console.error(`❌ Input folder not found: ${inputDir}`);
    process.exit(1);
  }

  console.log(`Resizing images from:\n  ${inputDir}\nto:\n  ${outputDir}\nat ${width}x${height} (cover crop)\n`);

  mkdirSync(outputDir, { recursive: true });
  await walkAndResize(inputDir, outputDir, width, height);

  console.log('\n✅ Done. Review the output folder, then point your products.js imports at it (or replace the originals).');
}

main();