import { motion } from 'framer-motion';

// Floating 3D shapes for hero background
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circle */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Geometric shape - Triangle */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full border-2 border-primary/20 rotate-45 glass rounded-xl" />
      </motion.div>

      {/* Floating ring */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <div className="w-full h-full rounded-full border border-primary/15 bg-gradient-to-br from-primary/5 to-transparent" />
      </motion.div>

      {/* Small floating cube */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-20 h-20"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [45, 55, 45],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <div className="w-full h-full glass rounded-lg border border-primary/20" />
      </motion.div>

      {/* Floating sphere */}
      <motion.div
        className="absolute bottom-1/3 right-10 w-24 h-24"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/5 shadow-lg" />
      </motion.div>

      {/* Horizontal line */}
      <motion.div
        className="absolute top-2/3 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleX: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Dots grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </div>
  );
};

export default FloatingShapes;
