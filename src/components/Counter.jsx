import React, { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useInView } from 'framer-motion';

const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Создаем моушн-значение
  const motionValue = useMotionValue(0);
  
  // Настраиваем плавность (stiffness - жесткость, damping - торможение)
  const springValue = useSpring(motionValue, {
    stiffness:100,
    damping:10,
    duration: 2
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest);
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

export default Counter;