import React from 'react';
import { ExternalLink, Heart, MessageCircle } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';

export default function InstagramFeed() {
  const igPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
      caption: "Boardroom ready even when the skies open up. The Sole Classic Executive with Cap-Toe Oxfords.",
      likes: 842,
      comments: 49
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80",
      caption: "Texture study: 200-needle hand-linked ribbing with water-rolling Nano-Shield™.",
      likes: 1204,
      comments: 63
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80",
      caption: "Loafer season shouldn't stop for monsoon. Keep the ankle dry without bulky covers.",
      likes: 958,
      comments: 31
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80",
      caption: "Chelsea boots + Australian Merino hydrophobic weave. Pure thermoregulating comfort.",
      likes: 1420,
      comments: 88
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#EBE3D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              {/* Instagram Vector Icon */}
              <svg className="w-5 h-5 fill-[#3A2D24]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-[11px] tracking-[0.2em] font-bold text-[#8C7E72] uppercase">
                Instagram Community
              </span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#241B15]">
              Follow @thesole.official
            </h2>
            <p className="text-xs text-[#5A483E] font-light">
              Join 45,000+ professionals sharing rain-ready shoe pairings and hydrophobic demos.
            </p>
          </div>

          <a
            href="https://instagram.com/thesole.official"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#3A2D24] text-[#FAF7F2] hover:bg-[#241B15] text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors flex items-center gap-2 shrink-0"
          >
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C49F6A]" />
          </a>
        </div>

        {/* 4-Grid Lookbook Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {igPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-xs cursor-pointer bg-[#241B15]"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-[#241B15]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-[#FAF7F2]">
                <div className="flex items-center justify-end text-xs text-[#C49F6A]">
                  <ExternalLink className="w-4 h-4" />
                </div>

                <p className="text-[11px] line-clamp-3 leading-snug font-light text-[#EFE8DE]">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[10px] text-[#C49F6A] font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-current" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" /> {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
