"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import img1 from "@/public/service/workPressurePaper.jpg";
import img2 from "@/public/service/workPressureLaptop.jpg";
import img3 from "@/public/service/360_F_660897265_lF5ancImLuO60n5444aF7FwPSmR03CX2.jpg";

export default function EngagementSection() {
  const reasons = [
    {
      id: "01",
      title: "Too Much Noise, Too Little Clarity",
      description:
        "There are thousands of AI tools, endless vendors and constant hype. Most business owners don't know what's genuinely useful versus what's a distraction — so they do nothing and fall further behind.",
      image: img1,
    },
    {
      id: "02",
      title: "No Internal Expertise to Decide",
      description:
        "AI adoption requires understanding tools, risks, costs and integration. Most businesses don't have anyone who can evaluate options objectively without being sold to.",
      image: img2,
    },
    {
      id: "03",
      title: "Initiatives Start But Never Land",
      description:
        "Many businesses attempt AI projects that stall, get deprioritised or fail to get team buy-in. Without a clear strategy and change management, even good ideas go nowhere.",
      image: img3,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#2F8BDD] text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
          >
            WHY MOST BUSINESSES STALL
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-[52px] font-bold text-[#05183D] leading-[1.1]"
            style={{ fontFamily: "var(--font-bomstad), sans-serif" }}
          >
            The three reasons AI adoption <br />
            <span className="text-[#2F8BDD]">fails</span>
          </motion.h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative bg-white rounded-3xl   border border-slate-100 shadow-[0_10px_30px_rgba(5,24,61,0.03)] hover:shadow-[0_20px_50px_rgba(5,24,61,0.08)] transition-all duration-500 overflow-hidden group"
            >
              {/* Image with rounded corners */}
              <div className="relative w-full h-[200px] rounded-t-2xl overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Large Background Number */}
              <span className="absolute top-46 right-2  text-[#2F8BDD]/10 text-[120px] font-bold leading-none select-none pointer-events-none group-hover:text-blue-50 transition-colors duration-500">
                {item.id}
              </span>

              <div className="relative z-10 p-4">
                <h3 className="text-[18px] font-bold text-[#05183D] mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
