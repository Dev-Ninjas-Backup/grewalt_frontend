"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ClientCTASection = () => {
  const route = useRouter();
  return (
    <section className="bg-[#020817] mx-auto rounded-4xl max-w-7xl mb-22 py-18 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
          Ready to be <span 
            style={{ 
              background: "linear-gradient(90deg, #69d7f5 0%, #3b82f6 100%)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent" 
            }}
          >
            next?
          </span>
        </h2>

        <p className="text-slate-300 text-[17px] max-w-2xl mx-auto leading-relaxed mb-10">
          Book a free 30-minute discovery call. No pitch, no pressure — just
          clarity on what AI could do for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <button
            onClick={() => route.push("/contact")}
            className="px-8 py-3.5 cursor-pointer text-white rounded-full font-semibold text-[15px] transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #69d7f5 0%, #2F8BDD 100%)",
            }}
          >
            Book a Free Call
          </button>
          <button
            onClick={() => route.push("/services")}
            className="px-8 py-3.5 border cursor-pointer border-[#69d7f5]/30 hover:bg-[#69d7f5]/10 text-white rounded-full font-semibold text-[15px] transition-colors"
          >
            View Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientCTASection;