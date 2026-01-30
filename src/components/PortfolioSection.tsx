import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X } from 'lucide-react';

// Import portfolio images - Brand Identity
import brandIdentity1 from '@/assets/portfolio/brand-identity-1.jpg';
import brandIdentity2 from '@/assets/portfolio/brand-identity-2.jpg';
import brandIdentity3 from '@/assets/portfolio/brand-identity-3.jpg';
import brandIdentity4 from '@/assets/portfolio/brand-identity-4.jpg';

// Import portfolio images - Logo Design
import logoDesign1 from '@/assets/portfolio/logo-design-1.jpg';
import logoDesign2 from '@/assets/portfolio/logo-design-2.jpg';
import logoDesign3 from '@/assets/portfolio/logo-design-3.jpg';
import logoDesign4 from '@/assets/portfolio/logo-design-4.jpg';

// Import portfolio images - Social Media Management
import socialManagement1 from '@/assets/portfolio/social-management-1.jpg';
import socialManagement2 from '@/assets/portfolio/social-management-2.jpg';
import socialManagement3 from '@/assets/portfolio/social-management-3.jpg';
import socialManagement4 from '@/assets/portfolio/social-management-4.jpg';

// Import portfolio images - Social Media Design
import socialDesign1 from '@/assets/portfolio/social-design-1.jpg';
import socialDesign2 from '@/assets/portfolio/social-design-2.jpg';
import socialDesign3 from '@/assets/portfolio/social-design-3.jpg';
import socialDesign4 from '@/assets/portfolio/social-design-4.jpg';
import socialDesign5 from '@/assets/portfolio/social-design-5.jpg';

// Import portfolio images - Ads Creative
import adsCreative1 from '@/assets/portfolio/ads-creative-1.jpg';
import adsCreative2 from '@/assets/portfolio/ads-creative-2.jpg';
import adsCreative3 from '@/assets/portfolio/ads-creative-3.jpg';
import adsCreative4 from '@/assets/portfolio/ads-creative-4.jpg';
import adsCreative5 from '@/assets/portfolio/ads-creative-5.jpg';

// Import portfolio images - Packaging Design
import packagingDesign1 from '@/assets/portfolio/packaging-design-1.jpg';
import packagingDesign2 from '@/assets/portfolio/packaging-design-2.jpg';
import packagingDesign3 from '@/assets/portfolio/packaging-design-3.jpg';

// Import portfolio images - T-Shirt Design
import tshirtDesign1 from '@/assets/portfolio/tshirt-design-1.jpg';
import tshirtDesign2 from '@/assets/portfolio/tshirt-design-2.jpg';
import tshirtDesign3 from '@/assets/portfolio/tshirt-design-3.jpg';
import tshirtDesign4 from '@/assets/portfolio/tshirt-design-4.jpg';

// Import portfolio images - YouTube Thumbnails
import thumbnailDesign1 from '@/assets/portfolio/thumbnail-design-1.jpg';
import thumbnailDesign2 from '@/assets/portfolio/thumbnail-design-2.jpg';

// Import portfolio images - Business Cards
import businessCard1 from '@/assets/portfolio/business-card-1.jpg';
import businessCard2 from '@/assets/portfolio/business-card-2.jpg';

// Import portfolio images - Brochures
import brochureDesign1 from '@/assets/portfolio/brochure-design-1.jpg';
import brochureDesign2 from '@/assets/portfolio/brochure-design-2.jpg';

const categories = [
  'All',
  'Brand Identity',
  'Logos',
  'Social Media Management',
  'Social Media Design',
  'Ads Creative',
  'Packaging',
  'T-Shirts',
  'Thumbnails',
  'Business Cards',
  'Brochures',
];

