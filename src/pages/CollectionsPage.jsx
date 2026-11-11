import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, Sparkles, Droplets } from 'lucide-react';

export default function CollectionsPage() {
  const { navigateTo, setActiveCategoryFilter } = useStore();

  const collections = [
    {
      id: 'formal',
      title: 'Formal & Executive Line',
      tagline: 'The classic boardroom defense against sudden monsoons',
      desc: 'Woven with 200-needle combed cotton and tailored for Oxford dress shoes, Derbys, and Double Monk Straps. The flagship silhouette of The Sole.',
      image: '/assets/The Sole  main .png',
      badge: 'Flagship Collection',
      itemCount: '3 Silhouettes'
    },
    {
      id: 'multi-packs',
      title: 'Monsoon Master Bundles',
      tagline: 'Complete weekly office rotation in a luxury gift presentation box',
      desc: '3-Pair and 4-Pair curated sets featuring our signature Obsidian Black, Executive Grey, and Deep Brown colorways. Save 15% immediately.',
      image: '/assets/media_1791112644453.jpg',
      badge: 'Save 15%',
      itemCount: 'Gift Box Included'
    },
    {
      id: 'everyday',
      title: 'Everyday Defense & Casuals',
      tagline: 'Relaxed weatherproof luxury for chinos and weekend footwear',
      desc: 'Ultra-soft ribbed cotton blend with anti-odor bamboo interior. Designed for casual loafers, slip-ons, and clean white sneakers.',
      image: '/assets/media_1791112657054.jpg',
      badge: 'Daily Comfort',
      itemCount: '2 Silhouettes'
    },
    {
      id: 'travel',
      title: 'Travel & Low-Profile Ankle',
      tagline: 'Discrete water-repellent protection for active urban commutes',
      desc: 'Ankle silhouette with non-slip silicone heel gripper and arch compression band. Impervious to curbside puddle splashes.',
      image: '/assets/working.png',
      badge: 'Travel Favorite',
      itemCount: '1 Silhouette'
    },
    {
      id: 'shoe-covers',
      title: 'Temporary Shoe Slip Covers',
      tagline: 'Emergency outer silicone shields for deep waterlogging',
      desc: 'Pocketable, ultra-elastic silicone shoe covers that fold into a waterproof pouch. Perfect for sudden flash floods.',
      image: '/assets/problem solution for sole.png',
      badge: 'Secondary Shield',
      itemCount: 'Universal Fit'
    },
    {
      id: 'accessories',
      title: 'Hydrophobic Care & Accessories',
      tagline: 'Eco-friendly nano-sprays and shoe preservation kits',
      desc: 'Aqueous fluorocarbon-free hydrophobic spray to restore water repellency on leather shoes, jackets, and canvas bags.',
      image: '/assets/media_1791112663851.png',
      badge: 'Eco-Care',
      itemCount: '200ml Bottle'
    }
  ];

  const handleSelect = (catKey) => {
    setActiveCategoryFilter(catKey);
    navigateTo('shop');
  };

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            Curated Lines
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#241B15] tracking-tight uppercase">
            The Collections
          </h1>
          <p className="text-base font-serif-classic italic text-[#5A483E]">
            “Tailored protection for boardroom meetings, daily commutes & sudden downpours.”
          </p>
          <div className="w-16 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((col) => (
            <div
              key={col.id}
              onClick={() => handleSelect(col.id)}
              className="group bg-[#FFFFFF] border border-[#E5DDD3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-[#241B15]">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs text-[#241B15] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-sm border border-[#D9CEC1]">
                    {col.badge}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#C49F6A] font-semibold">
                    {col.itemCount}
                  </span>
                  <h3 className="font-serif-display font-bold text-xl text-[#241B15] group-hover:text-[#C49F6A] transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs font-serif-classic italic text-[#8C7E72]">
                    “{col.tagline}”
                  </p>
                  <p className="text-xs text-[#5A483E] leading-relaxed pt-2">
                    {col.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#F3ECE2] mt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3A2D24] group-hover:text-[#C49F6A] transition-colors">
                  Explore Products
                </span>
                <ArrowRight className="w-4 h-4 text-[#3A2D24] group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
