import React from "react";
import Image from "next/image";

interface AdvancedStatsCardProps {
  icon: string;
  heading: string;
  description: string;
}

export default function AdvancedStatsCard({
  icon,
  heading,
  description,
}: AdvancedStatsCardProps) {
  return (
    <div className="flex flex-col relative bg-neutral-50 justify-center items-start rounded-md w-full h-full z-50">
      <div className=" bg-[var(--dark-violet)] p-[1rem] h-[4.5rem] w-[4.5rem] rounded-full absolute lg:bottom-[80%] lg:left-[10%] left-1/2 top-0 lg:top-auto transform -translate-y-1/2 -translate-x-1/2 lg:transform-none lg:-translate-y-0 lg:-translate-x-0 ">
        <Image
          src={icon}
          height={100}
          width={100}
          alt="advanced statistics icon"
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start pt-[4.5rem] pb-[2rem] px-[2rem] gap-[1rem] text-center lg:text-left">
        <h1 className="text-[var(--dark-violet)] font-bold text-[1.4rem] lg:max-xll:text-[1rem]">
          {heading}
        </h1>
        <p className="text-[var(--grayish-violet)] text-[0.8rem] font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
}
