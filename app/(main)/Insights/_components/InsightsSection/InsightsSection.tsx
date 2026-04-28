/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

// import web3Img from "@/public/insights/web3.jpg";
import ai_team from "@/public/insights/ai-team.png";
import ai_tool from "@/public/insights/ai-tool.png";
// import defi from "@/public/insights/defi.png";
import high_signal from "@/public/insights/high-signal.png";
import shifting from "@/public/insights/shifting.png";
// import evloving from "./imgs/evolving.png";
// import gold_vs_bitcoin from "./imgs/Gold-Vs-Bitcoin.jpg";
// import in_hand_bit from "./imgs/in-hand-web3.webp";
import monitoring from "./imgs/monitoring.webp";
// import stable_coin from "./imgs/stable-coin.avif";
// import web3ki from "./imgs/web-ki.png";
// import { FiDownload } from "react-icons/fi";
import weTasted from "@/public/new/AI-powered-tools_DALL-E.jpg"
import chatgptVsCloude from "@/public/new/1_7Thzhjz-yhNS39HajTzTKA.png"
import robotics from "@/public/new/20260425-RTI-Depositphotos_533106722_S.avif"
import theAiDriven from "@/public/new/1751467913397.png"
////
const articles = [
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
    image: monitoring,
    readTime: "7 min read",
    tags: ["Automation", "Adoption"],
  },
  {
    id: 3,
    title: "The 10 AI Tools Every UK Business Should Know About in 2026",
    category: "Agents",
    publishDate: "2026",
    summary: "From automation to content generation — these are the 10 AI tools delivering real results for UK businesses in 2026. An honest, vendor-neutral guide from Aventra³.",
    image: ai_tool,
    readTime: "10 min read",
    tags: ["Automation", "Agents"],
  },
  {
    id: 4,
    title: "AI Won't Replace Your Team — But It Will Change Every Job. Here's How to Prepare",
    category: "Adoption",
    publishDate: "2026",
    summary: "The fear that AI will replace jobs is understandable but largely misplaced. Here is what is actually changing, which roles are most affected, and how to prepare your business and your team.",
    image: shifting,
    readTime: "9 min read",
    tags: ["Adoption", "Strategy", "Governance"],
  },
  {
    id: 5,
    title: "The Hidden Cost of Not Adopting AI: What Waiting Is Actually Costing Your Business",
    category: "Strategy",
    publishDate: "2026",
    summary: "Most businesses think doing nothing about AI is the safe option. It isn't. Here is what inaction is actually costing UK businesses right now — and what to do about it.",
    image: high_signal,
    readTime: "8 min read",
    tags: ["Strategy", "Adoption"],
  },
  {
    id: 6,
    title: "We Tested 12 AI Tools So Your Business Doesn't Have To: Here's What We Found",
    category: "Agents",
    publishDate: "2026",
    summary: "Aventra³ spent six months testing 12 of the most talked-about AI tools for UK businesses. Here is an honest verdict on each one — what works, what doesn't, and what's worth your money.",
    image: weTasted,
    readTime: "12 min read",
    tags: ["Automation", "Agents"],
  },
  {
    id: 7,
    title: "ChatGPT vs Claude vs Gemini: Which AI Tool Is Actually Right for Your Business in 2026?",
    category: "Strategy",
    publishDate: "2026",
    summary: "ChatGPT, Claude and Gemini are the three AI tools every UK business is comparing right now. Here is an honest, vendor-neutral breakdown of which one is right for your business.",
    image: chatgptVsCloude,
    readTime: "9 min read",
    tags: ["Strategy", "Agents"],
  },
  {
    id: 8,
    title: "Robotic Process Automation in 2026: How AI Has Changed Everything",
    category: "Automation",
    publishDate: "2026",
    summary: "RPA has been transformed by AI. UiPath, Automation Anywhere, n8n, Make — here is what robotic process automation means for UK businesses in 2026.",
    image: robotics,
    readTime: "8 min read",
    tags: ["Automation", "Governance"],
  },
  {
    id: 9,
    title: "The AI Divide Is Happening Right Now",
    category: "Strategy",
    publishDate: "2026",
    summary: "A permanent divide is opening between businesses building AI capability and those waiting. Most UK businesses don't realise which side they're on.",
    image: theAiDriven,
    readTime: "10 min read",
    tags: ["Strategy", "Adoption"],
  },
];

const CATEGORIES = ["All", "Strategy", "Automation", "Agents", "Adoption", "Governance"];

export default function InsightsPage() {

// const handleDownload = () => {
//   const link = document.createElement("a");
//   link.href = "/whitepaper.pdf"; // correct path
//   link.download = "Aventra3-Whitepaper-2026.pdf";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights = useMemo(() => {
    return articles.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.summary.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory ||
        item.tags.includes(activeCategory);

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-gradient-to-b from-[#EEF6FF] via-white to-white min-h-screen pt-40 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between mr-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="flex items-center gap-2 text-[#2F8BDD] text-[11px] font-extrabold mb-4 tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#2F8BDD]" />
              AI STRATEGY • ADOPTION • AUTOMATION • AGENTS
            </div>

            <h1 className="text-[48px] md:text-[64px] font-bold text-[#05183D] mb-6 tracking-tight relative inline-block">
              Insights
              <span className="absolute -bottom-3 left-0 w-24 h-1 bg-[#2F8BDD] rounded" />
            </h1>

            <p className="max-w-2xl text-slate-500 text-lg leading-relaxed">
              Practical intelligence for business leaders navigating AI adoption
              — what&apos;s working, what&apos;s not, and what&apos;s coming next.
            </p>
          </motion.div>
       
        </div>

        {/* SEARCH */}
        <div className="space-y-10 mb-20">
          <div className="relative max-w-2xl">
            <Search
              className="absolute left-4 top-4 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search insights..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white focus:border-[#2F8BDD] outline-none text-lg shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#2F8BDD] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredInsights.map((insight, idx) => (
              <InsightCard key={insight.id} {...insight} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
export const InsightCard = ({
  id,
  title,
  summary,
  publishDate,
  readTime,
  image,
  tags,
  index,
}: any) => {
  const router = useRouter();
console.log(id)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="absolute top-4 right-4 flex gap-2">
          {tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-[11px] bg-white/90 backdrop-blur-sm rounded-md font-semibold text-[#05183D]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs text-slate-400 font-medium mb-2">
          {publishDate} • {readTime}
        </div>

        <h3 className="text-lg font-bold text-[#05183D] group-hover:text-[#2F8BDD] transition-colors">
          {title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mt-2">
          {summary}
        </p>

        {/* Read More Button */}
        <button
          onClick={() => router.push(`/Insights/details?id=${id}`)}
          className="mt-5 cursor-pointer w-fit text-sm font-semibold text-[#2F8BDD] border border-[#2F8BDD] px-4 py-2 rounded-lg hover:bg-[#2F8BDD] hover:text-white transition"
        >
          Read more
        </button>
      </div>
    </motion.div>
  );
};
