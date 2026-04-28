"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";


import web3Img from "@/public/insights/web3.jpg";
import ai_team from "@/public/insights/ai-team.png";
import shifting from "@/public/insights/shifting.png";
import bgShape from "@/public/teamSection/Svg file 2.svg";

import { InsightCard } from "../../Insights/_components/InsightsSection/InsightsSection";
import { useRouter } from "next/navigation";


const INSIGHTS_DATA = [
  {
    id: 1,
    title: "Why Most UK Businesses Are Getting AI Wrong — And What to Do Instead",
    category: "Strategy",
    publishDate: "2026",
    summary: "Most UK businesses know they need AI but don't know where to start. Aventra³ explains the five most common AI adoption mistakes — and the clear path forward.",
    image: ai_team,
    readTime: "8 min read",
    tags: ["Strategy", "Adoption"],
  },
  {
    id: 2,
    title: "The Small Business Guide to AI Automation in 2026: Where to Start, What to Avoid, and What's Actually Worth It",
    category: "Automation",
    publishDate: "2026",
    summary: "AI automation isn't just for large enterprises. This practical guide shows small businesses exactly where to start, what to avoid and what delivers real ROI in 2026.",
    image: web3Img,
    readTime: "7 min read",
    tags: ["Automation", "Adoption"],
  },
  {
    id: 3,
    title: "The 10 AI Tools Every UK Business Should Know About in 2026",
    category: "Agents",
    publishDate: "2026",
    summary: "From automation to content generation — these are the 10 AI tools delivering real results for UK businesses in 2026. An honest, vendor-neutral guide from Aventra³.",
    image: shifting,
    readTime: "10 min read",
    tags: ["Automation", "Agents"],
  },
];

const InsightSection = () => {
  const navigate  = useRouter()
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="bg-[#05183D] py-24 px-6 relative overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/10 opacity-90 pointer-events-none select-none z-0">
        <Image src={bgShape} alt="bg-shape" width={900} height={900} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div data-aos="fade-right" className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FDEF7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6FDEF7] shadow-[0_0_10px_#6FDEF7]"></span>
              </div>

              <p className="text-[#6FDEF7] text-[14px] font-bold uppercase tracking-widest">
                Insights
              </p>
            </div>

            <h2 className="font-bomstad text-[48px] md:text-[64px] font-bold text-white leading-[1.05]">
              Market Intelligence & <br /> Insights
            </h2>
          </div>

          <div data-aos="fade-left" className="max-w-md pb-2">
            <p className="text-slate-300 text-[16px] mb-8 leading-relaxed">
             Practical intelligence for business leaders navigating AI adoption – what's working, what's not, and what's coming next.
            </p>

            <button
              onClick={() => navigate.push("/Insights")}
              className="border cursor-pointer border-[#6FDEF7]/40 text-white px-10 py-3.5 rounded-xl hover:bg-[#6FDEF7] hover:text-[#05183D] transition-all duration-300 font-bold text-[15px]"
            >
              Explore Now
            </button>
          </div>
        </div>

        {/* Insights Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {INSIGHTS_DATA.map((insight, idx) => (
                        <InsightCard key={insight.id} {...insight} index={idx} />
                      ))}
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
