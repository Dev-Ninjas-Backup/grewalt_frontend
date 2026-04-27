"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ServiceCTASection = () => {
  const router = useRouter();

  return (
    <section className="bg-white py-24">
      <div className=" mx-auto  bg-[#05183D] py-20 text-center relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2F8BDD]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-[52px] font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-bomstad), sans-serif" }}
          >
            Ready to Take AI <span className="text-[#2F8BDD]">Seriously?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-300 text-[16px] md:text-[18px] mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Book a free 30-minute discovery call. No pitch, no pressure — just
            clarity on what AI could do for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => router.push("contact")}
              className="w-full sm:w-auto px-8 cursor-pointer py-4 bg-[#2F8BDD] hover:bg-[#2677c4] text-white rounded-full font-bold text-[14px] transition-all duration-200 shadow-[0_10px_25px_rgba(47,139,221,0.3)]"
            >
              Book a Free Call
            </button>
            <button
              onClick={() => router.push("clients")}
              className="w-full sm:w-auto px-8 py-4 cursor-pointer border border-slate-700 hover:border-slate-500 text-white rounded-full font-bold text-[14px] transition-all duration-200"
            >
              View Our Work
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTASection;
