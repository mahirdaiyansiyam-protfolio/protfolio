import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tools = [
  { name: 'Adobe Photoshop', level: 95, color: 'from-[#31A8FF] to-[#001E36]', icon: 'Ps' },
  { name: 'Adobe Illustrator', level: 90, color: 'from-[#FF9A00] to-[#330000]', icon: 'Ai' },
  { name: 'Canva', level: 85, color: 'from-[#00C4CC] to-[#7B2D8E]', icon: 'Cv' },
  { name: 'Adobe Premiere Pro', level: 75, color: 'from-[#9999FF] to-[#00005B]', icon: 'Pr' },
];

const ToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            My Toolkit
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
        </motion.div>

        {/* Tools Grid */}
        <div className="space-y-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-center gap-5 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              {/* Icon Badge */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center shrink-0`}>
                <span className="text-sm font-bold text-white">{tool.icon}</span>
              </div>

              {/* Name & Bar */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{tool.name}</span>
                  <span className="text-xs text-muted-foreground">{tool.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${tool.color}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tool.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.4 + index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
