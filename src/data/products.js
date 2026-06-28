import Hospitality_Specialists from '../assets/Hospitality_Specialists.webp';
import Farm_to_Table from '../assets/Farm_to_Table.webp';
import Artisan_Confectionery from '../assets/Artisan_Confectionery.webp';
import Pet_Food_Products from '../assets/Pet_food_products.jpg';
import Premium_Chocolates from '../assets/Chocolates_confectionery.webp';
import Beverages from '../assets/Beverages.jpg';
import Rice_Grains from '../assets/Rice_Grains.jpg';

// Hotel Supplies
import air_freshener_dispenser from '../assets/Products/Hotel_Supplies/air_freshener_dispenser.png';
import aroma_oil_diffuser from '../assets/Products/Hotel_Supplies/aroma_oil_diffuser.png';
import carpet_brush from '../assets/Products/Hotel_Supplies/carpet_brush.png';
import caution_banner from '../assets/Products/Hotel_Supplies/caution_banner.png';
import c_fold_tissue from '../assets/Products/Hotel_Supplies/c_fold_tissue.png';
import desk_accessories from '../assets/Products/Hotel_Supplies/desk_accessories.png';
import dettol_bottle_handwash from '../assets/Products/Hotel_Supplies/dettol_bottle_handwash.png';
import disposable_gloves from '../assets/Products/Hotel_Supplies/disposable_gloves.png';
// import Filing_Tools from '../assets/Products/Hotel_Supplies/Filing_Tools.webp';
import filing_tools from '../assets/Products/Hotel_Supplies/filing_tools.png';
import floor_brush from '../assets/Products/Hotel_Supplies/Floor_brush.jpg';
import garbage_bags from '../assets/Products/Hotel_Supplies/garbage_bags.png';
import hand_dryer from '../assets/Products/Hotel_Supplies/hand_dryer.png';
import harpic from '../assets/Products/Hotel_Supplies/harpic.png';
import hrt_roll from '../assets/Products/Hotel_Supplies/hrt_roll.png';
import jumbo_tissue_jrt from '../assets/Products/Hotel_Supplies/jumbo_tissue_jrt.png';
import kitchen_tissue from '../assets/Products/Hotel_Supplies/kitchen_tissue.png';
import liquid_handwash_dispenser from '../assets/Products/Hotel_Supplies/liquid_handwash_dispenser.png';
import m_fold_tissue from '../assets/Products/Hotel_Supplies/m_fold_tissue.png';
import paper_cups from '../assets/Products/Hotel_Supplies/paper_cups.png';
import paper_napkins from '../assets/Products/Hotel_Supplies/paper_napkins.png';
import paper_plates from '../assets/Products/Hotel_Supplies/paper_plates.png';
import vim_dishwash from '../assets/Products/Hotel_Supplies/vim_dishwash.png';
// import Writing_Instruments from '../assets/Products/Hotel_Supplies/Writing_Instruments.webp';
import writing_instruments from '../assets/Products/Hotel_Supplies/writing_instruments.png';

// Rice & Grains
import Basmati_Rice from '../assets/Products/Rice_Grains/Basmati_Rice.webp';
import Brown_Rice from '../assets/Products/Rice_Grains/Brown_Rice.webp';
import Parboiled_Rice from '../assets/Products/Rice_Grains/Parboiled_Rice.webp';
import Sona_Masoori from '../assets/Products/Rice_Grains/Sona_Masoori.jpg';
import Specialty_Grains from '../assets/Products/Rice_Grains/wheat.png';

// Spices & Seasonings
import Black_Pepper from '../assets/Products/Spices_Seasoning/Black_Pepper.webp';
import Cardamom from '../assets/Products/Spices_Seasoning/Cardamom.jpg';
import Cloves_Cinnamon from '../assets/Products/Spices_Seasoning/Cloves_Cinnamon.jpg';
import Spice_Blends from '../assets/Products/Spices_Seasoning/Spice_Blends.webp';
import Turmeric from '../assets/Products/Spices_Seasoning/Turmeric.webp';

// Beverages
import Assam_Tea from '../assets/Products/Beverages/Assam_Tea.webp';
import Darjeeling_Tea from '../assets/Products/Beverages/Darjeeling_Tea.jpg';
import tata_tea from '../assets/Products/Beverages/tata_tea.webp';
import Herbal_Infusions from '../assets/Products/Beverages/Herbal_Infusions.png';
import Fanta from '../assets/Products/Beverages/fanta_fruit_twist_lifestyle.webp';
import CocaCola from '../assets/Products/Beverages/CocaCola.jpg';
import Monster from '../assets/Products/Beverages/Monster.JPG';
import Samyang from '../assets/Products/Beverages/Samyang.JPG';
import Nescafe from '../assets/Products/Beverages/NesCafe.webp';
import Nescafe_Gold from '../assets/Products/Beverages/Nescafe_Gold.webp';
import Peets_coffee from '../assets/Products/Beverages/Peets_coffee.webp';
import Tropicana from '../assets/Products/Beverages/Tropicana.webp';

