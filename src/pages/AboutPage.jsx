import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, Droplets, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const { navigateTo } = useStore();

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="font-script text-5xl text-[#3A2D24]">The Sole</span>
          </div>
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            Our Heritage & Philosophy
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#241B15] tracking-tight uppercase">
            Built For Real Life.
          </h1>
          <p className="text-base sm:text-lg font-serif-classic italic text-[#5A483E]">
            “Rain should never decide what you wear.”
          </p>
          <div className="w-16 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* Editorial Story Frame */}
        <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="/assets/The Sole  main .png"
              alt="The Sole brand lifestyle"
              className="w-full h-auto object-cover rounded-2xl border border-[#E5DDD3]"
            />
            
            <div className="space-y-4">
              <h2 className="font-serif-display text-2xl sm:text-3xl text-[#241B15]">
                The Simple Idea That Started It All
              </h2>
              <p className="text-xs sm:text-sm text-[#5A483E] leading-relaxed font-light">
                The Sole was born out of a relentless frustration shared by millions of working professionals across India: <strong>how can we dress with bespoke sophistication when the monsoon is completely merciless?</strong>
              </p>
              <p className="text-xs sm:text-sm text-[#5A483E] leading-relaxed font-light">
                For decades, the only answers were ugly rubber overshoes, bulky duck boots that had to be swapped at the office, or wet, soggy cotton socks that ruined expensive dress shoes and distracted from high-stakes boardroom meetings.
              </p>
              <p className="text-xs sm:text-sm text-[#3A2D24] font-medium leading-relaxed">
                We asked a different question: <em>What if the sock itself was an impenetrable, breathable barrier?</em>
              </p>
            </div>
          </div>

          {/* 4 Pillars */}
          <div className="pt-8 border-t border-[#EFE8DE] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DDD3] space-y-1.5">
              <Droplets className="w-5 h-5 text-[#C49F6A]" />
              <h4 className="font-serif-display font-bold text-sm text-[#3A2D24]">Hydrophobic Tech</h4>
              <p className="text-xs text-[#8C7E72]">Molecular fiber treatment creating a lotus-leaf water roll-off barrier.</p>
            </div>
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DDD3] space-y-1.5">
              <Sparkles className="w-5 h-5 text-[#C49F6A]" />
              <h4 className="font-serif-display font-bold text-sm text-[#3A2D24]">Italian Tailoring</h4>
              <p className="text-xs text-[#8C7E72]">200-needle high density fine knit for effortless slim Oxford shoe fit.</p>
            </div>
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DDD3] space-y-1.5">
              <ShieldCheck className="w-5 h-5 text-[#C49F6A]" />
              <h4 className="font-serif-display font-bold text-sm text-[#3A2D24]">Daily Practicality</h4>
              <p className="text-xs text-[#8C7E72]">Machine washable, anti-odor silver ions, and 60+ wash longevity.</p>
            </div>
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DDD3] space-y-1.5">
              <Heart className="w-5 h-5 text-[#C49F6A]" />
              <h4 className="font-serif-display font-bold text-sm text-[#3A2D24]">Crafted for India</h4>
              <p className="text-xs text-[#8C7E72]">Engineered specifically for torrential Mumbai, Bangalore & Delhi rains.</p>
            </div>
          </div>

          <div className="pt-6 text-center space-y-3">
            <p className="font-serif-classic italic text-lg text-[#3A2D24]">
              “Dry feet. Everyday. Step out with unwavering confidence.”
            </p>
            <button
              onClick={() => navigateTo('shop')}
              className="px-8 py-3.5 bg-[#3A2D24] text-[#FAF7F2] hover:bg-[#241B15] text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors"
            >
              Shop The Flagship Collection
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
