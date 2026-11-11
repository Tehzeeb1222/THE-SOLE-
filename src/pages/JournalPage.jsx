import React from 'react';
import { useStore } from '../context/StoreContext';
import { Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function JournalPage() {
  const { journalArticles, navigateTo } = useStore();

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            The Rain-Ready Collective
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#241B15] tracking-tight uppercase">
            The Sole Journal
          </h1>
          <p className="text-base font-serif-classic italic text-[#5A483E]">
            “Practical sartorial guides, textile science, and footwear care for rainy seasons.”
          </p>
          <div className="w-16 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* Featured Main Article */}
        {journalArticles[0] && (
          <div 
            onClick={() => navigateTo('journal-detail', journalArticles[0].id)}
            className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-6 sm:p-10 shadow-xl cursor-pointer group hover:border-[#C49F6A] transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 aspect-16/10 rounded-2xl overflow-hidden bg-[#241B15]">
                <img
                  src={journalArticles[0].image}
                  alt={journalArticles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="bg-[#EAE0D5] text-[#3A2D24] px-2.5 py-1 rounded-sm uppercase tracking-wider font-bold text-[10px]">
                    Featured Editorial
                  </span>
                  <span className="text-[#8C7E72] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {journalArticles[0].readTime}
                  </span>
                </div>

                <h2 className="font-serif-display text-3xl sm:text-4xl text-[#241B15] group-hover:text-[#C49F6A] transition-colors leading-snug">
                  {journalArticles[0].title}
                </h2>

                <p className="text-sm text-[#5A483E] leading-relaxed font-light">
                  {journalArticles[0].excerpt}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3A2D24] group-hover:text-[#C49F6A]">
                  <span>Read In-Depth Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {journalArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => navigateTo('journal-detail', art.id)}
              className="bg-[#FFFFFF] border border-[#EBE3D7] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#D4C5B3] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-16/10 overflow-hidden bg-[#F3ECE2]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#8C7E72]">
                    <span className="font-bold text-[#C49F6A] uppercase tracking-wider">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif-display font-bold text-lg text-[#241B15] group-hover:text-[#C49F6A] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#5A483E] leading-relaxed line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3A2D24] group-hover:text-[#C49F6A] transition-colors">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
