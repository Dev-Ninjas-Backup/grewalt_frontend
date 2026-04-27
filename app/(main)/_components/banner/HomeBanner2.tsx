"use client";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import BackgroundGrid from "./BackgroundGrid";
import { useRouter } from "next/navigation";

const HomeBanner2 = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
      mirror: true,
    });
  }, []);

  return (
    <section className="relative min-h-[75vh] pt-12 flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background Grid */}
      <BackgroundGrid />

      {/* Radial glow top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(111,222,247,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Decorative blurred circle right */}
      <div className="absolute top-[20%] right-[-60px] w-48 h-48 rounded-full bg-[#6FDEF7]/15 blur-3xl pointer-events-none" />
      {/* Decorative blurred circle left */}
      <div className="absolute bottom-[15%] left-[-60px] w-40 h-40 rounded-full bg-[#2F8BDD]/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl w-full text-center px-6">
        {/* Badge */}
        {/* <div
          data-aos="zoom-in"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#2F8BDD]/20 shadow-sm mb-8 backdrop-blur-sm"
        >
          <span className="text-[12px] font-semibold text-[#2F8BDD] tracking-wide uppercase">
            AI Adoption · 30 Days
          </span>
        </div> */}

        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-5xl md:text-[72px] font-bold text-[#05183D] leading-tight mb-6"
          style={{ fontFamily: "var(--font-bomstad), sans-serif" }}
        >
          We Help Businesses
          <br />
          Actually Adopt{" "}
          <span className="text-[#2F8BDD] relative inline-block">
            AI
            {/* underline glow */}
            <span className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7] opacity-60" />
          </span>
        </h2>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Most companies are stuck between hype and hesitation. We bridge the
          gap — turning AI curiosity into production-ready systems your team
          actually uses, in 30 days.
        </p>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="300">
          <motion.button
            onClick={() => router.push("/contact")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7] text-white px-8 py-4 rounded-full font-semibold text-base shadow-[0_10px_30px_-5px_rgba(47,139,221,0.45)] hover:shadow-[0_16px_40px_-5px_rgba(47,139,221,0.55)] transition-all duration-300 cursor-pointer overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Free Discovery Call
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
                strokeWidth={2.5}
              />
            </span>
            {/* shimmer */}
            <span className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </motion.button>
        </div>

        {/* Stats Row */}
        {/* <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {[
            { value: "30", label: "Days to Deploy", suffix: " Days" },
            { value: "98", label: "Client Satisfaction", suffix: "%" },
            { value: "150", label: "AI Projects Shipped", suffix: "+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-[#05183D]">
                {stat.value}
                <span className="text-[#2F8BDD]">{stat.suffix}</span>
              </p>
              <p className="text-slate-400 text-sm font-medium mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default HomeBanner2;
