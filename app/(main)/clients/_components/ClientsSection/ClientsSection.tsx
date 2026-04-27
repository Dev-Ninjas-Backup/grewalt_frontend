"use client";

import React from "react";

export default function ClientsSection() {
  return (
 <section className="bg-gradient-to-b from-[#328fde] via-[#5fcaf1]/80 to-white mt-32 py-22 px-6 md:px-12 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto space-y-3">
        <p className="text-slate-900 text-xs md:text-xs font-semibold tracking-widest uppercase">
          Who We Work With
        </p>
        <h1 className="text-white text-5xl md:text-[70px] font-bold  ">
          Businesses That Took AI<br className="hidden md:block"/> Seriously
        </h1>
        <p className="text-slate-900 text-lg drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] md:text-xl max-w-xl mx-auto  pt-6">
          From first conversation to first result — these are the companies that decided to act.
        </p>
      </div>
    </section> 
  );
}
