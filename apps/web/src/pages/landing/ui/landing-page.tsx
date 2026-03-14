'use client';

import { useEffect, useState } from 'react';
import { Navbar } from './navbar';
import { HeroSection } from './hero-section';
import { ProblemSection } from './problem-section';
import { FeaturesSection } from './features-section';
import { UseCasesSection } from './use-cases-section';
import { PricingSection } from './pricing-section';
import { FinalCTASection } from './final-cta-section';
import { Footer } from './footer';

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar isScrolled={isScrolled} />
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
