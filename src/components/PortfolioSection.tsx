import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const categories = [
  'All',
  'Brand Identity',
  'Logos',
  'Social Media Design',
  'Ads Creative',
  'Packaging',
  'T-Shirts',
  'Thumbnails',
  'Business Cards',
  'Brochures',
];

// Portfolio items with lazy image paths (resolved at render time)
const portfolioItems = [
  // Brand Identity Design
  { id: 44, category: 'Brand Identity', imagePath: 'brand-identity-5.jpg', title: 'APEX Fitness - Complete Brand Identity System' },
  { id: 63, category: 'Brand Identity', imagePath: 'brand-identity-6.png', title: 'SaaS Brand' },
  { id: 64, category: 'Brand Identity', imagePath: 'brand-identity-7.png', title: 'Streetwear Clothing Brand' },
  { id: 65, category: 'Brand Identity', imagePath: 'brand-identity-8.png', title: 'Modern Coffee Shop Brand' },
  { id: 66, category: 'Brand Identity', imagePath: 'brand-identity-9.png', title: 'Streetwear T-shirt Brand' },
  
  // Logo Design
  { id: 6, category: 'Logos', imagePath: 'logo-design-2.jpg', title: 'Luxury Fashion Logo' },
  { id: 45, category: 'Logos', imagePath: 'logo-design-5.jpg', title: 'Technova Solutions Logo' },
  { id: 47, category: 'Logos', imagePath: 'logo-design-6.jpg', title: 'AIMS Smile Project' },
  { id: 48, category: 'Logos', imagePath: 'logo-design-7.jpg', title: 'MONEXA' },
  { id: 49, category: 'Logos', imagePath: 'logo-design-8.jpg', title: 'Retro St.' },
  { id: 50, category: 'Logos', imagePath: 'logo-design-9.jpg', title: 'Kidolux' },
  { id: 51, category: 'Logos', imagePath: 'logo-design-10.jpg', title: 'Glowfe' },
  
  // Social Media Design
  { id: 35, category: 'Social Media Design', imagePath: 'social-design-5.jpg', title: 'Glowfe Skincare - The New Glow Standard Campaign' },
  { id: 43, category: 'Social Media Design', imagePath: 'social-design-6.jpg', title: 'Stylish Hoodie For Men' },
  { id: 46, category: 'Social Media Design', imagePath: 'social-design-7.jpg', title: 'Summer Special Sale' },
  
  // Ads Creative Design
  { id: 33, category: 'Ads Creative', imagePath: 'ads-creative-4.jpg', title: 'The Flame Grill - Burger Promotional Campaign' },
  { id: 34, category: 'Ads Creative', imagePath: 'ads-creative-5.jpg', title: 'Premium Wireless Earbuds - Product Launch Campaign' },
  { id: 36, category: 'Ads Creative', imagePath: 'ads-creative-6.jpg', title: 'Farm Fresh Meal Kit - From Box to Table Campaign' },
  { id: 37, category: 'Ads Creative', imagePath: 'ads-creative-7.jpg', title: 'Pumpkin Spice Oat Latte - Fall Limited Edition' },
  { id: 38, category: 'Ads Creative', imagePath: 'ads-creative-8.jpg', title: 'Amazfit GTS 4 - NEW ARRIVAL Smartwatch Launch' },
  { id: 39, category: 'Ads Creative', imagePath: 'ads-creative-9.jpg', title: 'Pro Gaming Headset - Tournament Grade' },
  { id: 40, category: 'Ads Creative', imagePath: 'ads-creative-10.jpg', title: 'Smart Security Camera - Family Protection System' },
  
  // Packaging Design
  { id: 20, category: 'Packaging', imagePath: 'packaging-design-1.jpg', title: 'Luxury Product Box' },
  { id: 22, category: 'Packaging', imagePath: 'packaging-design-3.jpg', title: 'Cosmetics Packaging' },
  { id: 58, category: 'Packaging', imagePath: 'packaging-design-4.jpg', title: 'Craft Coffee Brand' },
  { id: 61, category: 'Packaging', imagePath: 'packaging-design-5.jpg', title: 'Beer Bottle Label Design' },
  { id: 62, category: 'Packaging', imagePath: 'packaging-design-6.png', title: 'Can Design' },
  
  // T-Shirt Graphic Design
  { id: 23, category: 'T-Shirts', imagePath: 'tshirt-design-1.jpg', title: 'Urban Streetwear Design' },
  { id: 24, category: 'T-Shirts', imagePath: 'tshirt-design-2.jpg', title: 'Vintage Band Graphic' },
  { id: 32, category: 'T-Shirts', imagePath: 'tshirt-design-4.jpg', title: 'Think Faster Than Fear' },
  { id: 42, category: 'T-Shirts', imagePath: 'tshirt-design-5.jpg', title: 'Fitness Motivation - T-Shirt Design Collection' },
  { id: 59, category: 'T-Shirts', imagePath: 'tshirt-design-6.jpg', title: 'Music Festival - Event Merch T-Shirt' },
  
  // YouTube Thumbnails
  { id: 52, category: 'Thumbnails', imagePath: 'thumbnail-design-3.jpg', title: 'Cooking Channel - Recipe Thumbnails' },
  { id: 53, category: 'Thumbnails', imagePath: 'thumbnail-design-4.jpg', title: 'Tech Review Channel' },
  { id: 54, category: 'Thumbnails', imagePath: 'thumbnail-design-5.jpg', title: 'Tech Review Channel' },
  { id: 55, category: 'Thumbnails', imagePath: 'thumbnail-design-6.jpg', title: 'What I Eat in a Day (Healthy & Realistic)' },
  
  // Business Card Design
  { id: 56, category: 'Business Cards', imagePath: 'business-card-3.jpg', title: 'Corporate Executive - Minimalist Business Card' },
  { id: 60, category: 'Business Cards', imagePath: 'business-card-4.jpg', title: 'Minimal Corporate Business Card' },
  
  // Brochure Design
  { id: 57, category: 'Brochures', imagePath: 'brochure-design-4.jpg', title: 'Luxury Real Estate' },
];

