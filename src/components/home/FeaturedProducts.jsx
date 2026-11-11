import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  Heart, 
  ShoppingBag, 
  Eye, 
  Star, 
  Droplets, 
  ArrowRight,
  Sparkles,
  Check,
  Footprints
} from 'lucide-react';
import BrandLogo from '../common/BrandLogo';

export function ProductCard({ product }) {
  const { 
    navigateTo, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setIsSizeGuideOpen 
  } = useStore();

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || {});
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [currentImage, setCurrentImage] = useState(product?.colors?.[0]?.image || product?.images?.[0] || '');
  const [isHovered, setIsHovered] = useState(false);

  const isLiked = isInWishlist(product.id);

  const handleColorChange = (colorObj) => {
    setSelectedColor(colorObj);
    if (colorObj.image) {
      setCurrentImage(colorObj.image);
    }
  };

  return (
    <div 
      className="card-editorial rounded-2xl overflow-hidden flex flex-col justify-between group bg-[#FFFFFF]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {/* Real Product & Footwear Photography Container */}
        <div className="relative aspect-4/3 bg-[#F3ECE2] overflow-hidden cursor-pointer">
          <img
            src={currentImage}
            alt={`${product.name} in ${selectedColor.name}`}
            onClick={() => navigateTo('product', product.id)}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3">
              <span className="bg-[#3A2D24] text-[#FAF7F2] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-xs shadow-xs">
                {product.badge}
              </span>
            </div>
          )}

          {/* Wishlist Heart Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FAF7F2]/90 backdrop-blur-xs border border-[#D9CEC1] flex items-center justify-center text-[#3A2D24] hover:text-rose-600 transition-colors shadow-sm"
            aria-label="Toggle Wishlist"
          >
            <Heart 
              className={`w-4 h-4 ${isLiked ? 'fill-rose-600 text-rose-600' : ''}`} 
            />
          </button>

          {/* Hydrophobic Tag overlay */}
          <div className="absolute bottom-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-[#D9CEC1] flex items-center gap-1.5 text-[10px] font-semibold text-[#5A483E] shadow-2xs">
            <Droplets className="w-3 h-3 text-[#C49F6A]" />
            <span>100% Water Repellent</span>
          </div>

          {/* Active color preview pill */}
          {selectedColor.shoes && (
            <div className="absolute bottom-3 right-3 bg-[#241B15]/85 backdrop-blur-xs text-[#FAF7F2] px-2 py-0.5 rounded-xs text-[9px] font-mono tracking-tight hidden sm:block">
              {selectedColor.shoes}
            </div>
          )}
        </div>

        {/* Product Details Body */}
        <div className="p-5 space-y-3">
          
          {/* Category & Ratings */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#8C7E72]">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-[#C49F6A]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-semibold text-xs text-[#3A2D24]">{product.rating}</span>
              <span className="text-[10px] text-[#A69788]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 
              onClick={() => navigateTo('product', product.id)}
              className="font-serif-display font-bold text-lg text-[#241B15] group-hover:text-[#C49F6A] transition-colors cursor-pointer leading-snug"
            >
              {product.name}
            </h3>
            <p className="text-xs text-[#8C7E72] font-light mt-0.5 line-clamp-1">
              {product.subtitle}
            </p>
          </div>

          {/* Color Swatches with Real-Time Image Switching */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#8C7E72]">
                Color: <strong className="text-[#3A2D24]">{selectedColor.name}</strong>
              </span>
              <span className="text-[10px] text-[#C49F6A] font-semibold">Click to change view</span>
            </div>
            <div className="flex items-center gap-2">
              {product.colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => handleColorChange(c)}
                  className={`w-5 h-5 rounded-full border-2 transition-all ${
                    selectedColor.name === c.name 
                      ? 'border-[#3A2D24] scale-125 shadow-md ring-2 ring-[#C49F6A]/40' 
                      : 'border-transparent hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={`${c.name} - ${c.shoes || ''}`}
                />
              ))}
            </div>
          </div>

          {/* Size Pills */}
          <div className="space-y-1 pt-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#8C7E72]">Size:</span>
              <button
                onClick={() => setIsSizeGuideOpen(true)}
                className="text-[10px] text-[#C49F6A] hover:underline uppercase font-medium"
              >
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {product.sizes.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSize(s)}
                  className={`py-1 text-[10px] font-semibold tracking-wider rounded-xs border transition-colors ${
                    selectedSize === s
                      ? 'bg-[#3A2D24] text-[#FAF7F2] border-[#3A2D24]'
                      : 'bg-[#FAF7F2] text-[#5A483E] border-[#E5DDD3] hover:border-[#8C7E72]'
                  }`}
                >
                  {s.replace('UK/IN ', '')}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Pricing & Quick Add Button */}
      <div className="p-5 pt-0 space-y-3">
        <div className="flex items-baseline justify-between pt-2 border-t border-[#F3ECE2]">
          <div className="flex items-baseline gap-2">
            <span className="font-serif-display font-bold text-xl text-[#241B15]">
              ₹{product.price}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-[#A69788] line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <span className="text-[10px] text-emerald-800 font-semibold uppercase bg-emerald-50 px-2 py-0.5 rounded-xs">
            In Stock
          </span>
        </div>

        <button
          onClick={() => addToCart(product, selectedSize, selectedColor, 1)}
          className="w-full py-2.5 bg-[#3A2D24] hover:bg-[#241B15] text-[#FAF7F2] text-xs font-semibold tracking-widest uppercase rounded-sm transition-all duration-200 shadow-xs flex items-center justify-center gap-2 group-hover:bg-[#C49F6A] group-hover:text-[#241B15]"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Bag</span>
        </button>
      </div>

    </div>
  );
}

export default function FeaturedProducts() {
  const { products, navigateTo, setActiveCategoryFilter } = useStore();

  // Featured items
  const featuredList = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#EBE3D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <div className="flex justify-center mb-1">
            <BrandLogo size="sm" showTagline={false} />
          </div>
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            Signature Footwear & Socks
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#241B15] tracking-tight">
            Featured Hydrophobic Socks
          </h2>
          <p className="text-xs sm:text-sm text-[#5A483E] font-light">
            Real leather shoes paired with our hydrophobic nano-knit. Click any color swatch below to view that exact shoe and sock pairing.
          </p>
          <div className="w-12 h-0.5 bg-[#C49F6A] mx-auto mt-4"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => {
              setActiveCategoryFilter('all');
              navigateTo('shop');
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-[#3A2D24] text-[#3A2D24] hover:bg-[#3A2D24] hover:text-[#FAF7F2] text-xs font-semibold tracking-widest uppercase rounded-sm transition-all duration-300"
          >
            <span>Explore Complete Store Catalog ({products.length} Products)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
