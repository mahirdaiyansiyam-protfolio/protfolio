import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SkillsSection from '@/components/SkillsSection';
import PortfolioSection from '@/components/PortfolioSection';
import WhyMeSection from '@/components/WhyMeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="relative">
      {/* Custom cursor effect */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main sections */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <PortfolioSection />
      <WhyMeSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
