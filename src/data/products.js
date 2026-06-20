import Hospitality_Specialists from '../assets/Hospitality Specialists.webp';
import Farm_to_Table from '../assets/Farm to Table.webp';
import Artisan_Confectionery from '../assets/Artisan Confectionery.webp';
import Custom_Sourcing from '../assets/Custom Sourcing.webp';
import Premium_Chocolates from '../assets/Premium Chocolates.webp';
import Beverages from '../assets/Beverages.webp';
import Rice_Grains from '../assets/Rice & Grains.webp';

export const products = [
    {
        icon: 'ti-building-store',
        bgClass: 'bg-dark-green',
        image: Hospitality_Specialists,
        title: 'Hotel Supplies',
        description: 'Complete amenities for hotels, resorts, and hospitality businesses.',
        tagline: 'Everything a hospitality business needs, delivered with precision.',
        items: [
            { name: 'Bathroom Amenities', desc: 'Shampoo, conditioner, soap bars, and toiletry kits in custom branding.', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80' },
            { name: 'Bed Linen', desc: 'High-thread-count cotton sheets, pillowcases, and duvet covers.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80' },
            { name: 'Towels & Robes', desc: 'Fluffy bath towels, hand towels, and plush bathrobes for guests.', image: 'https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80' },
            { name: 'Housekeeping Supplies', desc: 'Detergents, cleaning agents, and janitorial essentials in bulk.', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&q=80' },
            { name: 'In-Room Essentials', desc: 'Stationery kits, slippers, hair dryers, and welcome amenity sets.', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80' },
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
            { name: 'Basmati Rice', desc: 'Long-grain, aromatic Basmati from the Punjab and Dehradun valleys.', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80' },
            { name: 'Brown Rice', desc: 'Whole-grain brown rice, minimally processed for maximum nutrition.', image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=600&q=80' },
            { name: 'Sona Masoori', desc: 'Lightweight, low-starch rice ideal for everyday South Indian cooking.', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80' },
            { name: 'Parboiled Rice', desc: 'Pre-cooked and dried for longer shelf life and faster cooking.', image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&q=80' },
            { name: 'Specialty Grains', desc: 'Quinoa, millet, barley, and supergrains for health-forward menus.', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80' },
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
            { name: 'Cardamom', desc: 'Green and black cardamom pods sourced from Kerala\'s high-altitude farms.', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80' },
            { name: 'Black Pepper', desc: 'Bold Malabar pepper, whole and cracked, for professional kitchens.', image: 'https://images.unsplash.com/photo-1599909533731-1b1e28e14b41?w=600&q=80' },
            { name: 'Turmeric', desc: 'High-curcumin whole finger and powder from Erode, Tamil Nadu.', image: 'https://images.unsplash.com/photo-1615485291234-9d694218aeb3?w=600&q=80' },
            { name: 'Cloves & Cinnamon', desc: 'Whole cloves from Zanzibar and Ceylon cinnamon quills.', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80' },
            { name: 'Spice Blends', desc: 'Custom masala mixes, curry powders, and proprietary seasoning blends.', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=80' },
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
            { name: 'Assam Tea', desc: 'Full-bodied CTC and orthodox loose-leaf teas from Assam estates.', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80' },
            { name: 'Darjeeling Tea', desc: 'First and second flush Darjeeling for specialty tea programs.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
            { name: 'Ground Coffee', desc: 'Single-origin and blended roasts, ground to your preferred profile.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80' },
            { name: 'Herbal Infusions', desc: 'Chamomile, peppermint, lemongrass, and custom wellness blends.', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&q=80' },
            { name: 'Juices & Concentrates', desc: 'Fruit concentrates and ready-to-dilute juices for hospitality use.', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80' },
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
        title: 'Premium Chocolates',
        description: 'Luxury assorted chocolates, truffles, and confectionery products from premium international brands.',
        tagline: 'Indulgent confectionery from the world\'s finest chocolate makers.',
        items: [
            { name: 'Dark Chocolate Truffles', desc: 'Single-origin 70%+ cacao truffles in assorted flavour profiles.', image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&q=80' },
            { name: 'Milk Chocolate Assortments', desc: 'Creamy praline and ganache filled boxes for gifting.', image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80' },
            { name: 'Gift Boxes', desc: 'Curated branded gift sets for corporate and festive occasions.', image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80' },
            { name: 'Seasonal Collections', desc: 'Limited edition holiday and celebration chocolate ranges.', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&q=80' },
            { name: 'Couverture Blocks', desc: 'Bulk couverture chocolate for patisseries and chocolatiers.', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&q=80' },
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
        image: Custom_Sourcing,
        title: 'Custom Sourcing',
        description: 'Tailored sourcing for your specific product requirements globally.',
        tagline: 'Your requirements, our network — anywhere in the world.',
        items: [
            { name: 'Raw Material Procurement', desc: 'Agricultural and industrial raw materials sourced to spec.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
            { name: 'Packaging Solutions', desc: 'Custom branded packaging for retail and wholesale products.', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80' },
            { name: 'Private Label Products', desc: 'White-label food and non-food products with your brand identity.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
            { name: 'Global Import Facilitation', desc: 'Documentation, customs clearance, and end-to-end logistics.', image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80' },
            { name: 'Quality Assurance', desc: 'Third-party lab testing and certification support for all sourced goods.', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80' },
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