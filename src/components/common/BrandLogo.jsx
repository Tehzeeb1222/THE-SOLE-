import React from 'react';

export default function BrandLogo({ 
  size = 'md', 
  theme = 'dark', 
  showTagline = true, 
  className = '' 
}) {
  // size: 'sm' | 'md' | 'lg' | 'xl'
  // theme: 'dark' (brown on cream) | 'light' (cream/white on dark) | 'gold'

  const textColor = theme === 'light' ? '#FAF7F2' : theme === 'gold' ? '#C49F6A' : '#3A2D24';
  const dotColor = '#C49F6A';
  const subColor = theme === 'light' ? '#C49F6A' : '#8C7E72';

  const sizeConfig = {
    sm: { text: 'text-2xl', dot: 'w-1 h-1 mb-0.5', sub: 'text-[8px] tracking-[0.2em]' },
    md: { text: 'text-3xl sm:text-4xl', dot: 'w-1.5 h-1.5 mb-1', sub: 'text-[9px] sm:text-[10px] tracking-[0.25em]' },
    lg: { text: 'text-4xl sm:text-5xl', dot: 'w-2 h-2 mb-1.5', sub: 'text-[11px] sm:text-xs tracking-[0.28em]' },
    xl: { text: 'text-5xl sm:text-6xl', dot: 'w-2.5 h-2.5 mb-2', sub: 'text-xs sm:text-sm tracking-[0.3em]' }
  };

  const current = sizeConfig[size] || sizeConfig.md;

  return (
    <div className={`flex flex-col select-none ${className}`}>
      <div className="flex items-baseline gap-1.5">
        <span 
          className={`font-script ${current.text} leading-none tracking-normal font-normal transition-colors`}
          style={{ color: textColor }}
        >
          The Sole
        </span>
        <span 
          className={`rounded-full ${current.dot} shrink-0`}
          style={{ backgroundColor: dotColor }}
        />
      </div>
      {showTagline && (
        <span 
          className={`font-sans uppercase font-bold ${current.sub} mt-0.5 transition-colors`}
          style={{ color: subColor }}
        >
          Dry Feet. Everyday.
        </span>
      )}
    </div>
  );
}
