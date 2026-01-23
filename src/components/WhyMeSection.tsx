import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Target, RefreshCw, Lightbulb, Layers, MessageSquare, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Quick Turnaround',
    description: 'Fast delivery without compromising quality. Your projects completed on time, every time.',
  },
  {
    icon: Target,
    title: 'Brand-Tailored Visuals',
    description: 'Designs crafted specifically for your brand identity and target audience.',
  },
  {
    icon: RefreshCw,
    title: 'Flexibility & Revisions',
    description: 'Open to feedback with unlimited revisions until you\'re 100% satisfied.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy-First Approach',
    description: 'Every project starts with understanding your goals, audience, and market position.',
  },
  {
    icon: Layers,
    title: 'Clean, Modern Execution',
    description: 'Designs that are timeless, professional, and aligned with current trends.',
  },
  {
    icon: MessageSquare,
    title: 'Fast Communication',
    description: 'Quick responses, clear updates, and seamless collaboration throughout.',
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven Mindset',
    description: 'We measure success by your growth, not just deliverables.',
  },
];

const WhyMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="why" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Benefits
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Why <span className="text-gradient">Work With Me</span>
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-3d"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:animate-pulse-glow">
                <reason.icon className="w-10 h-10 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
