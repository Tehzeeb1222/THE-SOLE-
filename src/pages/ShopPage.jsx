import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/home/FeaturedProducts';
import { 
  SlidersHorizontal, 
  ChevronDown, 
  RotateCcw, 
  Sparkles, 
  Search,
  Droplets,
  Filter
} from 'lucide-react';

export default function ShopPage() {
  const { products, activeCategoryFilter, setActiveCategoryFilter, navigateTo } = useStore();

  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [priceRange, setPriceRange] = useState(3000);
  const [sortBy, setSortBy] = useState('featured');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories = [
    { key: 'all', label: 'All Items' },
    { key: 'formal', label: 'Formal & Business' },
    { key: 'everyday', label: 'Everyday Defense' },
    { key: 'multi-packs', label: 'Multi-Pack Bundles' },
    { key: 'travel', label: 'Travel & Ankle' },
    { key: 'shoe-covers', label: 'Shoe Slip Covers' },
    { key: 'accessories', label: 'Care & Sprays' }
  ];

  const sizes = ['all', 'UK/IN 6–7', 'UK/IN 8–9', 'UK/IN 10–11', 'UK/IN 12+'];
  const colors = ['all', 'Black', 'Grey', 'Brown', 'Navy', 'Beige'];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (activeCategoryFilter !== 'all' && p.category !== activeCategoryFilter) {
        return false;
      }
      // Size filter
      if (selectedSize !== 'all' && (!p.sizes || !p.sizes.includes(selectedSize))) {
        return false;
      }
      // Color filter
      if (selectedColor !== 'all' && (!p.colors || !p.colors.some((c) => c?.name?.toLowerCase().includes(selectedColor.toLowerCase())))) {
        return false;
      }
      // Price filter
      if (p.price > priceRange) {
        return false;
      }
      // In Stock filter
      if (inStockOnly && !p.inStock) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
      return 0; // default featured
    });
  }, [products, activeCategoryFilter, selectedSize, selectedColor, priceRange, inStockOnly, sortBy]);

  const resetFilters = () => {
    setActiveCategoryFilter('all');
    setSelectedSize('all');
    setSelectedColor('all');
    setPriceRange(3000);
    setSortBy('featured');
    setInStockOnly(false);
  };

  return (
    <div className="py-10 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Shop Page Banner Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-[11px] tracking-[0.25em] font-semibold text-[#8C7E72] uppercase">
            Curated Catalog
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl text-[#241B15] tracking-tight uppercase">
            Hydrophobic Footwear
          </h1>
          <p className="text-xs sm:text-sm text-[#5A483E] font-light">
            Engineered to keep feet 100% dry and fresh inside formal leather shoes and daily sneakers.
          </p>
          <div className="w-12 h-0.5 bg-[#C49F6A] mx-auto mt-3"></div>
        </div>

        {/* Category Horizontal Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-[#E5DDD3]">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategoryFilter(cat.key)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all shrink-0 ${
                activeCategoryFilter === cat.key
                  ? 'bg-[#3A2D24] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#FFFFFF] text-[#5A483E] border border-[#E5DDD3] hover:border-[#8C7E72]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filter Bar & Sort Controls */}
        <div className="bg-[#FFFFFF] border border-[#EBE3D7] rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden px-3 py-2 bg-[#F3ECE2] border border-[#D9CEC1] text-xs font-semibold uppercase text-[#3A2D24] rounded-sm flex items-center gap-1.5"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
            <span className="text-xs text-[#8C7E72]">
              Showing <strong>{filteredProducts.length}</strong> Products
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <span className="text-xs text-[#8C7E72] hidden sm:inline">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FAF7F2] border border-[#D9CEC1] rounded-sm px-3 py-1.5 text-xs text-[#2C241E] focus:outline-hidden focus:border-[#3A2D24]"
            >
              <option value="featured">Featured & Curated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
            </select>

            {(selectedSize !== 'all' || selectedColor !== 'all' || priceRange < 3000 || inStockOnly || activeCategoryFilter !== 'all') && (
              <button
                onClick={resetFilters}
                className="p-1.5 text-[#8C7E72] hover:text-[#3A2D24] border border-[#D9CEC1] rounded-sm transition-colors"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Main Shop Layout (Sidebar Filters + Products Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Desktop Filter Sidebar (Cols 3) */}
          <div className={`lg:col-span-3 lg:block ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-[#FFFFFF] border border-[#E5DDD3] rounded-2xl p-6 space-y-6 sticky top-28 shadow-2xs">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#EFE8DE]">
                <h3 className="font-serif-display font-bold text-base text-[#3A2D24] flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#C49F6A]" />
                  Refine By
                </h3>
                <button
                  onClick={resetFilters}
                  className="text-[10px] uppercase font-bold text-[#C49F6A] hover:underline"
                >
                  Clear All
                </button>
              </div>

              {/* Filter: Size */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#3A2D24] uppercase tracking-wider block">
                  Shoe & Sock Size
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-1.5 px-2 text-[11px] rounded-sm border text-center transition-colors ${
                        selectedSize === s
                          ? 'bg-[#3A2D24] text-[#FAF7F2] border-[#3A2D24] font-semibold'
                          : 'bg-[#FAF7F2] text-[#5A483E] border-[#E5DDD3] hover:border-[#8C7E72]'
                      }`}
                    >
                      {s === 'all' ? 'All Sizes' : s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter: Color Palette */}
              <div className="space-y-2 pt-2 border-t border-[#EFE8DE]">
                <label className="text-xs font-semibold text-[#3A2D24] uppercase tracking-wider block">
                  Color Shade
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`py-1 px-2.5 text-[11px] rounded-sm border transition-colors ${
                        selectedColor === c
                          ? 'bg-[#3A2D24] text-[#FAF7F2] border-[#3A2D24] font-semibold'
                          : 'bg-[#FAF7F2] text-[#5A483E] border-[#E5DDD3] hover:border-[#8C7E72]'
                      }`}
                    >
                      {c === 'all' ? 'All Colors' : c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter: Price Range */}
              <div className="space-y-2 pt-2 border-t border-[#EFE8DE]">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-[#3A2D24] uppercase tracking-wider">
                    Max Price
                  </span>
                  <span className="font-serif-display font-bold text-[#3A2D24]">
                    ₹{priceRange}
                  </span>
                </div>
                <input
                  type="range"
                  min="499"
                  max="3000"
                  step="100"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#3A2D24] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#8C7E72]">
                  <span>₹499</span>
                  <span>₹3,000</span>
                </div>
              </div>

              {/* Filter: Stock Availability */}
              <div className="pt-2 border-t border-[#EFE8DE]">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-[#3A2D24]">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="accent-[#3A2D24] rounded-xs"
                  />
                  <span>In Stock Only</span>
                </label>
              </div>

            </div>
          </div>

          {/* Products Grid (Cols 9) */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-[#FFFFFF] border border-[#E5DDD3] rounded-2xl p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F3ECE2] border border-[#D9CEC1] mx-auto flex items-center justify-center text-[#8C7E72]">
                  <Search className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="font-serif-display text-xl text-[#3A2D24]">
                  No products matched your exact filter combination
                </h3>
                <p className="text-xs text-[#8C7E72] max-w-sm mx-auto">
                  Try adjusting the price slider or resetting size and color selections.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#3A2D24] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#241B15]"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
