import React from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Droplets, 
  Wind, 
  ShieldCheck, 
  Footprints, 
  Sparkles, 
  Check, 
  X, 
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  RotateCcw
} from 'lucide-react';
import { COMPARISON_DATA } from '../data/products';

export default function WhyTheSolePage() {
  const { navigateTo } = useStore();

  const extraPillars = [
    {
      title: "Cost Per Wear Efficiency",
      desc: "Unlike disposable shoe covers or cheap socks that stretch out after 3 washes, The Sole is engineered for 60+ machine washes—costing under ₹14 per rainy wear.",
      icon: TrendingUp
    },
    {
      title: "Silver-Ion Anti-Odor Technology",
      desc: "Trapped humidity normally creates persistent foot odor in closed leather shoes. Our integrated silver threads naturally eliminate 99.4% of odor-causing bacteria.",
      icon: Sparkles
    },
    {
      title: "Hand-Linked Seamless Toe",
      desc: "Traditional sock seams create bulky ridges across the toes that chafe inside stiff Oxford shoes. The Sole uses bespoke Italian seamless linking for pure comfort.",
      icon: Award
    },
    {
      title: "Stay-Up Graduated Calf Band",
      desc: "Engineered with double-elastic ribbing that stays crisp and taut beneath suit trousers without cutting off calf circulation.",
      icon: Zap
    }
  ];

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="font-script text-4xl text-[#3A2D24]">The Sole</span>
          </div>
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            The Comparative Standard
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#241B15] tracking-tight uppercase">
            Why The Sole?
          </h1>
          <p className="text-base sm:text-lg font-serif-classic italic text-[#5A483E]">
            “Uncompromising protection. Bespoke Italian comfort.”
          </p>
          <div className="w-16 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* Master Comparison Matrix */}
        <div className="bg-[#FFFFFF] border border-[#D9CEC1] rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden">
          <div className="text-center max-w-xl mx-auto space-y-1 mb-8">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#241B15]">
              Head-To-Head Comparison
            </h2>
            <p className="text-xs text-[#8C7E72]">
              How The Sole outperforms traditional cotton, waterproof membranes, and rubber overshoes.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-[#D9CEC1]">
                  <th className="p-4 bg-[#F3ECE2] text-[#3A2D24] uppercase tracking-wider font-bold w-1/4">
                    Evaluation Metric
                  </th>
                  <th className="p-4 bg-[#3A2D24] text-[#FAF7F2] uppercase tracking-wider font-bold w-3/8 text-center border-x border-[#4A3B32]">
                    <div className="flex items-center justify-center gap-1 text-[#C49F6A]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>THE SOLE HYDROPHOBIC</span>
                    </div>
                  </th>
                  <th className="p-4 bg-[#EAE0D5]/70 text-[#5A483E] uppercase tracking-wider font-bold w-3/8 text-center">
                    OTHER OPTIONS (Cotton / Covers / Boots)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE8DE]">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F2] transition-colors">
                    <td className="p-4 font-serif-display font-bold text-xs sm:text-sm text-[#3A2D24]">
                      {row.feature}
                    </td>
                    <td className="p-4 bg-[#F7F2EB]/50 border-x border-[#E5DDD3] text-[#241B15] font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.theSole}</span>
                      </div>
                    </td>
                    <td className="p-4 text-[#7A6C60]">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <span>{row.otherBrands}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extraPillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div key={idx} className="bg-[#FFFFFF] border border-[#E5DDD3] rounded-2xl p-6 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F3ECE2] border border-[#E5DDD3] flex items-center justify-center text-[#3A2D24] shrink-0">
                  <IconComp className="w-5 h-5 text-[#C49F6A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-display font-bold text-base text-[#241B15]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#5A483E] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Action */}
        <div className="p-8 bg-[#3A2D24] text-[#FAF7F2] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold text-[#C49F6A] tracking-widest">
              Risk-Free Monsoon Trial
            </span>
            <h3 className="font-serif-display text-2xl text-[#FAF7F2]">
              Experience The Sole for 30 Days
            </h3>
            <p className="text-xs text-[#C4B7AA]">
              If your feet get wet or you're unsatisfied with the fit in your shoes, we will refund 100% of your money.
            </p>
          </div>

          <button
            onClick={() => navigateTo('shop')}
            className="px-6 py-3.5 bg-[#C49F6A] hover:bg-[#B38D56] text-[#241B15] font-semibold text-xs uppercase tracking-widest rounded-sm transition-colors flex items-center gap-2 shrink-0"
          >
            <span>Shop The Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
