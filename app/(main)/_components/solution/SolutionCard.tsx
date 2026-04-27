"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface SolutionCardProps {
  title: string;
  description: string;
  points: string[];
  image: string | StaticImageData;
  badge?: string;
  badgeColor?: string; // "default" or "blue"
  btnText: string;
  btnLink: string;
  index: number;
  delay: number;
}

const SolutionCard = ({
  title,
  description,
  points,
  image,
  badge,
  badgeColor = "default",
  btnText,
  btnLink,
  delay,
  index,
}: SolutionCardProps) => {
  const route = useRouter();

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-white rounded-[20px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden h-full group"
    >
      {/* Top Image Section */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        {/* Title & Badge */}
        <div className="flex justify-between items-start mb-4 gap-2">
          <h3 className="text-[20px] font-bold text-[#05183D] leading-tight">
            {title}
          </h3>
          {badge && (
            <span
              className={`px-3 py-1 rounded-full text-[12px] font-semibold whitespace-nowrap border ${
                badgeColor === "blue"
                  ? "bg-[#2F8BDD] text-white border-[#2F8BDD]"
                  : "bg-white text-slate-500 border-slate-200"
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-[#64748B] text-[14px] leading-relaxed mb-6">
          {description}
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 mb-8 flex-grow">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-[#05183D]">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2F8BDD] mt-2"></span>
              <span className="text-[13px] font-medium leading-snug">{point}</span>
            </li>
          ))}
        </ul>

        {/* CTA Link */}
        <div className="mt-auto pt-4 border-t border-slate-100">
          <button
            onClick={() => route.push(btnLink)}
            className="text-[#2F8BDD] text-[14px] font-bold hover:text-[#05183D] transition-colors duration-300 flex items-center gap-1 w-fit"
          >
            {btnText} <span className="text-[16px] leading-none">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
