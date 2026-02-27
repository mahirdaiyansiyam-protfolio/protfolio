import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

const useCountUp = (end: number, isInView: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return count;
};

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effects for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background accent with parallax */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"
        style={{ y: backgroundY }}
      />

      <motion.div 
        className="container mx-auto max-w-4xl" 
        ref={ref}
        style={{ y: contentY }}
      >
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-center"
        >
          {/* Section label */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              About Me
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Crafting Visual
              <br />
              <span className="text-gradient">Experiences</span>
            </h2>
          </div>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          />

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm a passionate graphic designer dedicated to transforming ideas into 
            <span className="text-foreground font-medium"> compelling visual stories</span>. 
            With a keen eye for detail and a deep understanding of brand aesthetics, 
            I help businesses stand out in today's competitive landscape.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            My creative process combines strategic thinking with artistic execution, 
            ensuring every design not only looks stunning but also 
            <span className="text-foreground font-medium"> communicates your message effectively</span>. 
            From logo design to complete brand identities, I'm here to bring your vision to life.
          </p>

          {/* Stats with count animation */}
          <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl mx-auto">
            <CountStat end={50} suffix="+" label="Happy Clients" isInView={isInView} delay={0.4} />
            <CountStat end={200} suffix="+" label="Projects Done" isInView={isInView} delay={0.55} />
            <CountStat end={2} suffix="+" label="Years Experience" isInView={isInView} delay={0.7} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const CountStat = ({ end, suffix, label, isInView, delay }: { 
  end: number; suffix: string; label: string; isInView: boolean; delay: number;
}) => {
  const count = useCountUp(end, isInView, end > 100 ? 2000 : 1500);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors"
    >
      <div className="text-2xl md:text-3xl font-heading font-bold text-gradient">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">
        {label}
      </div>
    </motion.div>
  );
};

export default AboutSection;
