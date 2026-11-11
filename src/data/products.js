// Master Product & Content Data for THE SOLE with Real Footwear Photography & Dynamic Color Switching
import biege from "../assets/biege.png";
import brown from "../assets/brown.png";
import grey from "../assets/grey.png";
import navy from "../assets/navy.png";
import olive from "../assets/olive.png";
export const INITIAL_PRODUCTS = [
  {
    id: "ts-classic-black",
    name: "The Sole Classic Executive",
    subtitle: "Premium Hydrophobic Formal Dress Sock",
    tagline: "The quintessential dress sock for heavy downpours and boardroom presentations.",
    category: "formal",
    categoryLabel: "Formal & Business",
    price: 899,
    originalPrice: 1199,
    rating: 4.9,
    reviewCount: 342,
    badge: "Bestseller",
    isHero: true,
    featured: true,
    inStock: true,
    stockCount: 84,
   colors: [
  {
    name: "Brown",
    hex: "#5A3825",
    image: brown,
    shoes: "Brown Formal Shoes"
  },
  {
    name: "Executive Grey",
    hex: "#4A4D52",
    image: grey,
    shoes: "Grey Formal Shoes"
  },
  {
    name: "Midnight Navy",
    hex: "#1B263B",
    image: navy,
    shoes: "Navy Formal Shoes"
  },
  {
    name: "Olive",
    hex: "#556B2F",
    image: olive,
    shoes: "Olive Formal Shoes"
  },
  {
    name: "Beige",
    hex: "#D8C3A5",
    image: biege,
    shoes: "Beige Formal Shoes"
  }
],
sizes: ["UK/IN 6–7", "UK/IN 8–9", "UK/IN 10–11", "UK/IN 12+"],
images: [brown, grey, navy, olive, biege],
    shortDesc: "Ultra-fine hydrophobic micro-knit sock engineered for Oxfords, Derbys, and Loafers. Water rolls off instantly while heat and moisture vapor breathe freely.",
    description: `The Sole Classic Executive is our flagship innovation in weather-repelling luxury footwear. Woven from 200-needle count ultra-fine combed cotton treated at the yarn level with our proprietary hydrophobic nano-matrix, it creates permanent surface tension that causes rainwater, puddles, and splashes to bead and roll away instantly.\n\nUnlike bulky waterproof membranes or rubber overshoes, The Sole Classic maintains an ultra-slim, tailored formal profile that slips effortlessly into high-end leather oxfords, loafers, and monk straps without altering shoe fit.`,
    technology: "Proprietary Nano-Shield™ hydrophobic yarn treatment. Micro-pore vapor permeability (>12,000 g/m²/24h). 200-needle high-density weave prevents liquid ingress while remaining soft and smooth against the skin.",
    material: "74% Hydrophobic Combed Cotton, 22% Anti-Odor Silver-Infused Polyamide, 4% Lycra Elastane.",
    care: "Machine wash cold inside out with gentle detergent. Air dry or tumble dry low. Hydrophobic properties remain active through 60+ washes.",
    protectionLevel: "100% Surface Repellency",
    useCases: ["Heavy Rain & Monsoon", "Formal Office & Boardrooms", "Client Meetings", "Daily Commute"]
  },
  {
    id: "ts-sartorial-ribbed",
    name: "The Sole Sartorial Ribbed",
    subtitle: "Architectural 200-Needle Dress Sock",
    tagline: "Fine vertical ribbing for enhanced flexibility and sophisticated texture under tailored trousers.",
    category: "formal",
    categoryLabel: "Formal & Business",
    price: 949,
    originalPrice: 1299,
    rating: 4.9,
    reviewCount: 184,
    badge: "Editor's Choice",
    isHero: false,
    featured: true,
    inStock: true,
    stockCount: 55,
    colors: [
      { 
        name: "Executive Grey", 
        hex: "#4A4D52", 
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
        shoes: "Charcoal Derby Shoes"
      },
      { 
        name: "Obsidian Black", 
        hex: "#1A1A1A", 
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
        shoes: "Classic Black Loafers"
      },
      { 
        name: "British Olive", 
        hex: "#4B5320", 
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
        shoes: "Olive Suede Brogues"
      },
      { 
        name: "Oxblood Burgundy", 
        hex: "#581825", 
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
        shoes: "Cordovan Leather Shoes"
      }
    ],
    sizes: ["UK/IN 6–7", "UK/IN 8–9", "UK/IN 10–11", "UK/IN 12+"],
   images: [
  brown,
  grey,
  navy,
  olive,
  biege
],
    shortDesc: "Refined 2x2 rib structure that grips comfortably without pinching, treated for total rain roll-off.",
    description: `Designed for the sartorial connoisseur who appreciates tactile knitwear. The vertical ribbing provides subtle elasticity that prevents calf slippage during all-day wear.`,
    technology: "Dual-matrix yarn with hydrophobic outer barrier and breathable moisture-wicking core.",
    material: "76% Hydrophobic Combed Cotton, 20% Nylon, 4% Lycra.",
    care: "Machine wash cold. Hang dry.",
    protectionLevel: "100% Surface Repellency",
    useCases: ["Tailored Suiting", "Formal Galas", "Corporate Travel"]
  },
  {
    id: "ts-loafer-shield",
    name: "The Sole Penny Loafer Shield",
    subtitle: "Low-Profile Weatherproof Loafer Sock",
    tagline: "Designed specifically to protect low-vamp loafers from curb splashes.",
    category: "formal",
    categoryLabel: "Formal & Business",
    price: 849,
    originalPrice: 1099,
    rating: 4.8,
    reviewCount: 165,
    badge: "Loafer Essential",
    isHero: false,
    featured: true,
    inStock: true,
    stockCount: 70,
    colors: [
      { 
        name: "Deep Espresso", 
        hex: "#3A281E", 
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
        shoes: "Penny Loafers"
      },
      { 
        name: "Walnut Tan", 
        hex: "#7A4D2E", 
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=800&q=80",
        shoes: "Tan Tassel Loafers"
      },
      { 
        name: "Obsidian Black", 
        hex: "#1A1A1A", 
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
        shoes: "Black Leather Loafers"
      }
    ],
    sizes: ["UK/IN 6–7", "UK/IN 8–9", "UK/IN 10–11", "UK/IN 12+"],
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Snug arch compression and silicone heel lock prevent slippage inside loose-fitting loafers.",
    description: `Loafers expose the top of the foot and instep to curbside water splashes. The Sole Loafer Shield seals your foot in an invisible hydrophobic envelope.`,
    technology: "Nano-Shield™ yarn treatment with anti-slip silicone wave interior.",
    material: "72% Hydrophobic Cotton, 24% Polyamide, 4% Elastane.",
    care: "Machine wash cold inside out.",
    protectionLevel: "100% Surface Repellency",
    useCases: ["Penny Loafers", "Tassel Loafers", "Smart-Casual Chinos"]
  },
  {
    id: "ts-monkstrap-weatherproof",
    name: "The Sole Monk-Strap Edition",
    subtitle: "Tailored Weather-Shield Dress Sock",
    tagline: "Smooth non-friction knit engineered for single and double monk-strap buckles.",
    category: "formal",
    categoryLabel: "Formal & Business",
    price: 899,
    originalPrice: 1199,
    rating: 4.9,
    reviewCount: 98,
    badge: "Sartorial",
    isHero: false,
    featured: false,
    inStock: true,
    stockCount: 40,
    colors: [
      { 
        name: "Midnight Navy", 
        hex: "#1B263B", 
        image: "https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?auto=format&fit=crop&w=800&q=80",
        shoes: "Double Monk Straps"
      },
      { 
        name: "Executive Grey", 
        hex: "#4A4D52", 
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
        shoes: "Grey Suiting Monk Straps"
      },
      { 
        name: "Obsidian Black", 
        hex: "#1A1A1A", 
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
        shoes: "Black Double Monk Straps"
      }
    ],
    sizes: ["UK/IN 6–7", "UK/IN 8–9", "UK/IN 10–11", "UK/IN 12+"],
    images: [
      "https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Engineered with reinforced instep padding to eliminate buckle pressure points in wet weather.",
    description: `Monk straps require a sock that won't catch or snag against metallic buckle hardware. The Sole Monk-Strap Edition combines a smooth frictionless outer face with water-repelling magic.`,
    technology: "High-tenacity nano-coated yarns with zero pill exterior.",
    material: "75% Combed Cotton, 21% Nylon, 4% Spandex.",
    care: "Gentle machine wash with cold water.",
    protectionLevel: "100% Surface Repellency",
    useCases: ["Double Monk Straps", "Single Monk Straps", "Business Suits"]
  },
  {
    id: "ts-chelsea-merino",
    name: "The Sole Chelsea Boot Merino Blend",
    subtitle: "Heavy Weather Thermoregulating Sock",
    tagline: "Ultra-fine Australian Merino wool blended with hydrophobic fibers for cold monsoon days.",
    category: "formal",
    categoryLabel: "Formal & Business",
    price: 1199,
    originalPrice: 1599,
    rating: 5.0,
    reviewCount: 142,
    badge: "Merino Wool",
    isHero: false,
    featured: true,
    inStock: true,
    stockCount: 48,
    colors: [
      { 
        name: "Charcoal Marl", 
        hex: "#3D3D3D", 
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
        shoes: "Chelsea Boots"
      },
      { 
        name: "Warm Taupe", 
        hex: "#8C7E72", 
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
        shoes: "Tan Chelsea Boots"
      },
      { 
        name: "Forest Pine", 
        hex: "#2D4A3E", 
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
        shoes: "Leather Dress Boots"
      }
    ],
    sizes: ["UK/IN 6–7", "UK/IN 8–9", "UK/IN 10–11", "UK/IN 12+"],
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Natural thermoregulation meets nano-repellency. Keeps feet comfortably warm in AC and 100% dry in rain.",
    description: `Crafted from 18.5-micron fine Merino wool interwoven with hydrophobic filaments. Naturally odor-resistant, cushiony around the boot collar, and impervious to soaked pavements.`,
    technology: "Hydrophobic Merino-Core™ Technology with permanent natural water resistance.",
    material: "60% Hydrophobic Merino Wool, 25% Combed Cotton, 12% Polyamide, 3% Elastane.",
    care: "Wool cycle with mild liquid soap. Dry flat.",
    protectionLevel: "100% Surface Repellency",
    useCases: ["Chelsea Boots", "Dress Boots", "Chilly Monsoon Commutes"]
  },
  {
    id: "ts-everyday-crew",
    name: "The Sole Everyday Defense Crew",
    subtitle: "Casual & Sneaker Weatherproof Sock",
    tagline: "Relaxed mid-calf ribbing for chinos, denim, and clean white sneakers in rainy weather.",
    category: "everyday",
    categoryLabel: "Everyday Defense",
    price: 799,
    originalPrice: 999,
    rating: 4.8,
    reviewCount: 210,
    badge: "Daily Favorite",
    isHero: false,
    featured: true,
    inStock: true,
    stockCount: 95,
    colors: [
      { 
        name: "Oatmeal Beige", 
        hex: "#DFD3C3", 
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
        shoes: "Casual White Sneakers"
      },
      { 
        name: "Heather Grey", 
        hex: "#7A7D82", 
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
        shoes: "Grey Lifestyle Shoes"
      },
      { 
        name: "Obsidian Black", 
        hex: "#1A1A1A", 
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
        shoes: "Black Trainers"
      },
      { 
        name: "Cloud White", 
        hex: "#FAF7F2", 
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
        shoes: "White Tennis Shoes"
      }
    ],
    sizes: ["UK/IN 6–7", "UK/IN 8–9", "UK/IN 10–11", "UK/IN 12+"],
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "A plush, breathable everyday crew sock with cushioned sole terry and complete hydrophobic protection.",
    description: `Lightweight and ultra-soft, The Sole Everyday Crew pairs effortlessly with casual sneakers and relaxed trousers. Even if sudden monsoon rain drenches your shoes, your feet remain 100% dry and fresh.`,
    technology: "Breathable Hydrophobic Nano-Knit with anti-odor bamboo-blend interior.",
    material: "68% Hydrophobic Cotton, 20% Bamboo Fiber, 12% Spandex.",
    care: "Machine wash cold. Line dry.",
    protectionLevel: "100% Surface Repellency",
    useCases: ["Weekend Brunch", "Casual Commute", "Sneakers & Chinos"]
  },
  {
    id: "ts-travel-ankle",
    name: "The Sole Low-Profile Ankle",
    subtitle: "Invisible Rain-Shield Sneaker Sock",
    tagline: "Discrete ankle silhouette with full rain-beading hydrophobic shield.",
    category: "travel",
    categoryLabel: "Travel & Ankle",
    price: 749,
    originalPrice: 949,
    rating: 4.8,
    reviewCount: 132,
    badge: "Travel Pack",
    isHero: false,
    featured: false,
    inStock: true,
    stockCount: 75,
    colors: [
      { 
        name: "Stealth Black", 
        hex: "#1A1A1A", 
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
        shoes: "Low-Top Sneakers"
      },
      { 
        name: "Crisp White", 
        hex: "#FAF7F2", 
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
        shoes: "White Sneakers"
      },
      { 
        name: "Heather Grey", 
        hex: "#4A4D52", 
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
        shoes: "Slip-On Shoes"
      }
    ],
    sizes: ["UK/IN 6–7", "UK/IN 8–9", "UK/IN 10–11", "UK/IN 12+"],
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "No-show / low-profile ankle sock with silicon heel grip and full hydrophobic water repellency.",
    description: `Ideal for humid monsoon travel, airports, and city walking. Engineered with a snug arch band and non-slip heel gripper so it never slides down into your shoe.`,
    technology: "Nano-repellent outer yarn with moisture-absorbing inner terry cushion.",
    material: "70% Treated Cotton, 25% Nylon, 5% Lycra.",
    care: "Machine wash cold inside out.",
    protectionLevel: "100% Surface Repellency",
    useCases: ["Travel & Flights", "Low-Top Sneakers", "Summer Monsoon"]
  },
  {
    id: "ts-monsoon-bundle-3pack",
    name: "The Monsoon Master 3-Pack Bundle",
    subtitle: "Complete Office & Rain Preparedness Kit",
    tagline: "3-Pair essential rotation: Obsidian Black, Executive Grey, and Deep Espresso.",
    category: "multi-packs",
    categoryLabel: "Multi-Packs",
    price: 2299,
    originalPrice: 2697,
    rating: 5.0,
    reviewCount: 512,
    badge: "Save 15%",
    isHero: false,
    featured: true,
    inStock: true,
    stockCount: 120,
    colors: [
      { 
        name: "Classic Trio (Black + Grey + Espresso)", 
        hex: "#2B2118", 
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
        shoes: "3-Pair Gift Box"
      },
      { 
        name: "Executive Trio (Navy + Charcoal + Tan)", 
        hex: "#1B263B", 
        image: "https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?auto=format&fit=crop&w=800&q=80",
        shoes: "3-Pair Executive Box"
      }
    ],
    sizes: ["UK/IN 6–7", "UK/IN 8–9", "UK/IN 10–11", "UK/IN 12+"],
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Our most popular multi-pack. 3 pairs of hydrophobic formal socks packaged in a luxury gift box.",
    description: `Be fully prepared for the workweek during the monsoon season. Includes 3 pairs of The Sole hydrophobic formal socks in Obsidian Black, Executive Grey, and Deep Espresso.`,
    technology: "Full Nano-Shield™ protection across all 3 pairs. Resists continuous water splashes and torrential rain.",
    material: "74% Hydrophobic Combed Cotton, 22% Polyamide, 4% Elastane.",
    care: "Machine wash cold inside out.",
    protectionLevel: "100% Surface Repellency",
    useCases: ["Weekly Office Rotation", "Corporate Gifting", "Monsoon Travel"]
  },
  {
    id: "ts-workweek-5pack",
    name: "The Executive Workweek 5-Pack Box",
    subtitle: "Complete Monday-to-Friday Monsoon Defense",
    tagline: "5 curated formal pairs packed in an embossed keepsake presentation box.",
    category: "multi-packs",
    categoryLabel: "Multi-Packs",
    price: 3599,
    originalPrice: 4495,
    rating: 5.0,
    reviewCount: 268,
    badge: "Best Value (Save 20%)",
    isHero: false,
    featured: true,
    inStock: true,
    stockCount: 65,
    colors: [
      { 
        name: "Workweek Palette (5 Pairs)", 
        hex: "#3A2D24", 
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
        shoes: "5-Pair Luxury Keepsake Box"
      }
    ],
    sizes: ["UK/IN 6–7", "UK/IN 8–9", "UK/IN 10–11", "UK/IN 12+"],
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Complete Monday-to-Friday rotation: 2 Black, 1 Charcoal Grey, 1 Deep Navy, 1 Espresso Brown.",
    description: `Never worry about drying laundry during damp monsoon mornings. 5 luxury hydrophobic pairs keep you immaculately suited from Monday's board meeting to Friday's corporate dinner.`,
    technology: "Nano-Shield™ permanent yarn infusion across all 5 pairs.",
    material: "74% Combed Cotton, 22% Polyamide, 4% Elastane.",
    care: "Machine wash cold.",
    protectionLevel: "100% Surface Repellency",
    useCases: ["Complete Workweek", "Executive Gifting"]
  },
  {
    id: "ts-shoe-cover-formal",
    name: "The Sole Formal Shoe Slip Cover",
    subtitle: "Temporary Waterproof Outer Shield",
    tagline: "Ultra-compact silicone dress shoe shield designed for heavy flash floods & deep puddles.",
    category: "shoe-covers",
    categoryLabel: "Shoe Slip Covers",
    price: 649,
    originalPrice: 899,
    rating: 4.6,
    reviewCount: 88,
    badge: "Secondary Shield",
    isHero: false,
    featured: true,
    inStock: true,
    stockCount: 90,
    colors: [
      { 
        name: "Translucent Smoke", 
        hex: "#4A4D52", 
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
        shoes: "Slip Cover on Leather Shoes"
      },
      { 
        name: "Matte Black", 
        hex: "#1A1A1A", 
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
        shoes: "Black Silicone Shield"
      }
    ],
    sizes: ["Medium (UK 6-8)", "Large (UK 9-11)", "XL (UK 12+)"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "A portable, pocketable silicone slip cover for protecting expensive leather dress shoes when walking through deep puddles.",
    description: `While The Sole hydrophobic socks keep your feet 100% dry, our Formal Shoe Slip Covers protect your expensive outer leather shoes from mud and salt stains during sudden deluge. Folds neatly into the included waterproof pouch.`,
    technology: "100% High-grade Elastic Silicone with anti-slip grooved sole tread.",
    material: "Food-grade Medical Silicone.",
    care: "Rinse with tap water and wipe dry.",
    protectionLevel: "100% Waterproof Barrier",
    useCases: ["Deep Puddles", "Protecting Leather Soles", "Emergency Downpour"]
  },
  {
    id: "ts-care-hydrophobic-spray",
    name: "The Sole Nano-Shield™ Refresher Spray",
    subtitle: "250ml Hydrophobic Coating Spray",
    tagline: "Eco-friendly aerosol-free spray to restore water-repellency on shoes, suede, and jackets.",
    category: "accessories",
    categoryLabel: "Care & Accessories",
    price: 499,
    originalPrice: 699,
    rating: 4.9,
    reviewCount: 165,
    badge: "Eco-Friendly",
    isHero: false,
    featured: false,
    inStock: true,
    stockCount: 110,
    colors: [
      { 
        name: "250ml Matte Black Bottle", 
        hex: "#241B15", 
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
        shoes: "Eco Spray Applicator"
      }
    ],
    sizes: ["250ml Standard Bottle"],
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Water-based fluorocarbon-free hydrophobic spray for leather, suede, canvas shoes, and coats.",
    description: `Extend the lifetime of all your footwear. Creates an invisible super-hydrophobic barrier that repels water, coffee, and mud without altering material breathability or color.`,
    technology: "Zero-VOC aqueous silica nanoparticle formula.",
    material: "Purified water, silica nano-particles, natural citrus extract.",
    care: "Spray evenly from 15cm away and let cure for 12 hours.",
    protectionLevel: "Super-Hydrophobic Barrier",
    useCases: ["Leather Shoes", "Suede Loafers", "Rain Jackets", "Bags"]
  },
  {
    id: "ts-cedar-preservation-box",
    name: "The Sole Aromatic Cedar Sock & Shoe Box",
    subtitle: "Natural Moisture & Pest Defense Keepsake",
    tagline: "Hand-crafted American Red Cedar box for natural moisture absorption and fresh cedar aroma.",
    category: "accessories",
    categoryLabel: "Care & Accessories",
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviewCount: 78,
    badge: "Artisanal",
    isHero: false,
    featured: false,
    inStock: true,
    stockCount: 30,
    colors: [
      { 
        name: "Natural Aromatic Cedar", 
        hex: "#8B5A2B", 
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
        shoes: "Handcrafted Cedar Box"
      }
    ],
    sizes: ["Holds 6 Pairs of Socks + Shoe Horn"],
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "100% Solid Red Cedar box with brass hinges. Naturally repels humidity and moths in wardrobes.",
    description: `Handcrafted from sustainable red cedarwood. The natural essential oils absorb excess atmospheric humidity and preserve the softness of your fine hydrophobic knitwear.`,
    technology: "100% Solid Natural Unfinished Red Cedar.",
    material: "American Red Cedar with solid brass hardware.",
    care: "Lightly sand surface every year to rejuvenate natural aromatic oils.",
    protectionLevel: "Natural Humidity Absorption",
    useCases: ["Wardrobe Storage", "Luxury Gifting", "Shoe Care Stations"]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Aarav Sharma",
    city: "Mumbai",
    role: "Senior Corporate Lawyer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Finally, I can wear my handcrafted Oxford leather shoes in the heavy Mumbai monsoon without dreading soggy, smelly wet socks in meetings. Absolute game changer.",
    rating: 5,
    verified: true,
    date: "July 2026",
    product: "The Sole Classic Executive"
  },
  {
    id: 2,
    name: "Priya Nair",
    city: "Bengaluru",
    role: "Tech Product Lead",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "The socks are so comfortable that I completely forget I am wearing hydrophobic socks. My feet stay completely dry even when stepping through unexpected waterlogged streets.",
    rating: 5,
    verified: true,
    date: "August 2026",
    product: "The Sole Sartorial Ribbed"
  },
  {
    id: 3,
    name: "Rohan Deshmukh",
    city: "Pune",
    role: "Management Consultant",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "I used to carry ugly, bulky shoe covers everywhere. Now I just wear The Sole socks and go straight to my client presentations with complete confidence.",
    rating: 5,
    verified: true,
    date: "September 2026",
    product: "The Monsoon Master 3-Pack Bundle"
  },
  {
    id: 4,
    name: "Ananya Sengupta",
    city: "Kolkata",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "The packaging and tactile feel are like luxury Italian knitwear, but the water-repelling science is pure magic. Water literally bounces off like mercury drops.",
    rating: 5,
    verified: true,
    date: "September 2026",
    product: "The Sole Penny Loafer Shield"
  }
];

export const JOURNAL_ARTICLES = [
  {
    id: "how-to-keep-feet-dry-monsoon",
    title: "How to Keep Your Feet Dry During Indian Monsoon",
    slug: "how-to-keep-feet-dry-monsoon",
    excerpt: "A gentleman's practical guide to surviving flooded city streets, boardroom meetings, and humid commutes without soggy socks or damaged leather shoes.",
    category: "Rain Guide",
    readTime: "4 min read",
    date: "September 28, 2026",
    author: "Editorial Team",
    image: "/assets/The Sole  main .png",
    content: `Walking into an office with waterlogged socks is more than an annoyance—it ruins posture, creates persistent bacterial odor, and damages expensive inner leather insoles.\n\n### Why Traditional Cotton Socks Fail in Rain\nStandard combed cotton absorbs up to 27 times its weight in water through capillary action. When rain seeps into shoe eyelets or splashes above the sole, cotton fibers instantly soak up the water and trap moisture against your skin for hours.\n\n### The Hydrophobic Solution\nBy infusing each fiber with a microscopic silica nano-lattice before knitting, The Sole socks alter the contact angle of water droplets from 0° (instant absorption) to over 140° (instant roll-off). The result? Water rolls away immediately while internal perspiration vapor escapes freely.`
  },
  {
    id: "hydrophobic-fabric-explained",
    title: "Hydrophobic Nanotechnology Explained: The Science of Dry Steps",
    slug: "hydrophobic-fabric-explained",
    excerpt: "Demystifying contact angles, micro-pore breathability, and why our 200-needle knit repels liquid while feeling as soft as Egyptian cotton.",
    category: "Material Science",
    readTime: "6 min read",
    date: "September 15, 2026",
    author: "Dr. K. Mehta, Textile Scientist",
    image: "/assets/working.png",
    content: `Nature perfected hydrophobic surfaces millions of years ago in the lotus leaf (Nelumbo nucifera). The leaf's micro-papillae create air pockets beneath water droplets, forcing them to remain spherical and roll off at the slightest tilt.\n\nAt The Sole, we engineered this exact lotus-effect onto long-staple combed cotton yarns. Because the treatment exists at the molecular yarn level rather than as a heavy rubberized laminate, the spaces between knit loops remain 100% open for air and body heat dissipation.`
  },
  {
    id: "best-socks-for-office-wear-monsoon",
    title: "Best Sock + Shoe Combinations for Rainy Day Formal Wear",
    slug: "best-socks-for-office-wear-monsoon",
    excerpt: "How to pair Oxford shoes, Chelsea boots, and leather loafers with weather-resistant socks for flawless boardroom style.",
    category: "Style & Grooming",
    readTime: "5 min read",
    date: "August 30, 2026",
    author: "Vikram R., Sartorial Stylist",
    image: "/assets/media_1791112644453.jpg",
    content: `Rainy weather shouldn't force you into rubber duck boots for a corporate board meeting. Here is our stylist blueprint:\n\n1. **The Classic Oxford + Obsidian Black Sole**: Sleek, sharp, and impervious to curbside splashes.\n2. **The Penny Loafer + Deep Brown Sole**: Showcases subtle contrast while protecting vulnerable ankle areas from puddle spray.\n3. **The Monk Strap + Executive Grey Sole**: A contemporary pairing that bridges tailored charcoal suits with wet pavement.`
  }
];

export const COMPARISON_DATA = [
  {
    feature: "Water Protection",
    theSole: "Hydrophobic yarn blocks water completely at surface tension (>140° contact angle)",
    otherBrands: "Standard cotton gets soggy immediately; rubber socks trap sweat"
  },
  {
    feature: "Breathability & Comfort",
    theSole: "Lightweight, ultra-breathable nano-weave (>12,000 g/m² vapor permeability)",
    otherBrands: "Hot, humid, bulky, restrictive plastic membranes"
  },
  {
    feature: "Formal Shoe Compatibility",
    theSole: "Ultra-slim 200-needle profile fits flawlessly into Oxfords, Loafers & Derbys",
    otherBrands: "Too thick for dress shoes; alters shoe size & ruins insole fit"
  },
  {
    feature: "Odor & Hygiene Defense",
    theSole: "Integrated silver-ion anti-bacterial knit prevents odor even after rain exposure",
    otherBrands: "Damp environment triggers bacteria, itchiness, and unpleasant odors"
  },
  {
    feature: "Durability & Wash Life",
    theSole: "Engineered for 60+ machine washes with long-lasting hydrophobic retention",
    otherBrands: "Coatings peel off or wash away after 2-3 cycles"
  },
  {
    feature: "Aesthetic & Style",
    theSole: "Luxury bespoke tailoring aesthetic in refined timeless neutral colorways",
    otherBrands: "Ugly neon outdoor hiking designs or clumsy plastic overshoes"
  }
];

export const FAQS = [
  {
    q: "How do The Sole hydrophobic socks keep feet dry during rain?",
    a: "Our socks are woven from ultra-fine combed cotton treated at the fiber level with proprietary nano-particles. This creates super-hydrophobic surface tension where water droplets cannot penetrate the yarn and instead bead up and roll off instantly, even when rain splashes on your shoes."
  },
  {
    q: "Are these socks breathable? Won't my feet sweat inside?",
    a: "Unlike rubberized waterproof membranes or plastic bags that trap sweat, The Sole uses microscopic porous spaces between fibers that allow moisture vapor (perspiration) to escape effortlessly while blocking liquid water droplets from entering from the outside."
  },
  {
    q: "Do they fit inside tight formal leather shoes like Oxfords and Loafers?",
    a: "Yes, perfectly. The Sole socks are crafted with a 200-needle high-density fine knit that has the exact thickness of luxury Italian dress socks. They do not bulk up your shoes or squeeze your toes."
  },
  {
    q: "How do I wash and care for The Sole socks?",
    a: "Machine wash on cold/gentle cycle inside out with standard liquid detergent. Air dry flat or tumble dry low. Do not use silicone-based softeners or bleach. The hydrophobic protection lasts for over 60 washes."
  },
  {
    q: "What is your shipping time and return policy across India?",
    a: "We offer Free Express Shipping across all Indian pin codes (delivered in 2–4 business days; Next-Day delivery available in metros). We back every order with a 30-Day 'Dry Feet' money-back guarantee."
  },
  {
    q: "Can I wear The Sole socks every day even when it's not raining?",
    a: "Absolutely. Many of our customers wear them as their everyday luxury dress socks due to their incredible comfort, softness, hand-linked seamless toe, and anti-odor silver ion protection."
  }
];
