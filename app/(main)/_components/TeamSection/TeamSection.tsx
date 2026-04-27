"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TeamCard from "./TeamCard";

import img4 from "@/public/newImg/img1.jpg";
import img1 from "@/public/newImg/img2.jpg";
import img3 from "@/public/newImg/img3.jpg";
import img2 from "@/public/newImg/img4.jpg";

const TEAM_DATA = [
  {
    id: 1,
    name: "Terath Grewal",
    role: "Co-Founder & CEO, AI Strategy",
    image: img1,
  },
  {
    id: 2,
    name: "Manj Singh",
    role: "Co-Founder & Head of Client Advisory",
    image: img2,
  },
  {
    id: 3,
    name: "Zhang Wei",
    role: "Head of AI Implementation",
    image: img3,
  },
  {
    id: 4,
    name: "Sam Hirsch",
    role: "AI Solutions Architect",
    image: img4,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
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
