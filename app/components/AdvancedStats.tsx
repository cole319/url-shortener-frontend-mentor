import React from "react";

//internal imports
import AdvancedStatsCard from "./AdvancedStatsCard";
import BrandRecognitionIcon from "../../public/assets/images/icon-brand-recognition.svg";
import DetailedRecordIcon from "../../public/assets/images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../../public/assets/images/icon-fully-customizable.svg";

export default function AdvancedStats() {
  return (
    <section className="py-[10rem] bg-[var(--light-gray)] min-w-screen absolute left-[0%] min-h-[100vh]">
      {/* Heading */}
      <article className="w-[35%] flex flex-col justify-center items-center text-center absolute left-[32.5%]">
        <h1 className="text-[var(--dark-violet)] text-[2rem] font-bold pb-[0.8rem]">
          Advanced Statistics
        </h1>
        {/* Description */}
        <p className="text-[var(--grayish-violet)] text-[1.1rem] font-semibold">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </article>
      {/* Advanced Statistics Cards */}
      <div className="flex justify-center items-center text-black px-[10rem] h-[40vh] absolute top-[45%]">
        <div className="grid grid-cols-3 grid-rows-1 w-full gap-[3rem] h-[40vh]">
          <div className="self-start">
            <AdvancedStatsCard
              icon={BrandRecognitionIcon}
              heading="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links don't 
  mean a thing. Branded links help instil confidence in your content."
            />
          </div>
          <div className="self-center">
            <AdvancedStatsCard
              icon={DetailedRecordIcon}
              heading="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
            />
          </div>
          <div className="self-end">
            <AdvancedStatsCard
              icon={FullyCustomizableIcon}
              heading="Fully Customizable"
              description=" Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