// Vite glob import for lazy image loading
const imageModules = import.meta.glob<{ default: string }>('/src/assets/portfolio/*', { eager: false });

const useResolvedImage = (imagePath: string) => {
  const [src, setSrc] = useState<string>('');
  
  useEffect(() => {
    const key = `/src/assets/portfolio/${imagePath}`;
    const loader = imageModules[key];
    if (loader) {
      loader().then((mod) => setSrc(mod.default));
    }
  }, [imagePath]);
  
  return src;
};

const PortfolioCard = ({ item, index, onClick }: { 
  item: typeof portfolioItems[0]; 
  index: number; 
  onClick: () => void;
}) => {
  const imageSrc = useResolvedImage(item.imagePath);
  
  if (!imageSrc) return (
    <motion.div
      layout
      className="aspect-square rounded-2xl bg-card animate-pulse"
    />
  );

  return (
    <motion.div
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
      onClick={onClick}
      data-cursor="pointer"
    >
      <motion.div
        className="w-full h-full"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <OptimizedImage
          src={imageSrc}
          alt={item.title}
          width={600}
          height={600}
          className="w-full h-full object-cover"
          containerClassName="w-full h-full"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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

      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

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

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

const LightboxModal = ({ item, onClose }: { item: typeof portfolioItems[0]; onClose: () => void }) => {
  const imageSrc = useResolvedImage(item.imagePath);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>

        {imageSrc && (
          <OptimizedImage
            src={imageSrc}
            alt={item.title}
            width={1200}
            height={800}
            priority
            className="w-full rounded-2xl shadow-2xl"
            containerClassName="w-full"
          />
        )}

        <div className="mt-6 text-center">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">
            {item.category}
          </span>
          <h3 className="mt-2 text-2xl font-heading font-bold">
            {item.title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioSection;
