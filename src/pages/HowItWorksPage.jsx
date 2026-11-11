import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Droplets, 
  Wind, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  RotateCcw,
  Footprints
} from 'lucide-react';

export default function HowItWorksPage() {
  const { navigateTo } = useStore();
  const [contactAngle, setContactAngle] = useState(145);
  const [activeMaterialTab, setActiveMaterialTab] = useState('the-sole');

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="font-script text-4xl text-[#3A2D24]">The Sole</span>
          </div>
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            Material Science & Engineering
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#241B15] tracking-tight uppercase">
            How It Works
          </h1>
          <p className="text-base sm:text-lg font-serif-classic italic text-[#5A483E]">
            “The science behind impossible dryness inside formal footwear.”
          </p>
          <div className="w-16 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* 4-Step Process Section with Reference Artwork */}
        <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-6 sm:p-10 shadow-xl space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#241B15]">
              The 4-Step Dry Steps Protocol
            </h2>
            <p className="text-xs text-[#8C7E72]">
              Engineered for seamless integration into your morning routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-[#FAF7F2] border border-[#E5DDD3] rounded-2xl space-y-3">
              <span className="text-xs font-bold text-[#C49F6A] uppercase tracking-wider">Step 01</span>
              <h3 className="font-serif-display font-bold text-lg text-[#3A2D24]">Prepare</h3>
              <p className="text-xs text-[#5A483E] leading-relaxed">
                Slide into your hydrophobic The Sole sock. Crafted with 200-needle precision to fit standard Oxford, Loafer, or Monk Strap dress shoes without bulk.
              </p>
            </div>

            <div className="p-5 bg-[#FAF7F2] border border-[#E5DDD3] rounded-2xl space-y-3">
              <span className="text-xs font-bold text-[#C49F6A] uppercase tracking-wider">Step 02</span>
              <h3 className="font-serif-display font-bold text-lg text-[#3A2D24]">Activate Protection</h3>
              <p className="text-xs text-[#5A483E] leading-relaxed">
                As soon as water or puddle splashes make contact, the molecular Nano-Shield™ lattice repels liquid at the surface tension boundary.
              </p>
            </div>

            <div className="p-5 bg-[#FAF7F2] border border-[#E5DDD3] rounded-2xl space-y-3">
              <span className="text-xs font-bold text-[#C49F6A] uppercase tracking-wider">Step 03</span>
              <h3 className="font-serif-display font-bold text-lg text-[#3A2D24]">Enjoy Dry Confidence</h3>
              <p className="text-xs text-[#5A483E] leading-relaxed">
                Water droplets roll off like spherical beads. Step onto rain-swept streets, station platforms, and flooded sidewalks without dread.
              </p>
            </div>

            <div className="p-5 bg-[#FAF7F2] border border-[#E5DDD3] rounded-2xl space-y-3">
              <span className="text-xs font-bold text-[#C49F6A] uppercase tracking-wider">Step 04</span>
              <h3 className="font-serif-display font-bold text-lg text-[#3A2D24]">All-Day Performance</h3>
              <p className="text-xs text-[#5A483E] leading-relaxed">
                Invisible protection that remains active all day long. Micro-pores expel sweat vapor, while integrated silver ions actively eliminate bacterial odor.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E5DDD3]">
            <img
              src="/assets/working.png"
              alt="4-step process flow graphic"
              className="w-full max-h-[420px] object-contain mx-auto"
            />
          </div>
        </div>

        {/* Interactive Nanotechnology Physics Lab */}
        <div className="bg-[#241B15] text-[#FAF7F2] rounded-3xl p-6 sm:p-12 shadow-2xl border border-[#3A2D24] space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#C49F6A]">
              Interactive Physics Lab
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#FAF7F2]">
              Understanding Hydrophobic Contact Angles
            </h2>
            <p className="text-xs sm:text-sm text-[#C4B7AA] font-light">
              Adjust the angle slider to see why ordinary cotton soaks up water while The Sole causes liquid to pearl and roll away.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Interactive Visual Canvas (Cols 6) */}
            <div className="lg:col-span-6 bg-[#1A120D] border border-[#4A3B32] rounded-2xl p-6 flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden">
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Surface line */}
                <div className="absolute bottom-12 inset-x-0 h-1 bg-[#8C7E72]/40 rounded-full"></div>
                <div className="absolute bottom-6 text-[10px] text-[#A69788] uppercase tracking-widest font-mono">
                  {contactAngle < 90 ? 'Ordinary Cotton Surface' : 'The Sole Nano-Lattice Surface'}
                </div>

                {/* Simulated Droplet Shape based on Angle */}
                <div 
                  className="transition-all duration-300 shadow-2xl border border-white/40 flex items-center justify-center"
                  style={{
                    width: `${Math.max(40, 90 - (contactAngle / 3))}px`,
                    height: `${Math.min(90, 40 + (contactAngle / 2))}px`,
                    borderRadius: contactAngle > 120 ? '50%' : contactAngle > 90 ? '45% 45% 20% 20%' : '10% 10% 45% 45%',
                    backgroundColor: contactAngle > 110 ? '#C49F6A' : '#5A483E',
                    transform: `translateY(${contactAngle > 120 ? '-20px' : '0px'})`
                  }}
                >
                  <Droplets className="w-5 h-5 text-white/80" />
                </div>
              </div>

              <div className="text-center mt-2">
                <span className="text-2xl font-serif-display font-bold text-[#C49F6A]">
                  θ = {contactAngle}°
                </span>
                <p className="text-[11px] text-[#C4B7AA] mt-0.5">
                  {contactAngle >= 140 
                    ? 'Super-Hydrophobic: Instant Beading & Roll-Off (The Sole)' 
                    : contactAngle >= 90 
                    ? 'Weak Repellency: Partial Moisture Barrier' 
                    : 'Hydrophilic: Instant Capillary Absorption (Ordinary Socks)'}
                </p>
              </div>
            </div>

            {/* Slider Controls & Details (Cols 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3 bg-[#2E221A] p-5 rounded-xl border border-[#4A3B32]">
                <div className="flex justify-between text-xs">
                  <span className="text-[#C49F6A] font-bold uppercase tracking-wider">Drag Contact Angle:</span>
                  <span className="font-mono font-bold text-[#FAF7F2]">{contactAngle}°</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="160"
                  value={contactAngle}
                  onChange={(e) => setContactAngle(Number(e.target.value))}
                  className="w-full accent-[#C49F6A] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#8C7E72] font-mono">
                  <span>20° (Soggy Cotton)</span>
                  <span>90° (Standard DWR)</span>
                  <span>145° (The Sole)</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#C4B7AA] leading-relaxed">
                <p>
                  <strong>The Lotus Leaf Phenomenon:</strong> When water encounters our silica-infused combed cotton threads, the surface tension prevents the droplet from flattening out and wetting the yarn. Instead, droplets maintain spherical geometry and roll off under standard gravitational tilt.
                </p>
                <p>
                  <strong>Why Micro-Pores Don't Trap Sweat:</strong> Liquid water molecules measure ~2,500 nm in droplet form, while perspiration vapor molecules measure ~0.0004 nm. The microscopic pore spaces in our 200-needle knit allow body vapor to escape with zero resistance.
                </p>
              </div>

              <button
                onClick={() => navigateTo('shop')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#C49F6A] hover:bg-[#B38D56] text-[#241B15] font-semibold text-xs uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Experience The Technology</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
