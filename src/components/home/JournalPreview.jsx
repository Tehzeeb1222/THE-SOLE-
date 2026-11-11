import React from 'react';
import { useStore } from '../../context/StoreContext';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

export default function JournalPreview() {
  const { journalArticles, navigateTo } = useStore();

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#EBE3D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
              Rain-Ready Journal
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#241B15]">
              Stories, Science & Style Guides
            </h2>
            <p className="text-xs sm:text-sm text-[#5A483E] font-light max-w-lg">
              Practical sartorial advice for navigating monsoons, understanding hydrophobic material engineering, and caring for bespoke leather footwear.
            </p>
          </div>

          <button
            onClick={() => navigateTo('journal')}
            className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-wider text-[#3A2D24] hover:text-[#C49F6A] flex items-center gap-1.5 self-center md:self-end"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalArticles.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => navigateTo('journal-detail', article.id)}
              className="bg-[#FFFFFF] border border-[#EBE3D7] rounded-2xl overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#D4C5B3] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-16/10 overflow-hidden bg-[#F3ECE2]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#8C7E72]">
                    <span className="font-bold text-[#C49F6A] uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif-display font-bold text-lg text-[#241B15] group-hover:text-[#C49F6A] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#5A483E] leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3A2D24] group-hover:text-[#C49F6A] transition-colors">
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
