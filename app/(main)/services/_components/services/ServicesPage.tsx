"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import serviceBanner from "@/public/service/service_banner.jpg";
import talentSearchImg from "@/public/service/ai_roadmap_teamwork_802_bfb7e7791b.webp";
import embeddedHiringImg from "@/public/service/GettyImages-2216190809.webp";
import specialistSquadsImg from "@/public/service/ai-interface-laptop-screen_161754-23987.avif";


// const services = [
//   {
//     tag: "01",
//     title: "Talent Search",
//     description:
//       "Permanent, contract and executive hiring across AI, Web3, crypto and regulated fintech.",
//     features: [
//       "Critical hires, leadership builds, specialist roles.",
//       "Small curated shortlist, structured vetting, close support.",
//       "AI/ML, MLOps, Web3 engineering, security, compliance, risk.",
//     ],
//     buttonText: "Enquire Now",
//     route: "contact",
//     gradient: "from-[#0f2a5e] to-[#1a3a7a]",
//     accent: "#6FDEF7",
//   },
//   {
//     tag: "02",
//     title: "Embedded Hiring",
//     description:
//       "An always-on talent engine managed by Aventra³ — ideal for multi-role scaling and pipeline building.",
//     features: [
//       "High-velocity multi-role hiring and sustained growth.",
//       "Pipeline building, screening, scheduling, reporting, market intel.",
//       "Consistency, speed and signal — without vendor chaos.",
//     ],
//     buttonText: "Build Your Team",
//     route: "contact",
//     gradient: "from-[#2F8BDD] to-[#1a6abf]",
//     accent: "#ffffff",
//   },
//   {
//     tag: "03",
//     title: "Specialist Squads",
//     description:
//       "Deploy ready-built teams to execute operational uplift or delivery under pressure.",
//     features: [
//       "Regulated growth, urgent execution, ops-heavy initiatives.",
//       "KYC/AML deployments, compliance ops, transaction monitoring QA.",
//       "Delivered workstreams — not just headcount.",
//     ],
//     buttonText: "Explore Advisory",
//     route: "clients",
//     gradient: "from-[#0f2a5e] to-[#1a3a7a]",
//     accent: "#6FDEF7",
//   },
// ];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <main className="bg-white mt-34">
      {/* ─────────────────── HERO BANNER ─────────────────── */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={serviceBanner}
          alt="AI Consulting Services"
          fill
          className="object-cover object-center scale-100"
          style={{ filter: "none" }}
          priority
        />

        {/* Dark overlay — lighter so image is clearly visible */}
       <div className="absolute inset-0 bg-gradient-to-r from-[#071530] via-[#071530]/70 to-[#071530]" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#1d5995] text-[13px] font-bold tracking-[0.2em] uppercase mb-5"
          >
            What We Do
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-[56px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-bomstad), sans-serif" }}
          >
            AI Consulting Built Around{" "}
            <span className="">Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            We don&apos;t sell software. We don&apos;t have vendor partnerships.
            We find out what your business actually needs — then we build it.
          </motion.p>
        </div>

        {/* Bottom wave fade */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" /> */}
      </section>

      {/* ─────────────────── SERVICES SECTION ─────────────────── */}
      <section className="py-20 bg-white">
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
              Our Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-[48px] font-bold text-[#05183D] leading-tight"
              style={{ fontFamily: "var(--font-bomstad), sans-serif" }}
            >
              Three ways to work with <br />
              <span className="text-[#2F8BDD]">Aventra³</span>
            </motion.h2>
          </div>

          {/* ── Row 1: Image LEFT · Text RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col p-3 md:flex-row items-center gap-10 mb-8 bg-white rounded-2xl border-2 border-slate-100 shadow-[0_4px_24px_rgba(5,24,61,0.06)] overflow-hidden"
          >
            {/* Image */}
            <div className="w-full md:w-[52%] h-[300px] md:h-[450px] relative shrink-0 scale-110">
              <Image
                src={talentSearchImg}
                alt="Talent Search"
                fill
                className="object-cover "
              />
            </div>

            {/* Text */}
            <div className="flex flex-col px-8 py-10 md:py-0 md:pr-10 w-full ">
              <span className="inline-flex items-center w-fit px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold tracking-wide mb-5">
                Start here
              </span>
              <h3 className="text-[26px] md:text-[30px] font-bold text-[#05183D] mb-3 leading-snug">
               AI Strategy & Roadmapping
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
              Not sure where AI fits in your business? We audit your operations, identify the highest-value opportunities, and build a prioritised roadmap your team can actually follow. No jargon. No generic playbooks.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Current state audit & opportunity mapping",
                  "Tool selection & vendor evaluation",
                  "ROI & business case modelling",
                  "Risk & governance framework",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#2F8BDD] shrink-0" />
                    <span className="text-slate-500 text-[14px]">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("contact")}
                className="group inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full bg-[#2F8BDD] hover:bg-[#2677c4] text-white text-[14px] font-semibold transition-all duration-200 cursor-pointer shadow-[0_4px_14px_rgba(47,139,221,0.35)]"
              >
                Book a Free Discovery Call
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* ── Row 2: Text LEFT · Image RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col p-3 md:flex-row-reverse items-center gap-10 mb-8 bg-white rounded-2xl border-2 border-slate-100 shadow-[0_4px_24px_rgba(5,24,61,0.06)] overflow-hidden"
          >
            {/* Image */}
            <div className="w-full md:w-[52%] h-[300px] md:h-[450px] relative shrink-0 scale-110">
              <Image
                src={embeddedHiringImg}
                alt="Embedded Hiring"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col px-8 py-10 md:py-0 md:pl-10 w-full">
              <span className="inline-flex items-center w-fit px-3 py-1 rounded-full bg-[#2F8BDD] text-white text-[11px] font-semibold tracking-wide mb-5">
                Most popular
              </span>
              <h3 className="text-[26px] md:text-[30px] font-bold text-[#05183D] mb-3 leading-snug">
               AI Automation
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
               We connect your existing tools and build intelligent workflows that eliminate repetitive work — using platforms like n8n, Make, and Zapier combined with AI to handle tasks your team shouldn't be doing manually.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "End-to-end workflow automation",
                  "High-velocity multi-role hiring and sustained growth.",
                  "Pipeline building, screening, scheduling & market intel.",
                  "Trigger-based operations & alerts",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#2F8BDD] shrink-0" />
                    <span className="text-slate-500 text-[14px]">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("contact")}
                className="group inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full bg-[#2F8BDD] hover:bg-[#2677c4] text-white text-[14px] font-semibold transition-all duration-200 cursor-pointer shadow-[0_4px_14px_rgba(47,139,221,0.35)]"
              >
                Discover Now
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* ── Row 3: Image LEFT · Text RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex p-3 flex-col md:flex-row items-center gap-10 bg-white rounded-2xl border-2 border-slate-100 shadow-[0_4px_24px_rgba(5,24,61,0.06)] overflow-hidden"
          >
            {/* Image */}
             <div className="w-full md:w-[52%] h-[300px] md:h-[450px] relative shrink-0 scale-110">
              <Image
                src={specialistSquadsImg}
                alt="Specialist Squads"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col px-8 py-10 md:py-0 md:pr-10 w-full">
              <span className="inline-flex items-center w-fit px-3 py-1 rounded-full bg-[#05183D] text-white text-[11px] font-semibold tracking-wide mb-5">
                Most advanced
              </span>
              <h3 className="text-[26px] md:text-[30px] font-bold text-[#05183D] mb-3 leading-snug">
                AI Agents
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
              Autonomous AI systems that don't just follow rules — they reason, decide, and act across your tools with minimal human input. From customer support to internal operations, agents work around the clock so your team doesn't have to.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Customer support & sales agents",
                  "Internal operations & task execution",
                  "Multi-agent systems & orchestration",
                  "Custom tool & API integrations",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#2F8BDD] shrink-0" />
                    <span className="text-slate-500 text-[14px]">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("clients")}
                className="group inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full bg-[#2F8BDD] hover:bg-[#2677c4] text-white text-[14px] font-semibold transition-all duration-200 cursor-pointer shadow-[0_4px_14px_rgba(47,139,221,0.35)]"
              >
                Explore AI Agents
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
