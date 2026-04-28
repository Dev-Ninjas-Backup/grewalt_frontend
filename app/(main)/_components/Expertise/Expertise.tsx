"use client";

import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Expertise = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const stats = [
    { value: 50, suffix: "+", label: "Businesses Transformed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 30, suffix: "", label: "Days to First AI Use Case" },
    { value: 10, suffix: "+", label: "Industries Served" },
  ];

  return (
    <section className="bg-[#05112B] py-10 px-6 relative w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl" data-aos="fade-up">
          <h2 className="text-white text-[36px] md:text-[48px] font-bold leading-tight mb-4">
            Scale your business with <span className="text-[#6FDEF7]">AI</span>
          </h2>
          <p className="text-slate-300 text-[15px] md:text-[17px] font-medium">
            Real outcomes from real engagements — not vanity metrics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;





// 🔥 Inline StatCard with counter (same file)
const StatCard = ({ stat, delay }: any) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const startAnimation = () => {
    const duration = 2000;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);

      // ease-out effect
      const easeOut = 1 - Math.pow(1 - progressRatio, 3);

      const current = Math.floor(easeOut * stat.value);
      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-[#0F1E42] border border-[#1E305C] rounded-[16px] p-8 md:p-10 flex flex-col items-start justify-center transition-all hover:bg-[#13244F] hover:border-[#2F8BDD]/50 hover:-translate-y-1 duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
    >
      <h3 className="text-white text-[42px] md:text-[48px] font-bold leading-none mb-3">
        {count}
        {stat.suffix}
      </h3>

      <p className="text-slate-300 text-[14px] md:text-[15px] font-medium leading-snug">
        {stat.label}
      </p>
    </div>
  );
};