"use client";

import React from "react";
import { Search, Compass, Rocket } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "STEP 01",
      number: "01",
      title: "Discovery",
      description: "We audit your business and identify where AI creates the most value.",
      icon: <Search className="text-[#2F8BDD]" size={20} />
    },
    {
      step: "STEP 02",
      number: "02",
      title: "Strategy",
      description: "We build your roadmap, select the right tools and define what success looks like.",
      icon: <Compass className="text-[#2F8BDD]" size={20} />
    },
    {
      step: "STEP 03",
      number: "03",
      title: "Implementation",
      description: "We deploy, test and embed AI into your operations alongside your team.",
      icon: <Rocket className="text-[#2F8BDD]" size={20} />
    }
  ];

  return (
    <section className="bg-[#05183d] py-16 px-6 md:px-12 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="mb-20 space-y-3">
          <p className="text-[#3b82f6] text-[11px] font-bold tracking-[.3em] uppercase">
            HOW IT WORKS
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
            From first call to first result in 30 days.
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Dashed Line - Goes through the middle of all cards */}
          <div className="hidden md:block absolute top-[115px] left-34 w-full h-[1.5px] z-50">
            <svg width="80%" height="2" fill="none" preserveAspectRatio="none">
              <line 
                x1="0" y1="1" x2="100%" y2="1" 
                stroke="#3a68c4ff" 
                strokeWidth="2" 
                strokeDasharray="4 4" 
              />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-5 relative z-10">
            {steps.map((item, idx) => (
              <div 
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
                className="bg-[#0f2145]/90 border border-[#1e293b] rounded-2xl px-5 py-6 flex flex-col items-center text-center w-full md:w-1/3 min-h-[280px] relative overflow-hidden"
              >
                {/* Large Background Number 01, 02, 03 */}
                <span className="absolute right-2 -top-6 text-[130px] font-bold text-white opacity-[0.04] leading-none pointer-events-none">
                  {item.number}
                </span>

                {/* Circular Icon Holder */}
                <div className="mb-4 w-[56px] h-[56px] flex items-center justify-center rounded-xl bg-[#0f1d41] border border-[#1e3a8a] shadow-inner relative z-20">
                  {item.icon}
                </div>
                
                {/* Step Label */}
                <p className="text-[#3b82f6] text-[10px] font-bold tracking-[.2em] uppercase mb-3 relative z-20">
                  {item.step}
                </p>
                
                {/* Card Title */}
                <h3 className="text-white text-2xl font-bold mb-4 relative z-20">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed max-w-[280px] relative z-20">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}