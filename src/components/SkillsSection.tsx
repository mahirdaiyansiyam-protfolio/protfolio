import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Target, Layers, Share2, Layout, Lightbulb, Type, Printer, BarChart2 } from 'lucide-react';

const skills = [
  {
    title: 'Brand Strategy',
    description: 'Visual systems and design decisions aligned with clear brand positioning.',
    icon: Target,
  },
  {
    title: 'Visual Identity Design',
    description: 'Creating consistent and recognizable brand visuals across all platforms.',
    icon: Layers,
  },
  {
    title: 'Social Media Strategy',
    description: 'Planning content direction to drive engagement and steady brand growth.',
    icon: Share2,
  },
  {
    title: 'Content Design',
    description: 'Designing visuals optimized for attention, clarity, and performance.',
    icon: Layout,
  },
  {
    title: 'Ads Creative Thinking',
    description: 'Developing ad-focused visuals designed to support campaign performance.',
    icon: Lightbulb,
  },
  {
    title: 'Typography & Layout',
    description: 'Structuring text and layouts for clarity, hierarchy, and readability.',
    icon: Type,
  },
  {
    title: 'Print Design',
    description: 'Designing print-ready assets with accurate layout and production awareness.',
    icon: Printer,
  },
  {
    title: 'Infographics',
    description: 'Transforming complex data into clear, visually engaging graphic representations.',
    icon: BarChart2,
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section 
      id="skills" 
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            What I Bring
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Core competencies that drive impactful design and strategic brand solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
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
                  <Icon className="w-6 h-6 text-primary mb-4" />

                  {/* Title */}
                  <h3 className="text-lg font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
