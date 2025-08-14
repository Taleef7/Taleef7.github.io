// src/hooks/useIntersectionObserver.js
import { useState, useEffect, useCallback, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);

  const handleIntersection = useCallback(([entry]) => {
    if (entry.isIntersecting && !hasBeenVisible) {
      setIsVisible(true);
      setHasBeenVisible(true);
    }
  }, [hasBeenVisible]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [handleIntersection, options]);

  return [isVisible, elementRef];
};

export default useIntersectionObserver;
