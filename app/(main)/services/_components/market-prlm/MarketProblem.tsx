"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import meetingImg from "@/public/service/meetingMarketing.jpg";

const MarketProblem = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We start by understanding your business deeply — your operations, pain points, goals and where AI can create the most impact. You leave with total clarity on where to focus.",
      features: [
        "AI readiness assessment",
        "Process and workflow audit",
        "Opportunity mapping",
        "Quick wins identification",
      ],
    },
    {
      step: "02",
      title: "Design",
      description:
        "We build your AI roadmap — which tools to use, how to integrate them, what to prioritise and what to avoid. Practical, jargon-free and tailored entirely to your business.",
      features: [
        "Custom AI strategy and roadmap",
        "Tool selection and vendor evaluation",
        "ROI modelling",
        "Risk and governance framework",
      ],
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "We work alongside you to bring the strategy to life — deploying tools, training your team and making sure AI actually sticks inside your organisation.",
      features: [
        "Hands-on deployment support",
        "Team training and enablement",
        "Progress tracking and optimisation",
        "Ongoing advisory access",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
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
            OUR PROCESS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-[52px] font-bold text-[#05183D] leading-[1.1]"
            style={{ fontFamily: "var(--font-bomstad), sans-serif" }}
          >
            A clear path from confusion to <br />
            <span className="text-[#2F8BDD]">confidence.</span>
          </motion.h2>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px] md:h-[450px] rounded-[32px] overflow-hidden mb-12 shadow-2xl"
        >
          <Image
            src={meetingImg}
            alt="AI Consulting Process"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(5,24,61,0.03)] hover:shadow-[0_20px_50px_rgba(5,24,61,0.08)] transition-all duration-500 overflow-hidden group"
            >
              {/* Large Background Number */}
              <span className="absolute -top-4 -right-2 text-[#2F8BDD]/10 text-[140px] font-bold leading-none select-none pointer-events-none group-hover:text-blue-50 transition-colors duration-500">
                {item.step}
              </span>

              <div className="relative z-10">
                <span className="text-[#2F8BDD] text-[11px] font-bold tracking-[0.1em] uppercase block mb-4">
                  STEP {item.step}
                </span>
                <h3 className="text-[28px] font-bold text-[#05183D] mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed mb-8">
                  {item.description}
                </p>

                <ul className="space-y-3">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2
                        size={16}
                        className="text-[#2F8BDD] shrink-0"
                      />
                      <span className="text-slate-500 text-[13px]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketProblem;
