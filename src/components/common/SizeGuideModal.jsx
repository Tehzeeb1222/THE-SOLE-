import React from 'react';
import { useStore } from '../../context/StoreContext';
import { X, Check, Ruler, Footprints, MessageSquare } from 'lucide-react';

export default function SizeGuideModal() {
  const { isSizeGuideOpen, setIsSizeGuideOpen, setIsChatbotOpen } = useStore();

  if (!isSizeGuideOpen) return null;

  const sizeChart = [
    { sizeName: 'UK/IN 6–7', eu: '39–41', us: '7–8', footCm: '24.5 – 25.5 cm', footIn: '9.6 – 10.0"' },
    { sizeName: 'UK/IN 8–9', eu: '42–43', us: '9–10', footCm: '26.0 – 27.0 cm', footIn: '10.2 – 10.6"', popular: true },
    { sizeName: 'UK/IN 10–11', eu: '44–45', us: '11–12', footCm: '27.5 – 28.5 cm', footIn: '10.8 – 11.2"' },
    { sizeName: 'UK/IN 12+', eu: '46–47', us: '13+', footCm: '29.0 – 30.5 cm', footIn: '11.4 – 12.0"' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-16 flex items-center justify-center">
      <div 
        onClick={() => setIsSizeGuideOpen(false)}
        className="fixed inset-0 bg-[#241B15]/70 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-xl shadow-2xl border border-[#D9CEC1] overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-[#3A2D24] text-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Ruler className="w-5 h-5 text-[#C49F6A]" />
            <div>
              <h3 className="font-serif-display text-xl font-semibold">
                Sartorial Size & Fit Guide
              </h3>
              <p className="text-xs text-[#C49F6A]">
                Engineered for formal leather shoes & everyday footwear
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-1.5 text-[#A69788] hover:text-[#FAF7F2] rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-xs text-[#5A483E] leading-relaxed">
            The Sole hydrophobic socks are constructed with high-tenacity Lycra® micro-ribbing that adapts seamlessly to your foot contours without bunching at the heel or squeezing the toe box inside slim-fit Oxford shoes.
          </p>

          {/* Size Conversion Table */}
          <div className="overflow-x-auto border border-[#E5DDD3] rounded-lg">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#F3ECE2] text-[#3A2D24] font-semibold border-b border-[#E5DDD3]">
                <tr>
                  <th className="p-3">UK / IN Size</th>
                  <th className="p-3">EU Size</th>
                  <th className="p-3">US Size</th>
                  <th className="p-3">Foot Length (cm)</th>
                  <th className="p-3">Foot Length (inches)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE8DE] bg-[#FFFFFF]">
                {sizeChart.map((row, i) => (
                  <tr key={i} className={row.popular ? 'bg-[#FAF7F2] font-semibold' : ''}>
                    <td className="p-3 text-[#3A2D24] flex items-center gap-1.5">
                      <span>{row.sizeName}</span>
                      {row.popular && (
                        <span className="text-[9px] bg-[#C49F6A] text-[#241B15] px-1.5 py-0.2 rounded-xs uppercase tracking-wider font-bold">
                          Most Popular
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-[#5A483E]">{row.eu}</td>
                    <td className="p-3 text-[#5A483E]">{row.us}</td>
                    <td className="p-3 text-[#5A483E]">{row.footCm}</td>
                    <td className="p-3 text-[#5A483E]">{row.footIn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footwear Matching Advice */}
          <div className="bg-[#F3ECE2] p-4 rounded-lg border border-[#E5DDD3] space-y-2">
            <h4 className="font-serif-display font-bold text-sm text-[#3A2D24] flex items-center gap-1.5">
              <Footprints className="w-4 h-4 text-[#C49F6A]" />
              How To Choose for Your Footwear:
            </h4>
            <ul className="text-xs text-[#5A483E] space-y-1.5 list-disc list-inside">
              <li><strong>Oxford & Derby Shoes:</strong> Choose your exact shoe size. The 200-needle density ensures zero tight pressure.</li>
              <li><strong>Penny & Tassel Loafers:</strong> If you are in-between sizes (e.g. 7.5), select UK 6–7 for a snug, non-slip feel.</li>
              <li><strong>Chelsea Boots & Brogues:</strong> Select UK 8–9 or UK 10–11 based on standard boot sizing.</li>
            </ul>
          </div>

          {/* Not Sure Prompt */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <p className="text-xs text-[#8C7E72] text-center sm:text-left">
              Still unsure about your exact fit or shoe pairing?
            </p>
            <button
              onClick={() => {
                setIsSizeGuideOpen(false);
                setIsChatbotOpen(true);
              }}
              className="px-4 py-2 bg-[#3A2D24] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-[#241B15] transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C49F6A]" />
              <span>Ask AI Sizing Concierge</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
