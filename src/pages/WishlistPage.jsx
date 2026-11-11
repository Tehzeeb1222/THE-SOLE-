import React from 'react';
import { useStore } from '../context/StoreContext';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { ProductCard } from '../components/home/FeaturedProducts';

export default function WishlistPage() {
  const { wishlist, products, navigateTo, addToCart } = useStore();

  const savedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E5DDD3] pb-6">
          <div>
            <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
              Curated Favorites
            </span>
            <h1 className="font-serif-display text-3xl sm:text-4xl text-[#241B15]">
              My Wishlist ({savedProducts.length})
            </h1>
          </div>

          {savedProducts.length > 0 && (
            <button
              onClick={() => {
                savedProducts.forEach((p) => addToCart(p));
                navigateTo('cart');
              }}
              className="px-6 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#241B15] transition-colors flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#C49F6A]" />
              <span>Add All To Bag</span>
            </button>
          )}
        </div>

        {savedProducts.length === 0 ? (
          <div className="py-20 text-center bg-[#FFFFFF] border border-[#E5DDD3] rounded-3xl shadow-sm space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#F3ECE2] border border-[#D9CEC1] mx-auto flex items-center justify-center text-[#8C7E72]">
              <Heart className="w-8 h-8 stroke-1" />
            </div>
            <h2 className="font-serif-display text-xl text-[#3A2D24]">
              Your Wishlist is Empty
            </h2>
            <p className="text-xs text-[#8C7E72] leading-relaxed">
              Save your favorite hydrophobic socks and footwear accessories for easy access later.
            </p>
            <button
              onClick={() => navigateTo('shop')}
              className="px-6 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#241B15]"
            >
              Explore Collection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
