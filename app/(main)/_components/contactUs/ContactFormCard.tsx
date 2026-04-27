"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactFormCard = () => {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const [timeline, setTimeline] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🔒 prevents double submit (React StrictMode fix)
    if (loading) return;

    if (!service || !timeline) {
      toast.error("Please select all required fields", {
        position: "top-right",
      });
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success("Enquiry sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });

      e.currentTarget.reset();
      setService("");
      setTimeline("");
    } catch {
      // toast.error("Failed to send message. Please try again.", {
      //   position: "top-right",
      // });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] w-full max-w-[750px]">
      <ToastContainer />

      <h2 className="text-[32px] md:text-[36px] font-bold text-[#05183D] mb-3 leading-tight tracking-tight">
        Tell us what you&apos;re building
      </h2>

      <p className="text-slate-500 text-[16px] mb-12">
        We&apos;ll connect you with the right specialist. All enquiries are
        confidential.
      </p>

      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
          {/* Company Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#05183D]">
              Company name
            </label>
            <input
              name="company"
              type="text"
              placeholder="Enter your company name"
              className="border-b-[1.5px] border-slate-200 py-3 outline-none focus:border-[#2F8BDD] transition-colors placeholder:text-slate-300 text-slate-700 bg-transparent"
            />
          </div>

          {/* Your Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#05183D]">
              Your name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="border-b-[1.5px] border-slate-200 py-3 outline-none focus:border-[#2F8BDD] transition-colors placeholder:text-slate-300 text-slate-700 bg-transparent"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#05183D]">
              Your email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="border-b-[1.5px] border-slate-200 py-3 outline-none focus:border-[#2F8BDD] transition-colors placeholder:text-slate-300 text-slate-700 bg-transparent"
            />
          </div>

          {/* Service Select */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#05183D]">
            What are you looking for?{" "}
              <span className="text-red-500">*</span>
            </label>

            <input type="hidden" name="service" value={service} />

            <Select value={service} onValueChange={setService}>
              <SelectTrigger className="w-full border-0  py-3 px-0 rounded-none outline-none focus:border-[#2F8BDD] transition-colors text-slate-700 bg-transparent">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="AI Readiness Assessment">
                AI Readiness Assessment
                </SelectItem>
                <SelectItem value="AI Strategy & Roadmapping">
                  AI Strategy & Roadmapping
                </SelectItem>
                <SelectItem value="AI Automation">
                 AI Automation
                </SelectItem>
                <SelectItem value="AI Agents">
                  AI Agents
                </SelectItem>
                <SelectItem value="Not sure yet — I need guidance">
                  Not sure yet — I need guidance
                </SelectItem>
               
              </SelectContent>
            </Select>
          </div>

          {/* Timeline Select */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-bold text-[#05183D]">
              Where are you with AI currently?<span className="text-red-500">*</span>
            </label>

            <input type="hidden" name="timeline" value={timeline} />

            <Select value={timeline} onValueChange={setTimeline}>
              <SelectTrigger className="w-full border-0 py-3 px-0 rounded-none outline-none focus:border-[#2F8BDD] transition-colors text-slate-700 bg-transparent">
                <SelectValue placeholder="Select your stage" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Just starting to explore">
                Just starting to explore
                </SelectItem>
                <SelectItem value="Have ideas but unsure where to start">Have ideas but unsure where to start</SelectItem>
                <SelectItem value="Tried AI tools but not seeing results">Tried AI tools but not seeing results</SelectItem>
                <SelectItem value="Ready to implement now">Ready to implement now</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-bold text-[#05183D]">
           What's your biggest AI challenge?{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            rows={2}
            required
            placeholder="Tell us about your business and what you're trying to solve..."
            className="border-b-[1.5px] border-slate-200 py-3 outline-none focus:border-[#2F8BDD] transition-colors placeholder:text-slate-300 text-slate-700 bg-transparent resize-none"
          />
        </div>

        {/* Submit */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 cursor-pointer rounded-[12px] text-white font-bold text-[18px] transition-all duration-300 shadow-[0_15px_35px_rgba(47,139,221,0.35)] hover:shadow-[0_20px_45px_rgba(47,139,221,0.45)] active:scale-[0.98] disabled:opacity-70"
            style={{
              background: "linear-gradient(90deg, #2F8BDD 0%, #6FDEF7 100%)",
            }}
          >
            {loading ? "Booking..." : "Book My Free Discovery Call"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormCard;
