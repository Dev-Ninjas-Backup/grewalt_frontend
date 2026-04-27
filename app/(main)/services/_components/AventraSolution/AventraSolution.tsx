"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import warehouseImg from "@/public/service/warehouse.webp";

const AventraSolution = () => {
  const diffs = [
    {
      title: "We Speak Business, Not Just Tech",
      description:
        "We translate AI into plain language — no jargon, no unnecessary complexity. Our recommendations are driven by your business outcomes, not the latest trends.",
      icon: <MessageSquare className="text-white" size={20} />,
    },
    {
      title: "Vendor-Neutral Advice",
      description:
        "We have no financial relationship with any AI tool or platform. Every recommendation we make is based purely on what is right for your business.",
      icon: <ShieldCheck className="text-white" size={20} />,
    },
    {
      title: "We Stay Until It Works",
      description:
        "We don't hand over a document and disappear. We measure success by whether AI is actually running inside your business — not by the quality of the strategy deck.",
      icon: <CheckCircle2 className="text-white" size={20} />,
    },
  ];

  return (
    <section className="relative py-24 min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={warehouseImg}
          alt="Aventra Difference"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#05183D]/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#2F8BDD] text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
          >
            THE AVENTRA³ DIFFERENCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-[52px] font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-bomstad), sans-serif" }}
          >
            Why clients choose <span className="text-[#2F8BDD]">us</span>
          </motion.h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {diffs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2F8BDD]/20 border border-[#2F8BDD]/30 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-[20px] font-bold text-white mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-300 text-[14px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AventraSolution;
