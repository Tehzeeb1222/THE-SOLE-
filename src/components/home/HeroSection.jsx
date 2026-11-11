import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  Droplets, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Play, 
  RotateCw,
  Award
} from 'lucide-react';

export default function HeroSection() {
  const { navigateTo, setActiveCategoryFilter } = useStore();
  const [waterSprayActive, setWaterSprayActive] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F2EB] via-[#FAF7F2] to-[#FAF7F2] border-b border-[#EBE3D7] pt-8 sm:pt-14 pb-16 lg:pb-24">
      
      {/* Subtle Rain Texture Background Ambient */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3A2D24_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: Editorial Brand Typography & CTAs (Cols 6) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Script Brand Signature */}
            <div className="inline-flex items-center gap-3">
              <span className="font-script text-4xl sm:text-5xl text-[#3A2D24] select-none tracking-tight">
                The Sole
              </span>
              <span className="text-[10px] tracking-[0.25em] font-bold text-[#8C7E72] uppercase border-l border-[#D9CEC1] pl-3">
                Dry Feet. Everyday.
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#241B15] tracking-tight leading-[1.08] uppercase">
                Premium <br />
                <span className="italic font-normal">Hydrophobic</span> <br />
                Socks
              </h1>
              <p className="font-cinzel text-sm sm:text-base tracking-[0.2em] font-semibold text-[#8C7E72] uppercase pt-2">
                For a rain-ready you.
              </p>
            </div>

            {/* Brand Philosophy Subtext */}
            <p className="text-sm sm:text-base text-[#5A483E] font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Engineered with proprietary nano-lattice yarn that repels torrential rainwater at the surface while slipping seamlessly into tailored Oxford shoes and loafers. Uncompromising elegance, rain or shine.
            </p>

            {/* Editorial Triple Pillar Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8C7E72] pt-1">
              <span>COMFORT</span>
              <span>/</span>
              <span>PROTECTION</span>
              <span>/</span>
              <span>STYLE</span>
            </div>

            {/* Hero CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => {
                  setActiveCategoryFilter('all');
                  navigateTo('shop');
                }}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#3A2D24] text-[#FAF7F2] hover:bg-[#241B15] font-medium text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2.5 group active:scale-95"
              >
                <span>Shop Hydrophobic Socks</span>
                <ArrowRight className="w-4 h-4 text-[#C49F6A] group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('how-it-works')}
                className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-[#3A2D24] text-[#3A2D24] hover:bg-[#F3ECE2] font-medium text-xs tracking-[0.18em] uppercase rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Discover Technology</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-[#EBE3D7] grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="font-serif-display font-bold text-lg text-[#3A2D24]">&gt;140°</p>
                <p className="text-[10px] text-[#8C7E72] uppercase tracking-wider">Water Contact Angle</p>
              </div>
              <div>
                <p className="font-serif-display font-bold text-lg text-[#3A2D24]">200-Needle</p>
                <p className="text-[10px] text-[#8C7E72] uppercase tracking-wider">Formal Shoe Knit</p>
              </div>
              <div>
                <p className="font-serif-display font-bold text-lg text-[#3A2D24]">60+ Washes</p>
                <p className="text-[10px] text-[#8C7E72] uppercase tracking-wider">Hydrophobic Life</p>
              </div>
            </div>

          </div>

          {/* RIGHT: Editorial Artwork Hero Visual (Cols 6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Editorial Frame */}
              <div className="relative bg-[#FFFFFF] p-3 sm:p-4 rounded-2xl shadow-xl border border-[#E5DDD3] overflow-hidden group">
                <img
                  src="/assets/The Sole  main .png"
                  alt="Sophisticated woman in trenchcoat with umbrella walking through rain in The Sole hydrophobic socks and formal leather shoes"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.01]"
                />

                {/* Floating Interactive Water Repellent Badge */}
                <div className="absolute top-6 left-6 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#D9CEC1] rounded-xl p-3 shadow-lg max-w-[200px] sm:max-w-[220px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 rounded-full bg-[#3A2D24] text-[#C49F6A] flex items-center justify-center">
                      <Droplets className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#3A2D24]">
                      Hydrophobic Fabric
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5A483E] leading-tight font-light">
                    Water stays out. Feet stay 100% dry inside formal shoes.
                  </p>
                </div>

                {/* Floating Quote Badge */}
                <div className="absolute bottom-6 right-6 bg-[#241B15]/90 backdrop-blur-md text-[#FAF7F2] border border-[#5A483E] rounded-xl p-3 shadow-xl max-w-[220px] hidden sm:block">
                  <div className="flex items-center gap-1 text-[#C49F6A] text-xs mb-1">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-[11px] italic font-serif-display text-[#EFE8DE] leading-snug">
                    "The protection starts with the sock."
                  </p>
                  <span className="block text-[9px] uppercase tracking-wider text-[#A69788] mt-1">
                    — Tested in Mumbai Monsoons
                  </span>
                </div>

              </div>

              {/* Water Droplets Decorative Glow */}
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#C49F6A]/10 rounded-full blur-2xl -z-10 pointer-events-none"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
