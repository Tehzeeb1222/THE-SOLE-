import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../../context/StoreContext';
import { Search, X, ArrowRight, BookOpen, HelpCircle, Package, Droplets } from 'lucide-react';

export default function SearchModal() {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    products, 
    journalArticles, 
    faqs, 
    navigateTo 
  } = useStore();

  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchedProducts = cleanQuery
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.subtitle.toLowerCase().includes(cleanQuery) ||
          p.category.toLowerCase().includes(cleanQuery) ||
          p.colors.some((c) => c.name.toLowerCase().includes(cleanQuery))
      )
    : [];

  const matchedArticles = cleanQuery
    ? journalArticles.filter(
        (a) =>
          a.title.toLowerCase().includes(cleanQuery) ||
          a.excerpt.toLowerCase().includes(cleanQuery) ||
          a.category.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedFaqs = cleanQuery
    ? faqs.filter(
        (f) => f.q.toLowerCase().includes(cleanQuery) || f.a.toLowerCase().includes(cleanQuery)
      )
    : [];

  const popularSearches = [
    'Obsidian Black',
    'Executive Grey',
    'Monsoon 3-Pack',
    'Shoe Slip Covers',
    'Oxfords & Loafers',
    'Hydrophobic Nano Technology'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
      {/* Backdrop */}
      <div 
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-[#241B15]/70 backdrop-blur-xs transition-opacity"
      />

      <div className="relative max-w-3xl mx-auto bg-[#FAF7F2] rounded-xl shadow-2xl border border-[#D9CEC1] overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#E5DDD3] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8C7E72]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search socks, formal footwear guides, rain science, FAQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-base sm:text-lg text-[#2C241E] placeholder-[#A69788] focus:outline-hidden font-light"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8C7E72] hover:text-[#3A2D24]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-2.5 py-1 text-xs uppercase tracking-wider text-[#8C7E72] hover:text-[#3A2D24] border border-[#D9CEC1] rounded-sm"
          >
            Esc
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {!query ? (
            <div>
              <p className="text-[11px] uppercase tracking-widest font-semibold text-[#8C7E72] mb-3">
                Trending Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 bg-[#F3ECE2] hover:bg-[#EAE0D5] text-xs text-[#4A3B32] rounded-full transition-colors flex items-center gap-1.5"
                  >
                    <Search className="w-3 h-3 text-[#8C7E72]" />
                    <span>{term}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Matched Products */}
              {matchedProducts.length > 0 && (
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-semibold text-[#8C7E72] mb-3 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-[#C49F6A]" />
                    Products ({matchedProducts.length})
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchedProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          navigateTo('product', p.id);
                        }}
                        className="p-3 bg-[#FFFFFF] border border-[#EBE3D7] rounded-lg hover:border-[#C49F6A] cursor-pointer transition-all flex items-center gap-3 group shadow-2xs"
                      >
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-14 h-14 object-cover rounded-md border border-[#E5DDD3]"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif-display font-semibold text-sm text-[#3A2D24] group-hover:text-[#C49F6A] transition-colors truncate">
                            {p.name}
                          </h4>
                          <p className="text-xs text-[#8C7E72] truncate">{p.subtitle}</p>
                          <span className="font-bold text-xs text-[#3A2D24]">₹{p.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Articles */}
              {matchedArticles.length > 0 && (
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-semibold text-[#8C7E72] mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#C49F6A]" />
                    Rain-Ready Journal Guides ({matchedArticles.length})
                  </p>
                  <div className="space-y-2">
                    {matchedArticles.map((art) => (
                      <div
                        key={art.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          navigateTo('journal-detail', art.id);
                        }}
                        className="p-3 bg-[#FFFFFF] border border-[#EBE3D7] rounded-lg hover:border-[#C49F6A] cursor-pointer transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-wider text-[#C49F6A]">
                            {art.category}
                          </span>
                          <h4 className="font-serif-display font-semibold text-sm text-[#3A2D24] group-hover:text-[#C49F6A]">
                            {art.title}
                          </h4>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8C7E72] group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched FAQs */}
              {matchedFaqs.length > 0 && (
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-semibold text-[#8C7E72] mb-3 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#C49F6A]" />
                    Help & FAQs ({matchedFaqs.length})
                  </p>
                  <div className="space-y-2">
                    {matchedFaqs.map((faq, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setIsSearchOpen(false);
                          navigateTo('contact-faq');
                        }}
                        className="p-3 bg-[#FFFFFF] border border-[#EBE3D7] rounded-lg cursor-pointer hover:border-[#C49F6A]"
                      >
                        <p className="font-serif-display font-semibold text-xs text-[#3A2D24] mb-1">
                          {faq.q}
                        </p>
                        <p className="text-xs text-[#8C7E72] line-clamp-2">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedProducts.length === 0 && matchedArticles.length === 0 && matchedFaqs.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-sm font-serif-display text-[#3A2D24]">
                    No results found for "{query}"
                  </p>
                  <p className="text-xs text-[#8C7E72] mt-1">
                    Try searching for "black", "formal", "bundle", "size", or "hydrophobic".
                  </p>
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
