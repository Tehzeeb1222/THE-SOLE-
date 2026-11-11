import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import SolutionSection from '../components/home/SolutionSection';
import WhyTheSoleSection from '../components/home/WhyTheSoleSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import FootwearCompatibility from '../components/home/FootwearCompatibility';
import CollectionsShowcase from '../components/home/CollectionsShowcase';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TestimonialsSection from '../components/home/TestimonialsSection';
import InstagramFeed from '../components/home/InstagramFeed';
import JournalPreview from '../components/home/JournalPreview';
import NewsletterSection from '../components/home/NewsletterSection';
import FinalCTASection from '../components/home/FinalCTASection';

export default function HomePage() {
  return (
    <div className="animate-fadeIn">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhyTheSoleSection />
      <HowItWorksSection />
      <FootwearCompatibility />
      <CollectionsShowcase />
      <FeaturedProducts />
      <TestimonialsSection />
      <InstagramFeed />
      <JournalPreview />
      <NewsletterSection />
      <FinalCTASection />
    </div>
  );
}
