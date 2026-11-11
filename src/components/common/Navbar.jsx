import React, { useState, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  User, 
  Menu, 
  X, 
  Droplets, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles,
  SlidersHorizontal,
  Compass
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import PreRegistrationModal from './PreRegistrationModal';

export default function Navbar() {
  const { 
    currentPage, 
    navigateTo, 
    cartItemCount, 
    wishlist, 
    setIsCartOpen, 
    setIsSearchOpen, 
    setActiveCategoryFilter 
  } = useStore();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [preRegOpen, setPreRegOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Shop', page: 'shop', hasDropdown: true },
    { label: 'Contact Us', page: 'contact-faq' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#3A2D24] text-[#FAF7F2] text-[11px] font-medium tracking-wider uppercase py-2 px-4 text-center flex items-center justify-center gap-3 border-b border-[#4A3B32]">
        <span className="inline-flex items-center gap-1 text-[#C49F6A]">
          <Droplets className="w-3.5 h-3.5 animate-bounce" />
          Monsoon Defense
        </span>
        <span className="hidden sm:inline opacity-40">|</span>
        <span className="hidden md:inline font-light">
          Use code <strong className="text-[#C49F6A] font-semibold">RAINREADY15</strong> for 15% Off Your First Order
        </span>
        <span className="opacity-40">|</span>
        <span className="font-light">Free Express Shipping Across India</span>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-[#E5DDD3] shadow-xs py-3.5' 
            : 'bg-[#FAF7F2] border-[#EBE3D7] py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LEFT: Brand Logo */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigateTo('home')}
              className="text-left group flex flex-col justify-center focus:outline-hidden"
            >
              <BrandLogo size="md" theme="dark" />
            </button>
          </div>

          {/* CENTER: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[13px] tracking-widest uppercase font-medium text-[#4A3B32]">
            {navLinks.map((link) => (
              <div key={link.page} className="relative group">
                <button
                  onClick={() => {
                    if (link.page === 'shop') {
                      setActiveCategoryFilter('all');
                    }
                    navigateTo(link.page);
                  }}
                  className={`py-1 transition-colors hover:text-[#C49F6A] flex items-center gap-1 ${
                    currentPage === link.page ? 'text-[#C49F6A] font-semibold border-b border-[#C49F6A]' : ''
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="w-3 h-3 text-[#8C7E72] group-hover:text-[#C49F6A] transition-transform group-hover:rotate-180" />
                  )}
                </button>

                {/* Dropdown Menu for Shop */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 w-64 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1 z-50">
                    <div className="bg-[#FAF7F2] border border-[#E5DDD3] rounded-lg shadow-xl p-3 space-y-1">
                      <button
                        onClick={() => {
                          setActiveCategoryFilter('all');
                          navigateTo('shop');
                        }}
                        className="w-full text-left px-3 py-2 text-xs uppercase tracking-wider text-[#3A2D24] hover:bg-[#F3ECE2] rounded-md transition-colors flex items-center justify-between"
                      >
                        <span>All Hydrophobic Socks</span>
                        <span className="text-[10px] text-[#8C7E72] font-mono">8 Items</span>
                      </button>
                      <button
                        onClick={() => {
                          setActiveCategoryFilter('formal');
                          navigateTo('shop');
                        }}
                        className="w-full text-left px-3 py-2 text-xs uppercase tracking-wider text-[#3A2D24] hover:bg-[#F3ECE2] rounded-md transition-colors flex items-center justify-between"
                      >
                        <span>Formal & Business</span>
                        <span className="text-[10px] text-[#C49F6A] font-bold">Hero</span>
                      </button>
                      <button
                        onClick={() => {
                          setActiveCategoryFilter('multi-packs');
                          navigateTo('shop');
                        }}
                        className="w-full text-left px-3 py-2 text-xs uppercase tracking-wider text-[#3A2D24] hover:bg-[#F3ECE2] rounded-md transition-colors flex items-center justify-between"
                      >
                        <span>Monsoon Bundles</span>
                        <span className="text-[10px] bg-[#EAE0D5] text-[#5A483E] px-1.5 py-0.5 rounded-sm">Save 15%</span>
                      </button>
                      <button
                        onClick={() => {
                          setActiveCategoryFilter('everyday');
                          navigateTo('shop');
                        }}
                        className="w-full text-left px-3 py-2 text-xs uppercase tracking-wider text-[#3A2D24] hover:bg-[#F3ECE2] rounded-md transition-colors"
                      >
                        Everyday Defense
                      </button>
                      <button
                        onClick={() => {
                          setActiveCategoryFilter('shoe-covers');
                          navigateTo('shop');
                        }}
                        className="w-full text-left px-3 py-2 text-xs uppercase tracking-wider text-[#3A2D24] hover:bg-[#F3ECE2] rounded-md transition-colors"
                      >
                        Shoe Slip Covers
                      </button>
                      <button
                        onClick={() => {
                          setActiveCategoryFilter('accessories');
                          navigateTo('shop');
                        }}
                        className="w-full text-left px-3 py-2 text-xs uppercase tracking-wider text-[#3A2D24] hover:bg-[#F3ECE2] rounded-md transition-colors"
                      >
                        Hydrophobic Spray & Care
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT: Actions, Icons & CTA */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#3A2D24] hover:text-[#C49F6A] hover:bg-[#F3ECE2] rounded-full transition-colors"
              title="Search products, guides & FAQs"
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Account Link */}
            <button
              onClick={() => navigateTo('account')}
              className={`p-2 rounded-full transition-colors ${
                currentPage === 'account' 
                  ? 'text-[#C49F6A] bg-[#F3ECE2]' 
                  : 'text-[#3A2D24] hover:text-[#C49F6A] hover:bg-[#F3ECE2]'
              }`}
              title="My Account & Orders"
              aria-label="Account"
            >
              <User className="w-4.5 h-4.5" />
            </button>

            {/* Wishlist Link */}
            <button
              onClick={() => navigateTo('wishlist')}
              className={`p-2 rounded-full transition-colors relative ${
                currentPage === 'wishlist' 
                  ? 'text-[#C49F6A] bg-[#F3ECE2]' 
                  : 'text-[#3A2D24] hover:text-[#C49F6A] hover:bg-[#F3ECE2]'
              }`}
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-4.5 h-4.5" />
              {wishlist.length > 0 && (
                <span className="absolute 0.5 top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#3A2D24] text-[#FAF7F2] text-[9px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-[#3A2D24] hover:text-[#C49F6A] hover:bg-[#F3ECE2] rounded-full transition-colors relative"
              title="Shopping Cart"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {cartItemCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4.5 h-4.5 rounded-full bg-[#C49F6A] text-[#FAF7F2] text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Pre-Register VIP Button */}
            <button
              onClick={() => setPreRegOpen(true)}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F3ECE2] border border-[#C49F6A] text-[#3A2D24] hover:bg-[#EAE0D5] text-[11px] font-bold uppercase tracking-wider rounded-sm transition-all shadow-2xs"
            >
              <Sparkles className="w-3 h-3 text-[#C49F6A]" />
              <span>Pre-Register</span>
            </button>

            {/* Small CTA Button */}
            <button
              onClick={() => {
                setActiveCategoryFilter('all');
                navigateTo('shop');
              }}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#3A2D24] text-[#FAF7F2] hover:bg-[#241B15] text-[11px] font-semibold tracking-widest uppercase rounded-sm transition-all duration-200 shadow-xs hover:shadow-md active:scale-95"
            >
              Shop Now
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#3A2D24] hover:bg-[#F3ECE2] rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[90px] bg-[#FAF7F2] border-b border-[#E5DDD3] shadow-2xl p-6 z-50 animate-fadeIn">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  navigateTo(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm tracking-wider uppercase font-medium border-b border-[#EFE8DE] ${
                  currentPage === link.page ? 'text-[#C49F6A] font-bold' : 'text-[#3A2D24]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setPreRegOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 bg-[#F3ECE2] border border-[#C49F6A] text-[#3A2D24] text-xs font-bold tracking-widest uppercase rounded-sm text-center flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C49F6A]" />
                <span>Pre-Register For Drops</span>
              </button>

              <button
                onClick={() => {
                  navigateTo('shop');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#3A2D24] text-[#FAF7F2] text-xs font-semibold tracking-widest uppercase rounded-sm text-center"
              >
                Shop All Hydrophobic Socks
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pre-Registration Modal */}
      <PreRegistrationModal isOpen={preRegOpen} onClose={() => setPreRegOpen(false)} />
    </header>
  );
}
