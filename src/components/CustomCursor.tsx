import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Custom cursor component with glowing trail effect
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`w-5 h-5 rounded-full bg-primary transition-all duration-200 ${
            isHovering ? 'opacity-80' : 'opacity-100'
          }`}
        />
      </motion.div>

      {/* Trailing glow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      >
        <div
          className={`w-10 h-10 rounded-full transition-all duration-300 ${
            isHovering
              ? 'bg-primary/30 blur-xl scale-150'
              : 'bg-primary/20 blur-lg'
          }`}
        />
      </motion.div>

      {/* Outer glow ring */}
      <motion.div
        className="fixed pointer-events-none z-[9997] hidden md:block"
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 20,
          mass: 1,
        }}
      >
        <div className="w-[60px] h-[60px] rounded-full border border-primary/20 bg-transparent" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
