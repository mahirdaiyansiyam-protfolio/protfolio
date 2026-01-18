import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ScrollEffects {
  ref: React.RefObject<HTMLElement>;
  scrollYProgress: MotionValue<number>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  parallaxY: MotionValue<number>;
}

export const useScrollEffects = (parallaxStrength: number = 100): ScrollEffects => {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [parallaxStrength, -parallaxStrength]);

  return { ref, scrollYProgress, y, opacity, scale, parallaxY };
};

export const useParallax = (distance: number = 100) => {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return { ref, y, scrollYProgress };
};
