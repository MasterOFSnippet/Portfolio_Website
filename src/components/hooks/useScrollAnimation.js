import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Unobserve after first intersection
          if (options.once) {
            observer.unobserve(entry.target);
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [elementRef, isVisible];
};

// Animation variants
export const animations = {
  fadeInUp: {
    hidden: { opacity: 0, transform: 'translateY(40px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  },
  fadeInLeft: {
    hidden: { opacity: 0, transform: 'translateX(-40px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  fadeInRight: {
    hidden: { opacity: 0, transform: 'translateX(40px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  scaleIn: {
    hidden: { opacity: 0, transform: 'scale(0.8)' },
    visible: { opacity: 1, transform: 'scale(1)' },
  },
  slideInLeft: {
    hidden: { opacity: 0, transform: 'translateX(-100px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  slideInRight: {
    hidden: { opacity: 0, transform: 'translateX(100px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
};