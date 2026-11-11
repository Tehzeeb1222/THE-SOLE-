import React from 'react';
import { useStore } from '../../context/StoreContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CollectionsShowcase() {
  const { navigateTo, setActiveCategoryFilter } = useStore();

  const collections = [
    {
      id: 'rain-ready',
      filterKey: 'formal',
      title: 'Rain Ready & Monsoon',
      subtitle: 'For torrential downpours and flooded city commutes',
      image: '/assets/media_1791112650849.jpg',
      tag: 'Flagship Protection',
      count: '3 Silhouettes'
    },
    {
      id: 'formal-business',
      filterKey: 'formal',
      title: 'Formal & Business',
      subtitle: 'For boardrooms, client pitches & Oxford dress shoes',
      image: '/assets/The Sole  main .png',
      tag: 'Bespoke Profile',
      count: '200-Needle Knit'
    },
    {
      id: 'everyday-comfort',
      filterKey: 'everyday',
      title: 'Everyday Defense',
      subtitle: 'For chinos, white sneakers & casual weekend commutes',
      image: '/assets/media_1791112657054.jpg',
      tag: 'Casual Elegance',
      count: 'Breathable Terry'
    },
    {
      id: 'multi-packs',
      filterKey: 'multi-packs',
      title: 'Monsoon Master Bundles',
      subtitle: '3-Pair corporate rotation with luxury presentation box',
      image: '/assets/media_1791112644453.jpg',
      tag: 'Save 15%',
      count: 'Gift Box Included'
    },
    {
      id: 'shoe-covers',
      filterKey: 'shoe-covers',
      title: 'Shoe Slip Covers',
      subtitle: 'Temporary silicone outer shields for leather preservation',
      image: '/assets/problem solution for sole.png',
      tag: 'Secondary Shield',
      count: 'Pocketable'
    }
  ];

  const handleCardClick = (filterKey) => {
    setActiveCategoryFilter(filterKey);
    navigateTo('shop');
  };

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#EBE3D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
              Curated Collections
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#241B15]">
              Shop By Need & Occasion
            </h2>
            <p className="text-xs sm:text-sm text-[#5A483E] font-light max-w-lg">
              Tailored weather defense for executive boardrooms, unpredictable monsoon travel, and relaxed weekends.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveCategoryFilter('all');
              navigateTo('shop');
            }}
            className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-wider text-[#3A2D24] hover:text-[#C49F6A] flex items-center gap-1.5 self-center md:self-end"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Collections Grid (1 Featured large + 4 grid cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.filterKey)}
              className="group relative h-[360px] rounded-2xl overflow-hidden cursor-pointer border border-[#E5DDD3] shadow-md hover:shadow-2xl transition-all duration-500 bg-[#241B15]"
            >
              {/* Image with subtle zoom */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C140F] via-[#241B15]/40 to-transparent"></div>

              {/* Tag Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#FAF7F2]/90 backdrop-blur-xs text-[#241B15] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-sm border border-[#D9CEC1]">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#C49F6A] font-semibold">
                  {item.count}
                </span>
                <h3 className="font-serif-display text-2xl text-[#FAF7F2] group-hover:text-[#C49F6A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#C4B7AA] font-light line-clamp-2">
                  {item.subtitle}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#FAF7F2] group-hover:text-[#C49F6A] transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
