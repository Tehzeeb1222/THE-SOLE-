import React from 'react';
import { useStore } from '../context/StoreContext';
import { Clock, ArrowLeft, Share2, Sparkles, BookOpen, Droplets, Check } from 'lucide-react';

export default function JournalDetailPage() {
  const { selectedArticleId, journalArticles, navigateTo, addToast } = useStore();

  const article = journalArticles.find((a) => a.id === selectedArticleId) || journalArticles[0];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast('Article link copied to clipboard!', 'success');
  };

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <button
          onClick={() => navigateTo('journal')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8C7E72] hover:text-[#3A2D24] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal</span>
        </button>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs text-[#8C7E72]">
            <span className="bg-[#EAE0D5] text-[#3A2D24] px-2.5 py-1 rounded-sm uppercase tracking-wider font-bold text-[10px]">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#241B15] leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg font-serif-classic italic text-[#5A483E] leading-relaxed">
            “{article.excerpt}”
          </p>

          <div className="pt-2 flex items-center justify-between border-y border-[#E5DDD3] py-3 text-xs text-[#8C7E72]">
            <span>By <strong className="text-[#3A2D24]">{article.author}</strong></span>
            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-[#3A2D24] hover:text-[#C49F6A]"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </button>
          </div>
        </div>

        {/* Article Hero Image */}
        <div className="aspect-16/10 rounded-2xl overflow-hidden bg-[#241B15] shadow-xl border border-[#D9CEC1]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-3xl border border-[#E5DDD3] shadow-md space-y-6 text-sm text-[#4A3B32] leading-relaxed font-light">
          <div className="whitespace-pre-line space-y-4">
            {article.content}
          </div>

          {/* Callout box inside article */}
          <div className="p-6 bg-[#FAF7F2] border border-[#C49F6A] rounded-2xl space-y-3 mt-8">
            <div className="flex items-center gap-2 text-[#3A2D24]">
              <Droplets className="w-5 h-5 text-[#C49F6A]" />
              <h4 className="font-serif-display font-bold text-base">
                The Sole Hydrophobic Guarantee
              </h4>
            </div>
            <p className="text-xs text-[#5A483E]">
              Never worry about wet socks in your formal shoes again. Experience our 200-needle nano-knit with a 30-day money-back dry guarantee.
            </p>
            <button
              onClick={() => navigateTo('shop')}
              className="px-5 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#241B15]"
            >
              Explore Hydrophobic Socks
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
