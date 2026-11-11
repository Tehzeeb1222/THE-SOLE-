import React from 'react';

export default function Mascot({ 
  state = 'idle', // 'idle' | 'happy' | 'waving' | 'thinking' | 'rain'
  size = 60,
  className = ''
}) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-md transition-transform duration-300 hover:scale-105"
      >
        <defs>
          {/* Hydrophobic Droplet Pearl Gradient */}
          <linearGradient id="dropGrad" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="40%" stopColor="#DFD3C3" />
            <stop offset="100%" stopColor="#C49F6A" />
          </linearGradient>

          <linearGradient id="hatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A3B32" />
            <stop offset="100%" stopColor="#241B15" />
          </linearGradient>

          <linearGradient id="goldBand" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#C49F6A" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Hydrophobic Shield Aura */}
        <circle cx="50" cy="55" r="38" fill="#C49F6A" opacity="0.12" />

        {/* Droplet Body (Lotus Water Drop Shape) */}
        <path 
          d="M50 18 C50 18, 22 48, 22 66 C22 82, 35 94, 50 94 C65 94, 78 82, 78 66 C78 48, 50 18, 50 18 Z" 
          fill="url(#dropGrad)" 
          stroke="#3A2D24" 
          strokeWidth="2.5"
        />

        {/* Hydrophobic Surface Sheen Highlight */}
        <path 
          d="M34 52 C30 62, 34 76, 44 82" 
          stroke="#FFFFFF" 
          strokeWidth="3" 
          strokeLinecap="round" 
          fill="none" 
          opacity="0.8"
        />
        <circle cx="36" cy="46" r="2.5" fill="#FFFFFF" opacity="0.9" />

        {/* Eyes */}
        {state === 'happy' ? (
          // Joyful curved eyes
          <g stroke="#241B15" strokeWidth="2.5" strokeLinecap="round" fill="none">
            <path d="M40 58 Q44 52 48 58" />
            <path d="M56 58 Q60 52 64 58" />
          </g>
        ) : state === 'thinking' ? (
          // Inquisitive eyes
          <g>
            <circle cx="44" cy="56" r="3.5" fill="#241B15" />
            <circle cx="60" cy="54" r="4.5" fill="#241B15" />
            <circle cx="43" cy="55" r="1" fill="#FFFFFF" />
            <circle cx="59" cy="53" r="1.5" fill="#FFFFFF" />
          </g>
        ) : (
          // Standard pleasant bright eyes
          <g>
            <circle cx="43" cy="56" r="3.5" fill="#241B15" />
            <circle cx="61" cy="56" r="3.5" fill="#241B15" />
            <circle cx="42" cy="55" r="1.2" fill="#FFFFFF" />
            <circle cx="60" cy="55" r="1.2" fill="#FFFFFF" />
          </g>
        )}

        {/* Cheeks Blush */}
        <ellipse cx="37" cy="63" rx="3" ry="1.8" fill="#E28D7C" opacity="0.5" />
        <ellipse cx="67" cy="63" rx="3" ry="1.8" fill="#E28D7C" opacity="0.5" />

        {/* Gentle Smile */}
        <path 
          d="M47 64 Q52 70 57 64" 
          stroke="#241B15" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          fill="none" 
        />

        {/* Gentleman's Mini Bowtie */}
        <g transform="translate(50, 75)">
          <path d="M0 0 L-7 -4 L-7 4 Z" fill="#3A2D24" stroke="#241B15" strokeWidth="1" />
          <path d="M0 0 L7 -4 L7 4 Z" fill="#3A2D24" stroke="#241B15" strokeWidth="1" />
          <circle cx="0" cy="0" r="2.5" fill="#C49F6A" />
        </g>

        {/* Luxury Top Hat / Fedora */}
        <g transform="translate(0, -2)">
          {/* Hat Brim */}
          <ellipse cx="50" cy="24" rx="22" ry="4.5" fill="#241B15" stroke="#3A2D24" strokeWidth="1" />
          {/* Hat Crown */}
          <path d="M36 24 L38 8 Q50 6 62 8 L64 24 Z" fill="url(#hatGrad)" stroke="#241B15" strokeWidth="1.5" />
          {/* Gold Hat Ribbon */}
          <path d="M37 22 L37.5 17 Q50 15.5 62.5 17 L63 22 Z" fill="url(#goldBand)" />
        </g>

        {/* Little Umbrella in Hand */}
        <g transform="translate(74, 52) rotate(15)">
          {/* Umbrella Canopy */}
          <path d="M0 0 C-6 -8, 6 -8, 0 0" fill="#3A2D24" />
          <path d="M-10 0 C-10 -10, 10 -10, 10 0 Z" fill="#241B15" stroke="#C49F6A" strokeWidth="1" />
          {/* Umbrella Shaft & Curved Handle */}
          <line x1="0" y1="-8" x2="0" y2="18" stroke="#C49F6A" strokeWidth="2" strokeLinecap="round" />
          <path d="M0 18 Q0 24 -4 24 Q-8 24 -8 20" fill="none" stroke="#C49F6A" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Little Rolling Micro Droplets (Lotus Repel Demo) */}
        <circle cx="22" cy="42" r="2" fill="#FAF7F2" stroke="#C49F6A" strokeWidth="1" opacity="0.8" />
        <circle cx="78" cy="40" r="1.5" fill="#FAF7F2" stroke="#C49F6A" strokeWidth="0.8" opacity="0.7" />
      </svg>
    </div>
  );
}
