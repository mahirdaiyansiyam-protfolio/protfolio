import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              About Me
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Crafting Visual
              <br />
              <span className="text-gradient">Experiences</span>
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate graphic designer dedicated to transforming ideas into 
              <span className="text-foreground font-medium"> compelling visual stories</span>. 
              With a keen eye for detail and a deep understanding of brand aesthetics, 
              I help businesses stand out in today's competitive landscape.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My creative process combines strategic thinking with artistic execution, 
              ensuring every design not only looks stunning but also 
              <span className="text-foreground font-medium"> communicates your message effectively</span>. 
              From logo design to complete brand identities, I'm here to bring your vision to life.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { number: '50+', label: 'Happy Clients' },
                { number: '200+', label: 'Projects Done' },
                { number: '3+', label: 'Years Experience' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-heading font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
