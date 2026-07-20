import React, { useEffect, useRef, useState } from "react";

/**
 * CountUp Component
 * 
 * Animated counter that counts from 0 to target value:
 * - Smooth animation with customizable duration
 * - Starts counting when element enters viewport (IntersectionObserver)
 * - Supports decimal places and custom suffixes
 * - Uses requestAnimationFrame for smooth 60fps performance
 * 
 * Props:
 * - target: Final number to count to
 * - duration: Animation duration in milliseconds (default: 1500)
 * - decimals: Number of decimal places (default: 0)
 * - suffix: Optional text to append (e.g., "+", "%")
 */

interface CountUpProps {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({
  target,
  suffix = "",
  decimals = 0,
  duration = 1500,
}) => {
  const [value, setValue] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();

            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const current = target * progress;
              setValue(current);
              if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  const formatted = Number(value.toFixed(decimals)).toLocaleString();

  return (
    <div ref={ref} className="font-bold text-sm md:text-base">
      {formatted}
      {suffix}
    </div>
  );
};

export default CountUp;