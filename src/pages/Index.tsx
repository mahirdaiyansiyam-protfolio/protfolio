import { lazy, Suspense } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SkillsSection from '@/components/SkillsSection';
import WhyMeSection from '@/components/WhyMeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import RevealOnScroll from '@/components/RevealOnScroll';

const PortfolioSection = lazy(() => import('@/components/PortfolioSection'));

const Index = () => {
  useSmoothScroll();

  return (
    <main className="relative">
      {/* Custom cursor effect */}
      <CustomCursor />

      {/* Scroll progress bar */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar />

      {/* Main sections with scroll-triggered reveals */}
      <HeroSection />
      
      <RevealOnScroll variant="fadeUp">
        <AboutSection />
      </RevealOnScroll>



      <RevealOnScroll variant="fadeUp" delay={0.1}>
        <ServicesSection />
      </RevealOnScroll>
      
      <RevealOnScroll variant="scale">
        <SkillsSection />
      </RevealOnScroll>
      
      <RevealOnScroll variant="fadeUp">
        <Suspense fallback={<div className="section-padding bg-background"><div className="container mx-auto text-center"><div className="animate-pulse text-muted-foreground">Loading portfolio...</div></div></div>}>
          <PortfolioSection />
        </Suspense>
      </RevealOnScroll>
      
      <RevealOnScroll variant="blur">
        <WhyMeSection />
      </RevealOnScroll>
      
      <RevealOnScroll variant="fadeUp">
        <ContactSection />
      </RevealOnScroll>
      
      <RevealOnScroll variant="fadeUp" delay={0.1}>
        <Footer />
      </RevealOnScroll>
    </main>
  );
};

export default Index;
