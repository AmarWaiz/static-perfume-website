import { useEffect, useRef, useState } from "react";

type CounterProps = {
  end: number;
  suffix?: string;
  decimals?: number;
};

export default function Counter({ end, suffix = "", decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const duration = 1200;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const start = performance.now();
      const tick = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(end * eased);

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
      observer.disconnect();
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
