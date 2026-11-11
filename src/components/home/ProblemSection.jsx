import React from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  AlertTriangle, 
  ArrowRight, 
  DropletOff, 
  Ban, 
  Wind, 
  Footprints,
  Clock
} from 'lucide-react';

export default function ProblemSection() {
  const { navigateTo } = useStore();

  const problemCards = [
    {
      icon: DropletOff,
      title: "Wet Socks & Damp Feet",
      desc: "Rain seeps past eyelets and laces, turning ordinary cotton socks into waterlogged sponges for hours."
    },
    {
      icon: Wind,
      title: "Odor & Itching",
      desc: "Moisture trapped in leather footwear creates severe fungal breeding grounds and embarrassing odor in meetings."
    },
    {
      icon: Ban,
      title: "Ruined Comfort",
      desc: "Heavy, soggy fabric bunches at the heel, creates friction blisters, and destroys your day-long focus."
    },
    {
      icon: Footprints,
      title: "Bulky Rain Boots",
      desc: "Rubber duck boots are heavy, make feet sweat profusely, and look out-of-place in corporate offices."
    },
    {
      icon: Clock,
      title: "Inconvenient Shoe Covers",
      desc: "Disposable plastic shoe covers tear instantly, look unsightly, and are clumsy to slip on during sudden downpours."
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#EBE3D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            The Problem
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#241B15] tracking-tight">
            Rain ruins your day.
          </h2>
          <p className="text-base sm:text-lg font-serif-classic italic text-[#5A483E]">
            “Wet socks. Damp feet. Total discomfort.”
          </p>
          <div className="w-12 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* 2-Column Problem Layout matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Problem Illustration Frame (Cols 5) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E5DDD3] shadow-md relative overflow-hidden">
              <img
                src="./assets/problem solution for sole.png"
                alt="Person caught in the rain with wet soggy footwear dilemma"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="mt-4 p-3.5 bg-[#F3ECE2] rounded-lg border border-[#E5DDD3] text-center">
                <p className="text-xs font-serif-display italic text-[#5A483E]">
                  “Other options compromise your comfort, styling, and professional presentation.”
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Problem Cards Grid (Cols 7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {problemCards.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-[#FFFFFF] border border-[#EBE3D7] rounded-xl hover:border-[#D4C5B3] transition-all duration-200 shadow-2xs group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#F3ECE2] border border-[#E5DDD3] flex items-center justify-center text-[#5A483E] group-hover:bg-[#3A2D24] group-hover:text-[#FAF7F2] transition-colors mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif-display font-semibold text-sm text-[#3A2D24] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8C7E72] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Problem CTA Box */}
            <div className="p-5 bg-[#3A2D24] text-[#FAF7F2] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#C49F6A] font-semibold">
                  Stop sacrificing style for weather
                </p>
                <h4 className="font-serif-display text-lg text-[#FAF7F2]">
                  There’s a better way to walk through rain.
                </h4>
              </div>
              <button
                onClick={() => navigateTo('how-it-works')}
                className="px-5 py-2.5 bg-[#C49F6A] hover:bg-[#B38D56] text-[#241B15] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>See The Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
