"use client";
import SolutionCard from "./SolutionCard";
// Placeholders. User can replace these later.
// import img1 from "@/public/service/workPressurePaper.jpg";
// import img2 from "@/public/service/workPressureLaptop.jpg";
// import img3 from "@/public/service/360_F_660897265_lF5ancImLuO60n5444aF7FwPSmR03CX2.jpg";

import img1 from "@/public/service/ai_roadmap_teamwork_802_bfb7e7791b.webp";
import img2 from "@/public/service/GettyImages-2216190809.webp";
import img3 from "@/public/service/ai-interface-laptop-screen_161754-23987.avif";

const Solutions = () => {
  const solutionData = [
    {
      title: "AI Strategy & Roadmapping",
      description:
        "Not sure where AI fits in your business? We audit your operations, identify the highest-value opportunities, and build a prioritised roadmap your team can actually follow. No jargon. No generic playbooks.",
      points: [
        "Current state audit & opportunity mapping",
        "Tool selection & vendor evaluation",
        "ROI & business case modelling",
        "Risk & governance framework",
      ],
      image: img1,
      badge: "Start here",
      badgeColor: "default",
      btnText: "Book a Free Discovery Call",
      btnLink: "/contact",
      delay: 0,
    },
    {
      title: "AI Automation",
      description:
        "We connect your existing tools and build intelligent workflows that eliminate repetitive work — using platforms like n8n, Make, and Zapier combined with AI to handle tasks your team shouldn't be doing manually.",
      points: [
        "End-to-end workflow automation",
        "CRM, API & third-party integrations",
        "Document processing & reporting",
        "Trigger-based operations & alerts",
      ],
      image: img2,
      badge: "Most popular",
      badgeColor: "blue",
      btnText: "See How It Works",
      btnLink: "/contact", // updated to a relevant link, usually /contact or /services
      delay: 200,
    },
    {
      title: "AI Agents",
      description:
        "Autonomous AI systems that don't just follow rules — they reason, decide, and act across your tools with minimal human input. From customer support to internal operations, agents work around the clock so your team doesn't have to.",
      points: [
        "Customer support & sales agents",
        "Internal operations & task execution",
        "Multi-agent systems & orchestration",
        "Custom tool & API integrations",
      ],
      image: img3,
      badge: "Most advanced",
      badgeColor: "default",
      btnText: "Explore AI Agents",
      btnLink: "/contact", // updated to a relevant link
      delay: 400,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex flex-col gap-3">
            <span
              data-aos="fade-right"
              className="text-[#2F8BDD] text-[12px] md:text-[14px] font-bold uppercase tracking-widest"
            >
              WHAT WE DO
            </span>
            <h2
              data-aos="fade-up"
              className="text-[#05183D] text-[36px] md:text-[44px] font-bold leading-tight"
            >
              The full path from idea to <span className="text-[#2F8BDD]">results.</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[#64748B] text-[16px] md:text-[18px] font-medium"
            >
              Three services. One outcome — AI working inside your business.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutionData.map((item, index) => (
            <SolutionCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
