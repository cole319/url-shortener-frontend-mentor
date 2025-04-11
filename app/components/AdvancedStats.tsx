import React from "react";

//internal imports
import AdvancedStatsCard from "./AdvancedStatsCard";
import BrandRecognitionIcon from "../../public/assets/images/icon-brand-recognition.svg";
import DetailedRecordIcon from "../../public/assets/images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../../public/assets/images/icon-fully-customizable.svg";
import CyanStraightLineHorizontal from "./CyanStraightLineHorizontal";
import CyanStraightLineVertical from "./CyanStraightLineVertical";

export default function AdvancedStats() {
  return (
    <section className="py-[10rem] bg-[var(--light-violet)] px-[1rem] md:px-[10rem] flex flex-col justify-center items-center gap-[6rem] md:gap-[3rem]">
      {/* Heading */}
      <article className="w-full md:w-[40%] text-center">
        <h1 className="text-[var(--dark-violet)] text-[2rem] font-bold pb-[0.8rem]">
          Advanced Statistics
        </h1>
        {/* Description */}
        <p className="text-[var(--grayish-violet)] text-[1rem] font-semibold">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </article>
      {/* Advanced Statistics Cards */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-[5rem] md:grid md:grid-cols-3 md:grid-rows-1 md:gap-[3rem] h-[110vh] md:h-[40vh] relative">
          <CyanStraightLineHorizontal />
          <CyanStraightLineVertical />

          <div className="md:self-start">
            <AdvancedStatsCard
              icon={BrandRecognitionIcon}
              heading="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
            />
          </div>
          <div className="md:self-center">
            <AdvancedStatsCard
              icon={DetailedRecordIcon}
              heading="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
          </div>
          <div className="md:self-end">
            <AdvancedStatsCard
              icon={FullyCustomizableIcon}
              heading="Fully Customizable"
              description=" Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
