import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MessageCircle, ChevronDown } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import { useRef, useState, useEffect } from 'react';

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark"
    >
      {/* Background gradient overlay with parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-hero" 
        style={{ y: backgroundY }}
      />

      {/* Floating 3D shapes */}
      <FloatingShapes />

      {/* Large Centered Logo */}
      <motion.div
        className="absolute top-24 md:top-32 left-1/2 -translate-x-1/2 z-20"
        style={{ 
          scale: logoScale,
          opacity: logoOpacity 
        }}
      >
        <img 
          src={mdisLogo} 
          alt="MDIS Creative Labs Logo" 
          className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain rounded-lg"
        />
      </motion.div>

      {/* Content with scroll fade */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 md:px-8 text-center pt-32 md:pt-40"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for Freelance Work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold"
          >
            <span className="text-foreground">Mahir Daiyan</span>
            <br />
            <span className="text-gradient glow-text">{displayText}</span>
            <span className="text-gradient glow-text animate-pulse">|</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            <span className="text-foreground font-medium">Graphic Designer</span>
            {' – '}Logo, Social Media Posts, YouTube Thumbnails, Branding & Merchandise
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="mailto:mdmahirdaiyan69@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a
              href="https://wa.me/8801790330221"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-full border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={20} className="text-primary" />
              <span>WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