// Chocolates
import Aero from '../assets/Products/Premium_Chocolates/Aero.jpg';
import Fox from '../assets/Products/Premium_Chocolates/Fox.JPG';
import Harshey from '../assets/Products/Premium_Chocolates/Harshey.JPG';
import Lotus_Biscoff_Biscuits from '../assets/Products/Premium_Chocolates/Lotus_Biscoff_Biscuits.jpg';
import M_and_M from '../assets/Products/Premium_Chocolates/M_M.webp';
import Maltesers from '../assets/Products/Premium_Chocolates/Maltesers.webp';
import Slime_Licker from '../assets/Products/Premium_Chocolates/Slime_Licker.JPG';
// import Snacks from '../assets/Products/Premium_Chocolates/Snack.JPG';
import Snack from '../assets/Products/Premium_Chocolates/Snack.webp';
import Twix from '../assets/Products/Premium_Chocolates/Twix.webp';


// Pet Food Products
import Pedigree from '../assets/Products/Pet_Food_Products/Pedigree.webp';
import Royal_Canin from '../assets/Products/Pet_Food_Products/Royal_Canin.jpg';
import Whiskas from '../assets/Products/Pet_Food_Products/Whiskas.jpg';
import Drools from '../assets/Products/Pet_Food_Products/Drools.webp';
import MeO from '../assets/Products/Pet_Food_Products/MeO.jpg';
import Himalaya_Pet from '../assets/Products/Pet_Food_Products/Himalaya_Pet_Care.jpg';