const portfolioItems = [
  // Brand Identity Design - 4 projects
  { id: 1, category: 'Brand Identity', image: brandIdentity1, title: 'Corporate Stationery Suite' },
  { id: 2, category: 'Brand Identity', image: brandIdentity2, title: 'Brand Guidelines Book' },
  { id: 3, category: 'Brand Identity', image: brandIdentity3, title: 'Complete Identity System' },
  { id: 4, category: 'Brand Identity', image: brandIdentity4, title: 'Brand Style Package' },
  
  // Logo Design - 4 projects
  { id: 5, category: 'Logos', image: logoDesign1, title: 'Minimalist Logo Design' },
  { id: 6, category: 'Logos', image: logoDesign2, title: 'Luxury Fashion Logo' },
  { id: 7, category: 'Logos', image: logoDesign3, title: 'Tech Startup Brand' },
  { id: 8, category: 'Logos', image: logoDesign4, title: 'Creative Agency Identity' },
  
  // Social Media Management - 4 projects
  { id: 9, category: 'Social Media Management', image: socialManagement1, title: 'Instagram Content Strategy' },
  { id: 10, category: 'Social Media Management', image: socialManagement2, title: 'Feed Transformation' },
  { id: 11, category: 'Social Media Management', image: socialManagement3, title: 'Multi-Platform Campaign' },
  { id: 12, category: 'Social Media Management', image: socialManagement4, title: 'Content Calendar System' },
  
  // Social Media Design - 5 projects
  { id: 13, category: 'Social Media Design', image: socialDesign1, title: 'Product Post Design' },
  { id: 14, category: 'Social Media Design', image: socialDesign2, title: 'Carousel Campaign' },
  { id: 15, category: 'Social Media Design', image: socialDesign3, title: 'Story Design Template' },
  { id: 16, category: 'Social Media Design', image: socialDesign4, title: 'LinkedIn Infographic' },
  { id: 35, category: 'Social Media Design', image: socialDesign5, title: 'Glowfe Skincare - The New Glow Standard Campaign' },
  
  // Ads Creative Design - 5 projects
  { id: 17, category: 'Ads Creative', image: adsCreative1, title: 'Facebook Ad Campaign' },
  { id: 18, category: 'Ads Creative', image: adsCreative2, title: 'Instagram Sponsored Ad' },
  { id: 19, category: 'Ads Creative', image: adsCreative3, title: 'Digital Ad Variations' },
  { id: 33, category: 'Ads Creative', image: adsCreative4, title: 'The Flame Grill - Burger Promotional Campaign' },
  { id: 34, category: 'Ads Creative', image: adsCreative5, title: 'Premium Wireless Earbuds - Product Launch Campaign' },
  
  // Packaging Design - 3 projects
  { id: 20, category: 'Packaging', image: packagingDesign1, title: 'Luxury Product Box' },
  { id: 21, category: 'Packaging', image: packagingDesign2, title: 'Coffee Bag Design' },
  { id: 22, category: 'Packaging', image: packagingDesign3, title: 'Cosmetics Packaging' },
  
  // T-Shirt Graphic Design - 4 projects
  { id: 23, category: 'T-Shirts', image: tshirtDesign1, title: 'Urban Streetwear Design' },
  { id: 24, category: 'T-Shirts', image: tshirtDesign2, title: 'Vintage Band Graphic' },
  { id: 25, category: 'T-Shirts', image: tshirtDesign3, title: 'Minimal Geometric Tee' },
  { id: 32, category: 'T-Shirts', image: tshirtDesign4, title: 'Think Faster Than Fear' },
  
  // YouTube Thumbnails - 2 projects
  { id: 26, category: 'Thumbnails', image: thumbnailDesign1, title: 'Gaming Channel Thumbnail' },
  { id: 27, category: 'Thumbnails', image: thumbnailDesign2, title: 'Tutorial Video Cover' },
  
  // Business Card Design - 2 projects
  { id: 28, category: 'Business Cards', image: businessCard1, title: 'Minimal Corporate Card' },
  { id: 29, category: 'Business Cards', image: businessCard2, title: 'Premium Luxury Card' },
  
  // Brochure Design - 2 projects
  { id: 30, category: 'Brochures', image: brochureDesign1, title: 'Corporate Tri-Fold' },
  { id: 31, category: 'Brochures', image: brochureDesign2, title: 'Company Profile Brochure' },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax for the entire section
  const sectionY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section 
      id="portfolio" 
      ref={containerRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      <motion.div 
        className="container mx-auto" 
        ref={ref}
        style={{ y: sectionY }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            My Work
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid with enhanced scroll animations */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
                onClick={() => setSelectedItem(item)}
                data-cursor="pointer"
              >
                {/* Image with zoom on hover */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <motion.div 
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <span className="text-xs text-primary font-medium uppercase tracking-wider mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {item.title}
                  </h3>
                </motion.div>

                {/* 3D tilt overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>

              {/* Image */}
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full rounded-2xl shadow-2xl"
              />

              {/* Info */}
              <div className="mt-6 text-center">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <h3 className="mt-2 text-2xl font-heading font-bold">
                  {selectedItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;