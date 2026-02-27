import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    title: 'Brand Strategy',
    description: 'Visual systems and design decisions aligned with clear brand positioning.',
  },
  {
    title: 'Visual Identity Design',
    description: 'Creating consistent and recognizable brand visuals across all platforms.',
  },
  {
    title: 'Social Media Strategy',
    description: 'Planning content direction to drive engagement and steady brand growth.',
  },
  {
    title: 'Content Design',
    description: 'Designing visuals optimized for attention, clarity, and performance.',
  },
  {
    title: 'Ads Creative Thinking',
    description: 'Developing ad-focused visuals designed to support campaign performance.',
  },
  {
    title: 'Typography & Layout',
    description: 'Structuring text and layouts for clarity, hierarchy, and readability.',
  },
  {
    title: 'Print Design',
    description: 'Designing print-ready assets with accurate layout and production awareness.',
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
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
                {/* Title */}
                <h3 className="text-lg font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Skill Level Bar */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs text-muted-foreground">Proficiency</span>
                    <span className="text-xs font-medium text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
