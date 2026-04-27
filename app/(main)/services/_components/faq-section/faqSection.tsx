"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with SMEs and mid-market businesses across any industry that are serious about adopting AI but don't have the internal expertise to do it alone.",
  },
  {
    question: "Do we need technical knowledge to work with you?",
    answer:
      "None at all. That's exactly why we exist. We handle the technical complexity and translate everything into clear business decisions.",
  },
  {
    question: "How long does an engagement typically take?",
    answer:
      "An AI Readiness Assessment takes 2 weeks. A full strategy and roadmap takes 4 to 6 weeks. Implementation support is ongoing and scoped per project.",
  },
  {
    question: "How is Aventra³ different from a generic consultancy?",
    answer:
      "We specialise exclusively in AI adoption. We don't do everything — we do this one thing exceptionally well, for businesses at every stage of the journey.",
  },
  {
    question: "What does it cost?",
    answer:
      "Every engagement is scoped individually. The best first step is a free discovery call — we'll give you a clear picture of what's involved and what it costs before any commitment.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F8FAFC] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#2F8BDD] text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
          >
            COMMON QUESTIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-[48px] font-bold text-[#05183D] leading-tight"
            style={{ fontFamily: "var(--font-bomstad), sans-serif" }}
          >
            Everything you need to know
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border-2 border-gray-700 border-slate-100 shadow-[0_4px_20px_rgba(5,24,61,0.03)]  overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full cursor-pointer px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-slate-50"
              >
                <span className="text-[17px] font-bold text-[#05183D]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2F8BDD] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-500 text-[15px] leading-relaxed">
                      <div className="h-[1px] w-full bg-slate-50 mb-6" />
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
