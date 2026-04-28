// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";

// const ClientCTASection = () => {
//   const route = useRouter();
//   return (
//     <section className="bg-[#020817] mx-auto rounded-4xl max-w-7xl mb-22 py-18 px-6 md:px-12 text-center">
//       <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
//           Ready to be <span 
//             style={{ 
//               background: "linear-gradient(90deg, #69d7f5 0%, #3b82f6 100%)", 
//               WebkitBackgroundClip: "text", 
//               WebkitTextFillColor: "transparent" 
//             }}
//           >
//             next?
//           </span>
//         </h2>

//         <p className="text-slate-300 text-[17px] max-w-2xl mx-auto leading-relaxed mb-10">
//           Book a free 30-minute discovery call. No pitch, no pressure — just
//           clarity on what AI could do for your business.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
//           <button
//             onClick={() => route.push("/contact")}
//             className="px-8 py-3.5 cursor-pointer text-white rounded-full font-semibold text-[15px] transition-all hover:opacity-90"
//             style={{
//               background: "linear-gradient(90deg, #69d7f5 0%, #2F8BDD 100%)",
//             }}
//           >
//             Book a Free Call
//           </button>
//           <button
//             onClick={() => route.push("/services")}
//             className="px-8 py-3.5 border cursor-pointer border-[#69d7f5]/30 hover:bg-[#69d7f5]/10 text-white rounded-full font-semibold text-[15px] transition-colors"
//           >
//             View Our Services
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientCTASection;



"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import ctaBg from "@/public/cta/ctaBg.jpg";
import { useRouter } from "next/navigation";

const ClientCTASection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
const route = useRouter()
  return (
    <section className="bg-[#FBFDFF] py-20 px-6">
      <div
        className="max-w-6xl mx-auto rounded-[32px] overflow-hidden relative min-h-[400px] flex items-center justify-center"
        data-aos="zoom-in"
      >
        {/* Background Image - গ্রেডিয়েন্টের বদলে এখন ইমেজ */}
        <div className="absolute inset-0 z-0">
          <Image
            src={ctaBg}
            alt="CTA Background"
            fill
            className="object-cover"
            priority
          />
          {/* হালকা ওভারলে যাতে টেক্সট পড়তে সুবিধা হয় */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
        </div>

        {/* Content Area */}
        <div className="relative z-10 py-16 px-8 text-center flex flex-col items-center justify-center">
          <h2
            className="font-bomstad text-[36px] md:text-[52px] font-bold text-[#05183D] mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
          Ready to be next?

          </h2>

          <p
            className="max-w-2xl text-[#05183D]/80 text-[16px] md:text-[18px] mb-10 leading-relaxed font-medium"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Book a free 30-minute discovery call. No pitch, no pressure — just clarity on what AI could do for your business.
          </p>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {/* Primary Button */}
            <motion.button
              onClick={() => route.push("contact")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(47, 139, 221, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r cursor-pointer from-[#6FDEF7] to-[#2F8BDD] text-white rounded-xl font-bold text-[16px] shadow-lg transition-all"
            >
               Book a Free Call
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              onClick={() => route.push("services")}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(111, 222, 247, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-[1.5px] cursor-pointer border-[#6FDEF7] text-[#2F8BDD] rounded-xl font-bold text-[16px] transition-all bg-transparent backdrop-blur-sm"
            >
                   View Our Services
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCTASection;
