"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TeamCard from "./TeamCard";

import imgSam from "@/public/newImg/img1.jpg";
import imgTerath from "@/public/newImg/img2.jpg";
import imgZhang from "@/public/newImg/img3.jpg";
import imgManj from "@/public/newImg/img4.jpg";
import imgTheranam from "@/public/newImg/theranam-chahal.png";

const TEAM_DATA = [
  {
    id: 1,
    name: "Manj Singh",
    role: "Founder - AI Innovation – Strategy, GTM & Impact",
    image: imgManj,
  },
  {
    id: 2,
    name: "Terath Grewal",
    role: "AI Solutions Director (Banking)",
    image: imgTerath,
  },
  {
    id: 3,
    name: "Zhang Wei",
    role: "AI Engineer",
    image: imgZhang,
  },
  {
    id: 4,
    name: "Sam Harrinson",
    role: "AI Architect",
    image: imgSam,
  },
  {
    id: 5,
    name: "Theranam Chahal",
    role: "Change & Transformation (Finance)",
    image: imgTheranam,
  },
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-white py-24 px-6 relative w-full">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-16" data-aos="fade-up">
          <p className="text-[#0070F3] text-[11px] md:text-[13px] font-bold uppercase tracking-widest mb-4">
            Our Team
          </p>
          <h2 className="text-[#05183D] text-[36px] md:text-[44px] font-bold leading-[1.1] mb-6">
            The people behind your <span className="text-[#0070F3]">AI</span><br /> transformation
          </h2>
          <p className="text-[#64748B] text-[15px] md:text-[17px] leading-relaxed mx-auto max-w-[550px]">
            AI strategists and advisors helping businesses navigate the most important technological shift of our generation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 w-full">
          {TEAM_DATA.map((member, index) => (
            <TeamCard
              key={member.id}
              index={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
