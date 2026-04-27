"use client";

import React from "react";
import Image from "next/image";

import marketImg from "@/public/clients/marketI.jpg";
import teamImg from "@/public/clients/team.jpg";
import regImg from "@/public/clients/aware.jpg";

export default function EngagementModel() {
  const results = [
    {
      type: "Professional Services",
      image: marketImg,
      challenge: "Proposal creation was taking 4 to 5 hours per pitch, consuming senior consultant time on administration.",
      solution: "Custom AI automation workflow built in n8n connecting their CRM, case study library and document templates.",
      result: "First draft generated in under 10 minutes. Proposal output tripled with the same team size.",
    },
    {
      type: "Recruitment Agency",
      image: teamImg,
      challenge: "CV screening for every role was taking 2 hours before a recruiter was even involved.",
      solution: "AI screening workflow that scored every application against defined criteria and summarised the top candidates.",
      result: "90 minutes saved per role. Shortlist quality improved through consistent criteria application.",
    },
    {
      type: "eCommerce Retailer",
      image: regImg,
      challenge: "300 to 400 customer enquiries per week with 60 percent being the same ten questions.",
      solution: "AI support agent handling all first-contact enquiries, resolving routine questions instantly and escalating complex ones with full context.",
      result: "Human workload down 55 percent. Average response time down from 4 hours to under 2 minutes.",
    },
  ];

  return (
    <section className="bg-[#FAFBFF] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#2F8BDD] text-xs font-semibold tracking-widest uppercase">
            RESULTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B3E] tracking-tight">
            Real problems. Real solutions.<br className="hidden md:block" />
            <span className="text-[#2F8BDD]">Real outcomes.</span>
          </h2>
          <p className="text-slate-500 leading-relaxed text-lg max-w-2xl mx-auto pt-2">
            Every engagement starts with a business problem. Here is what solving them looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="bg-[#05183D] rounded-2xl overflow-hidden flex flex-col shadow-lg"
            >
              {/* Image Header */}
              <div className="w-full h-48 relative">
                <Image src={item.image} alt={item.type} fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05183D] to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-[#122A59] text-[#56C1ED] text-xs font-bold px-3 py-1.5 rounded-full">
                    {item.type}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col gap-6 text-slate-300 text-sm md:text-[15px] leading-relaxed">
                <div>
                  <h4 className="text-[#2F8BDD] text-xs font-bold tracking-widest uppercase mb-2">Challenge</h4>
                  <p>{item.challenge}</p>
                </div>
                <div>
                  <h4 className="text-[#2F8BDD] text-xs font-bold tracking-widest uppercase mb-2">Solution</h4>
                  <p>{item.solution}</p>
                </div>
                <div>
                  <h4 className="text-[#2F8BDD] text-xs font-bold tracking-widest uppercase mb-2">Result</h4>
                  <p className="text-white font-medium">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
