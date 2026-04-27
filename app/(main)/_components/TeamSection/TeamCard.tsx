"use client";

import Image, { StaticImageData } from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string | StaticImageData;
  index: number;
}

const TeamCard = ({ name, role, image, index }: TeamMemberProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className="bg-white rounded-[20px] border hover:border-[#168be1] group border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300  hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden"
    >
      {/* Image Container with Padding */}
      <div className="p-2 w-full">
        <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className={`object-cover transition-transform duration-700   ${(index === 1 || index === 3)? "scale-110" : ""}`}
          />
        </div>
      </div>

      {/* Text Container */}
      <div className="px-4 pb-5 pt-1">
        <h3 className="text-[#05183D] font-bold text-[18px] mb-1">
          {name}
        </h3>
        <p className="text-[#64748B] text-[13px] font-medium leading-snug">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