export const products = [
    {
        icon: 'ti-building-store',
        bgClass: 'bg-dark-green',
        image: Hospitality_Specialists,
        title: 'Hotel & Hospitality Supplies',
        description: 'End-to-end hospitality supplies—covering tissue, chemicals, housekeeping tools, disposables, and stationery.',
        tagline: 'One trusted source for guest comfort, staff efficiency, and total operational readiness.',
        items: [
            // Tissue Products
            {
                name: 'C Fold Tissue',
                group: 'Tissue',
                desc: 'Interfolded C-fold paper towels ideal for high-traffic restrooms and commercial use.',
                image: c_fold_tissue,
            },
            {
                name: 'Kitchen Tissue',
                group: 'Tissue',
                desc: 'Heavy-duty absorbent paper rolls designed for kitchen spills, wiping, and food preparation.',
                image: kitchen_tissue,
            },
            {
                name: 'HRT Roll',
                group: 'Tissue',
                desc: 'High-quality jumbo roll tissue with superior softness and absorbency for restroom facilities.',
                image: hrt_roll,
            },
            {
                name: 'Jumbo Tissue (JRT)',
                group: 'Tissue',
                desc: 'Large-capacity jumbo roll tissue with extended sheet length for minimal maintenance.',
                image: jumbo_tissue_jrt,
            },
            {
                name: 'M Fold Tissue',
                group: 'Tissue',
                desc: 'Multi-fold paper towels with controlled dispensing, perfect for offices and public restrooms.',
                image: m_fold_tissue,
            },
            {
                name: 'Paper Napkins',
                group: 'Tissue',
                desc: 'Premium quality paper napkins offering superior softness, absorbency, and tear resistance.',
                image: paper_napkins,
            },

            // Dispenser Products
            {
                name: 'Air Freshener Dispenser and Refill',
                group: 'Dispenser',
                desc: 'Automatic or manual air freshener systems with long-lasting refills for continuous fragrance.',
                image: air_freshener_dispenser,
            },
            {
                name: 'Liquid Handwash Dispenser',
                group: 'Dispenser',
                desc: 'Durable handwash dispensers with precise pump mechanisms for hygienic hand cleaning.',
                image: liquid_handwash_dispenser,
            },
            {
                name: 'Hand Dryer',
                group: 'Dispenser',
                desc: 'High-speed automatic hand dryers with efficient airflow for quick, hygienic drying.',
                image: hand_dryer,
            },
            {
                name: 'Aroma Oil Diffuser (Air Freshener)',
                group: 'Dispenser',
                desc: 'Ultrasonic aroma diffusers with adjustable settings for creating inviting ambient fragrances.',
                image: aroma_oil_diffuser,
            },

            // Chemical Products
            {
                name: 'Dettol Bottle & Dettol Handwash',
                group: 'Chemical',
                desc: 'Trusted antiseptic handwash and liquid disinfectant for superior germ protection and hygiene.',
                image: dettol_bottle_handwash,
            },
            {
                name: 'Harpic',
                group: 'Chemical',
                desc: 'Powerful toilet bowl cleaner with stain and limescale removal for sparkling clean fixtures.',
                image: harpic,
            },
            {
                name: 'Vim Dishwash',
                group: 'Chemical',
                desc: 'Effective dishwashing liquid with superior grease-cutting action and gentle care for hands.',
                image: vim_dishwash,
            },

            // Housekeeping Products
            {
                name: 'Garbage Bags',
                group: 'Housekeeping',
                desc: 'Durable and leak-proof garbage bags available in various sizes for efficient waste management.',
                image: garbage_bags,
            },
            {
                name: 'Carpet Brush',
                group: 'Housekeeping',
                desc: 'Sturdy carpet brushes with firm bristles for deep cleaning and maintaining carpet freshness.',
                image: carpet_brush,
            },
            {
                name: 'Floor Brush',
                group: 'Housekeeping',
                desc: 'Heavy-duty floor brush with durable bristles for efficient sweeping of all floor surfaces.',
                image: floor_brush,
            },

            // Disposable Products
            {
                name: 'Disposable Gloves',
                group: 'Disposable',
                desc: 'High-quality disposable gloves offering excellent protection, comfort, and grip for hygiene tasks.',
                image: disposable_gloves,
            },
            {
                name: 'Paper Cups',
                group: 'Disposable',
                desc: 'Premium disposable paper cups suitable for hot and cold beverages in various capacities.',
                image: paper_cups,
            },
            {
                name: 'Paper Plates',
                group: 'Disposable',
                desc: 'Sturdy and eco-friendly disposable paper plates available in multiple sizes for every use.',
                image: paper_plates,
            },
            {
                name: 'Caution Banner',
                group: 'Disposable',
                desc: 'Highly visible caution banners and warning signage for safety and hazard identification.',
                image: caution_banner,
            },

            // Office Stationery
            {
                name: 'Writing Instruments',
                group: 'Office Stationery',
                desc: 'Premium writing instruments including pens, pencils, and markers for professional use.',
                image: writing_instruments,
            },
            {
                name: 'Filing Tools',
                group: 'Office Stationery',
                desc: 'Organizational filing tools including folders, binders, and index tabs for document management.',
                image: filing_tools,
            },
            {
                name: 'Desk Accessories',
                group: 'Office Stationery',
                desc: 'Essential desk accessories including organizers, holders, and trays for workspace efficiency.',
                image: desk_accessories,
            },
        ],
        specs: {
            'Min. Order': 'Bulk / MOQ varies',
            'Lead Time': '7–14 days',
            'Branding': 'Custom available',
            'Delivery': 'Worldwide',
        },
    },
    {
        icon: 'ti-plant-2',
        bgClass: 'bg-medium-green',
        image: Rice_Grains,
        title: 'Rice & Grains',
        description: 'Premium Basmati and non-Basmati rice sourced from finest farms.',
        tagline: 'Farm-fresh grains sourced directly from certified growing regions.',
        items: [
            {
                name: 'Basmati Rice',
                desc: 'Long-grain, aromatic Basmati from the Punjab and Dehradun valleys.',
                image: Basmati_Rice,
            },
            {
                name: 'Brown Rice',
                desc: 'Whole-grain brown rice, minimally processed for maximum nutrition.',
                image: Brown_Rice,
            },
            {
                name: 'Sona Masoori',
                desc: 'Lightweight, low-starch rice ideal for everyday South Indian cooking.',
                image: Sona_Masoori,
            },
            {
                name: 'Parboiled Rice',
                desc: 'Pre-cooked and dried for longer shelf life and faster cooking.',
                image: Parboiled_Rice,
            },
            {
                name: 'Specialty Grains',
                desc: 'Quinoa, millet, barley, and supergrains for health-forward menus.',
                image: Specialty_Grains,
            },
        ],
        specs: {
            'Origin': 'Punjab / Dehradun',
            'Min. Order': '1 MT',
            'Packaging': '5kg / 25kg bags',
            'Certification': 'FSSAI, APEDA',
        },
    },
    {
        icon: 'ti-leaf',
        bgClass: 'bg-dark-brown',
        image: Farm_to_Table,
        title: 'Spices & Seasonings',
        description: 'Pure aromatic spices from the finest growing regions worldwide.',
        tagline: 'Authentic flavours from soil to shelf — no fillers, no compromise.',
        items: [
            {
                name: 'Cardamom',
                group: 'Whole Spices',
                desc: 'Green and black cardamom pods sourced from Kerala\'s high-altitude farms.',
                image: Cardamom,
            },
            {
                name: 'Black Pepper',
                group: 'Whole Spices',
                desc: 'Bold Malabar pepper, whole and cracked, for professional kitchens.',
                image: Black_Pepper,
            },
            {
                name: 'Cloves & Cinnamon',
                group: 'Whole Spices',
                desc: 'Whole cloves from Zanzibar and Ceylon cinnamon quills.',
                image: Cloves_Cinnamon,
            },
            {
                name: 'Turmeric',
                group: 'Powders & Blends',
                desc: 'High-curcumin whole finger and powder from Erode, Tamil Nadu.',
                image: Turmeric,
            },
            {
                name: 'Spice Blends',
                group: 'Powders & Blends',
                desc: 'Custom masala mixes, curry powders, and proprietary seasoning blends.',
                image: Spice_Blends,
            },
        ],
        specs: {
            'Origin': 'Kerala / Tamil Nadu',
            'Min. Order': '50 kg',
            'Form': 'Whole & powder',
            'Certification': 'FSSAI, ISO',
        },
    },
    {
        icon: 'ti-droplet',
        bgClass: 'bg-deep-teal',
        image: Beverages,
        title: 'Beverages',
        description: 'High-quality tea, coffee and beverages for wholesale supply.',
        tagline: 'Premium pours for hotels, cafés, and large-scale distributors.',
        items: [
            {
                name: 'Assam Tea',
                group: 'Tea',
                desc: 'Full-bodied CTC and orthodox loose-leaf teas from Assam estates.',
                image: Assam_Tea,
            },
            {
                name: 'Darjeeling Tea',
                group: 'Tea',
                desc: 'First and second flush Darjeeling for specialty tea programs.',
                image: Darjeeling_Tea,
            },
            {
                name: 'Elaichi Tea',
                group: 'Tea',
                desc: 'Aromatic cardamom-infused tea blend for a rich, spiced chai experience.',
                image: tata_tea,
            },
            {
                name: 'Herbal Infusions',
                group: 'Tea',
                desc: 'Chamomile, peppermint, lemongrass, and custom wellness blends.',
                image: Herbal_Infusions,
            },
            {
                name: 'Nescafe',
                group: 'Coffee & Juices',
                desc: 'Classic instant coffee with a smooth, balanced flavour — ideal for high-volume hotel service.',
                image: Nescafe,
            },
            {
                name: 'Nescafe Gold',
                group: 'Coffee & Juices',
                desc: 'Premium freeze-dried instant coffee with a richer, more refined taste for discerning guests.',
                image: Nescafe_Gold,
            },
            {
                name: 'Peets Coffee',
                group: 'Coffee & Juices',
                desc: 'Artisan-roasted whole bean and ground coffee from Peet\'s, crafted for specialty café programs.',
                image: Peets_coffee,
            },
            {
                name: 'Tropicana',
                group: 'Coffee & Juices',
                desc: 'Chilled and ambient Tropicana juices in popular fruit variants, ready for hotel minibars and F&B service.',
                image: Tropicana,
            },
            {
                name: 'Fanta',
                group: 'Soft Drinks',
                desc: 'Vibrant fruit-flavoured sparkling soft drink, available in assorted variants for hospitality and retail.',
                image: Fanta,
            },
            {
                name: 'Coca Cola',
                group: 'Soft Drinks',
                desc: 'Iconic carbonated cola available in cans and bottles, suited for bulk hotel and restaurant supply.',
                image: CocaCola,
            },
            {
                name: 'Monster',
                group: 'Soft Drinks',
                desc: 'High-energy carbonated drink with caffeine and B-vitamins, popular for minibars and convenience retail.',
                image: Monster,
            },
            {
                name: 'Samyang',
                group: 'Soft Drinks',
                desc: 'Bold Korean-inspired spicy flavoured drink — a trending novelty for modern hospitality menus.',
                image: Samyang,
            },
        ],
        specs: {
            'Origin': 'Assam / Darjeeling',
            'Min. Order': '10 kg',
            'Packaging': 'Bulk & retail packs',
            'Private Label': 'Available',
        },
    },
    {
        icon: 'ti-candy',
        bgClass: 'bg-dark-purple',
        image: Premium_Chocolates,
        title: 'Premium Chocolates & Confectionery',
        description: 'Luxury assorted chocolates, truffles, and confectionery products from premium international brands.',
        tagline: 'Indulgent confectionery from the world\'s finest chocolate makers.',
        items: [
            {
                name: 'Aero',
                group: 'Truffles & Bars',
                desc: 'Light, bubbly milk chocolate bar with a uniquely aerated texture — a classic crowd-pleaser for gifting and hospitality.',
                image: Aero,
            },
            {
                name: "Fox's",
                group: 'Truffles & Bars',
                desc: 'Fox\'s assorted hard-boiled candy drops in classic fruity flavours, ideal for hotel candy bowls and gifting.',
                image: Fox,
            },
            {
                name: 'Hershey\'s',
                group: 'Truffles & Bars',
                desc: 'America\'s iconic milk chocolate bar with a rich, creamy taste — a globally recognised treat for retail and gifting.',
                image: Harshey,
            },
            {
                name: 'Lotus Biscoff Biscuits',
                group: 'Truffles & Bars',
                desc: 'Crisp caramelised speculoos biscuits with a distinctive spiced flavour, perfect for hotel F&B and in-room amenities.',
                image: Lotus_Biscoff_Biscuits,
            },
            {
                name: 'M&M',
                group: 'Truffles & Bars',
                desc: 'Candy-coated milk and peanut chocolate drops in vibrant colours — a popular choice for minibars and gift assortments.',
                image: M_and_M,
            },
            {
                name: 'Maltesers',
                group: 'Truffles & Bars',
                desc: 'Crunchy malted milk balls coated in smooth milk chocolate, light in texture and irresistible in taste.',
                image: Maltesers,
            },
            {
                name: 'Slime Licker',
                group: 'Truffles & Bars',
                desc: 'Trending sour rolling candy with a bold, tangy flavour — a novelty confectionery popular with younger audiences.',
                image: Slime_Licker,
            },
            {
                name: 'Snack',
                group: 'Truffles & Bars',
                desc: 'Assorted chocolate snack bars combining biscuit, caramel, and chocolate layers for on-the-go indulgence.',
                image: Snack,
            },
            {
                name: 'Twix',
                group: 'Truffles & Bars',
                desc: 'Classic caramel and biscuit chocolate bar with a satisfying crunch — a staple in hotel minibars and retail packs.',
                image: Twix,
            },
        ],
        specs: {
            'Cacao': '55%–85% options',
            'Min. Order': '5 kg',
            'Packaging': 'Custom branding',
            'Shelf Life': '12–18 months',
        },
    },
    {
        icon: 'ti-search',
        bgClass: 'bg-forest',
        image: Pet_Food_Products,
        title: 'Pet Food Products',
        description: 'Premium pet nutrition and care products from globally trusted brands for dogs and cats.',
        tagline: 'Happy pets, trusted brands — sourced and supplied with care.',
        items: [
            {
                name: 'Pedigree',
                group: 'Dog Food',
                desc: 'Complete and balanced dry and wet dog food in adult and puppy variants — a globally trusted brand for everyday nutrition.',
                image: Pedigree,
            },
            {
                name: 'Royal Canin',
                group: 'Dog Food',
                desc: 'Breed-specific and size-tailored dry dog food formulas by Royal Canin, trusted by vets worldwide.',
                image: Royal_Canin,
            },
            {
                name: 'Drools',
                group: 'Dog Food',
                desc: 'Indian-made premium dry and wet dog food with high protein content, available in puppy and adult variants.',
                image: Drools,
            },
            {
                name: 'Whiskas',
                group: 'Cat Food',
                desc: 'Complete nutrition wet and dry cat food in popular meat and fish variants from the Whiskas range.',
                image: Whiskas,
            },
            {
                name: 'Me-O',
                group: 'Cat Food',
                desc: 'Affordable, vet-recommended cat food in wet pouch and dry kibble formats for everyday feeding.',
                image: MeO,
            },
            {
                name: 'Himalaya Pet Care',
                group: 'Health & Grooming',
                desc: 'Natural pet wellness products including shampoos, supplements, and tick-protection solutions for dogs and cats.',
                image: Himalaya_Pet,
            },
        ],
        specs: {
            'Coverage': '25+ countries',
            'Lead Time': 'Quote-based',
            'MOQ': 'Flexible',
            'Compliance': 'Full support',
        },
    },
];

// Auto-generates tag chips from items — no more manually typing "+2 more"
export const getDisplayTags = (items, maxVisible = 2) => {
    const visible = items.slice(0, maxVisible).map((item) => item.name);
    const remaining = items.length - maxVisible;
    return remaining > 0 ? [...visible, `+${remaining} more`] : visible;
};