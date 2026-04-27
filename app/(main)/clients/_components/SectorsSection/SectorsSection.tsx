"use client";

import React from "react";
import { Briefcase, BarChart3, ShoppingBag, Heart, Users, Settings } from "lucide-react";

const sectors = [
  {
    title: "Professional Services",
    description: "Automating proposals, reports and client workflows so teams focus on delivery not admin.",
    icon: <Briefcase size={20} />,
  },
  {
    title: "Financial Services",
    description: "AI-powered compliance monitoring, risk detection and client reporting at scale.",
    icon: <BarChart3 size={20} />,
  },
  {
    title: "Retail & eCommerce",
    description: "Personalised customer experiences, inventory automation and support agents that never sleep.",
    icon: <ShoppingBag size={20} />,
  },
  {
    title: "Healthcare",
    description: "Streamlining patient communications, documentation and operational workflows with AI.",
    icon: <Heart size={20} />,
  },
  {
    title: "Recruitment & HR",
    description: "Automating candidate screening, onboarding processes and internal knowledge management.",
    icon: <Users size={20} />,
  },
  {
    title: "Manufacturing",
    description: "Predictive maintenance alerts, supply chain automation and quality control monitoring.",
    icon: <Settings size={20} />,
  },
];

export default function SectorsSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#2F8BDD] text-xs font-semibold tracking-widest uppercase">
            Sectors
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B3E] tracking-tight">
            We work across every industry<br className="hidden md:block" /> where AI can create <span className="text-[#2F8BDD]">real</span> impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E0F7FC] flex items-center justify-center text-[#2F8BDD] mb-6">
                {sector.icon}
              </div>
              <h3 className="text-[19px] font-bold text-[#0D1B3E] mb-3">
                {sector.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-[15px]">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
