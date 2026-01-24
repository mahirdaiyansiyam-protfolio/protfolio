import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Palette,
  Image,
  Play,
  CreditCard,
  FileText,
  Package,
  Shirt,
  Users,
  Fingerprint,
  Megaphone,
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Logo Design',
    description: 'Strategic logo designs that define your brand identity and create lasting recognition.',
  },
  {
    icon: Image,
    title: 'Social Media Design',
    description: 'Scroll-stopping visuals designed to boost engagement and strengthen your online presence.',
  },
  {
    icon: Play,
    title: 'YouTube Thumbnails',
    description: 'High-impact thumbnails engineered to increase clicks, views, and channel growth.',
  },
  {
    icon: CreditCard,
    title: 'Business Card Design',
    description: 'Clean, professional card designs that leave a strong first impression.',
  },
  {
    icon: FileText,
    title: 'Brochure Design',
    description: 'Well-structured brochure designs that clearly communicate your message and offerings.',
  },
  {
    icon: Package,
    title: 'Packaging Design',
    description: 'Visually compelling packaging that enhances product appeal and brand value.',
  },
  {
    icon: Shirt,
    title: 'T-Shirt Graphic Design',
    description: 'Bold and creative apparel designs made for merchandise, brands, and print-on-demand.',
  },
  {
    icon: Users,
    title: 'Social Media Management',
    description: 'Strategic social media management focused on consistent growth, engagement, and brand presence.',
  },
  {
    icon: Fingerprint,
    title: 'Brand Identity Design',
    description: 'Complete brand identity systems that ensure visual consistency and strong brand recognition.',
  },
  {
    icon: Megaphone,
    title: 'Ads Creative Design',
    description: 'High-converting ad creatives designed to drive attention, clicks, and campaign performance.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax for background grid
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="section-padding bg-card/30 relative overflow-hidden"
    >
      {/* Background pattern with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: gridY }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      <div className="container mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            What I Offer
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions tailored to elevate your brand and connect with your audience.
          </p>
        </motion.div>

        {/* Services Grid with staggered reveal */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-3d gradient-border hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
