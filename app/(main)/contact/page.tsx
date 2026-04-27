"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import ContactFormCard from "../_components/contactUs/ContactFormCard";
import Image from "next/image";
import bgImage from "@/public/contact/bgOne.png";

const ContactPage = () => {
  // Fix: Access the .src property of the imported static image
  const bgStyle = {
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main className="min-h-screen w-full bg-white flex flex-col ">
      {/* 1. Independent Header Section with Background Image */}
      <section
        className="relative w-full pt-32 pb-48 px-6 md:px-12 overflow-hidden "
        style={bgStyle}
      >
        {/* Gradient Overlay: Dark Navy to semi-transparent to allow the SVG to show through */}
        <div className="absolute inset-0 h-[100%]  z-0 bg-gradient-to-b from-[#021335] via-[#021335]/10  to-white" />

        {/* <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-sky-400" />
            <span className="text-sky-400 text-sm font-semibold tracking-wide uppercase">
              Talk to Aventra³
            </span>
          </div>
          <h1 className="text-white text-6xl md:text-8xl font-bold  mb-6">
            Contact
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Reach out for talent search, embedded hiring, specialist squads, AI
            systems consulting, or partner introductions.
          </p>
        </div> */}
      </section>

      {/* 2. Content Section: Sidebar Info + Form Card */}
      <section className="relative w-full px-6 md:px-12 pb-24 -mt-24 z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start justify-between">
          {/* Left Side: Contact Information Sidebar */}
          <div className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-24">
            <div className="mb-10">
              <p className="text-[#2F8BDD] text-sm font-semibold tracking-wider uppercase mb-4">
                Start your AI journey
              </p>
              <h2 className="text-5xl md:text-7xl font-black text-[#0D1B3E] tracking-tight mb-6">
                Let&apos;s Talk <span className="text-[#2F8BDD]">AI.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Whether you&apos;re just exploring or ready to move — book a free
                discovery call and let&apos;s figure out exactly where AI can take
                your business.
              </p>
            </div>

            <div className="space-y-8">
              {/* Email */}
              <div>
                <p className="text-sm font-medium text-slate-500 tracking-widest uppercase mb-1">
                  Email
                </p>
                <a href="mailto:info@aventra3.com" className="text-[17px] text-[#0D1B3E] hover:text-[#2F8BDD] transition-colors">
                  info@aventra3.com
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500 tracking-widest uppercase mb-1">
                  Contact
                </p>
                <a href="tel:+447784677243" className="text-[17px] text-[#0D1B3E] hover:text-[#2F8BDD] transition-colors">
                  +44 7784677243
                </a>
              </div>

              {/* Response Time */}
              <div>
                <p className="text-sm font-medium text-slate-500 tracking-widest uppercase mb-1">
                  Response Time
                </p>
                <p className="text-[17px] text-[#0D1B3E]">
                  Within 24 hours
                </p>
              </div>

              {/* Based In */}
              <div>
                <p className="text-sm font-medium text-slate-500 tracking-widest uppercase mb-1">
                  Based In
                </p>
                <p className="text-[17px] text-[#0D1B3E]">
                 Studio 9 50-54 St. Pauls Square, Birmingham, United Kingdom, B3 1QS
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: The Form Card */}
          <div className="w-full lg:w-2/3 flex justify-center lg:justify-end">
            <ContactFormCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
