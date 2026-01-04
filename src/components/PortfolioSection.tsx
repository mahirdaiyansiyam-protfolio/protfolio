import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Import portfolio images
import logo1 from '@/assets/portfolio/logo-1.jpg';
import logo2 from '@/assets/portfolio/logo-2.jpg';
import logo3 from '@/assets/portfolio/logo-3.jpg';
import social1 from '@/assets/portfolio/social-1.jpg';
import social2 from '@/assets/portfolio/social-2.jpg';
import thumbnail1 from '@/assets/portfolio/thumbnail-1.jpg';
import thumbnail2 from '@/assets/portfolio/thumbnail-2.jpg';
import card1 from '@/assets/portfolio/card-1.jpg';
import brochure1 from '@/assets/portfolio/brochure-1.jpg';
import packaging1 from '@/assets/portfolio/packaging-1.jpg';
import tshirt1 from '@/assets/portfolio/tshirt-1.jpg';

const categories = [
  'All',
  'Logos',
  'Social Media',
  'Thumbnails',
  'Business Cards',
  'Brochures',
  'Packaging',
  'T-Shirts',
];

const portfolioItems = [
  { id: 1, category: 'Logos', image: logo1, title: 'Tech Startup Brand' },
  { id: 2, category: 'Logos', image: logo2, title: 'Luxury Fashion Logo' },
  { id: 3, category: 'Logos', image: logo3, title: 'Creative Agency Identity' },
  { id: 4, category: 'Social Media', image: social1, title: 'Product Launch Campaign' },
  { id: 5, category: 'Social Media', image: social2, title: 'Marketing Promo Design' },
  { id: 6, category: 'Thumbnails', image: thumbnail1, title: 'Gaming Channel Thumbnail' },
  { id: 7, category: 'Thumbnails', image: thumbnail2, title: 'Tutorial Video Cover' },
  { id: 8, category: 'Business Cards', image: card1, title: 'Premium Business Card' },
  { id: 9, category: 'Brochures', image: brochure1, title: 'Corporate Brochure' },
  { id: 10, category: 'Packaging', image: packaging1, title: 'Luxury Product Box' },
  { id: 11, category: 'T-Shirts', image: tshirt1, title: 'Urban Streetwear Design' },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto" ref={ref}>
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
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedItem(item)}
                data-cursor="pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>

                {/* 3D tilt overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
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
