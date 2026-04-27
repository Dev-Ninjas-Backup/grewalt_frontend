"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      quote: "Aventra³ cut through the noise immediately. Within two weeks we had a clear picture of exactly where AI could help and a plan we could actually follow.",
      name: "Operations Director",
      company: "Professional Services Firm, Birmingham"
    },
    {
      quote: "We had tried AI tools before and got nowhere. Aventra³ was the first time someone actually understood our business before recommending anything.",
      name: "Managing Director",
      company: "Recruitment Agency, London"
    },
    {
      quote: "The automation they built has saved us hours every single week. The ROI was visible within the first month.",
      name: "Head of Operations",
      company: "eCommerce Retailer, Manchester"
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#2F8BDD] text-xs font-semibold tracking-widest uppercase">
            WHAT CLIENTS SAY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B3E] tracking-tight">
            Don&apos;t take our word for it.
          </h2>
        </div>

        <div className="relative group max-w-6xl mx-auto">
          {/* Left Button */}
          <button 
            onClick={() => scroll("left")}
            className="absolute cursor-pointer -left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#0D1B3E] shadow-sm hover:bg-gray-50 z-10 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="grid grid-cols-3 overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item, idx) => (
              <div key={idx} className="" data-aos="fade-up" data-aos-delay={idx * 120}>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] h-full flex flex-col">
                  <div className="mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11H6C5.44772 11 5 10.5523 5 10V6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V10C11 13.866 7.86599 17 4 17V15C6.76142 15 9 12.7614 9 10H10V11ZM20 11H16C15.4477 11 15 10.5523 15 10V6C15 5.44772 15.4477 5 16 5H20C20.5523 5 21 5.44772 21 6V10C21 13.866 17.866 17 14 17V15C16.7614 15 19 12.7614 19 10H20V11Z" stroke="#2F8BDD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[#0D1B3E] text-[15px] font-medium leading-relaxed mb-10 flex-1">
                    {item.quote}
                  </p>
                  <div className="pt-6 border-t border-gray-200 mt-auto">
                    <h4 className="text-[#0D1B3E] font-bold text-[13px] tracking-wide mb-1">{item.name}</h4>
                    <p className="text-slate-400 text-[12px]">{item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button 
            onClick={() => scroll("right")}
            className="absolute cursor-pointer  -right-4 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#0D1B3E] shadow-sm hover:bg-gray-50 z-10 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
