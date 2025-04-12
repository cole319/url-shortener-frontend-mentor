import React from "react";
import Image from "next/image";

//internal imports
import Button from "./Button";
import HeroBanner from "../../public/assets/images/illustration-working.svg";
import URLForm from "./URLForm";

export default function Hero() {
  return (
    <section className="lg:flex py-[8rem] px-[1rem] xll:px-[10rem] relative lg:pb-[12rem] md:max-lg:px-[7rem] lg:max-xll:px-[4rem]">
      {/* Description */}
      <div className="w-full lg:w-1/2 pt-[10rem] xs:pt-[14rem] lg:pt-0 text-center lg:text-left md:max-lg:pt-[16rem]">
        <h1 className="xll:text-[4.5rem] text-[var(--very-dark-violet)] font-bold lg:leading-20 text-[2.5rem] lg:max-xll:text-[3.5rem]">
          More than just shorter links
        </h1>
        <p className="text-[var(--grayish-violet)] text-[1rem] xll:text-[1.4rem] font-semibold pb-[2.5rem] pt-[0.8rem] lg:max-xll:text-[1.2rem]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <Button
          cssProperties="bg-[var(--cyan)] rounded-full text-neutral-50 hover:bg-transparent hover:text-[var(--grayish-violet)] bg-[var(--cyan)]"
          text="Get Started"
        />
      </div>
      {/* Banner Image */}
      <div className="lg:w-1/2 lg:relative w-full xs:max-sm:w-[10rem] sm:max-md:w-[15rem]">
        <Image
          src={HeroBanner}
          height={900}
          width={900}
          alt="working illustration"
          className="mix-blend-multiply absolute lg:left-[30%] bottom-[65%] lg:bottom-0 hidden lg:block h-[60%] lg:h-auto"
        />
      </div>
      <Image
        src={HeroBanner}
        height={500}
        width={500}
        alt="working illustration"
        className="mix-blend-multiply absolute top-[5%] left-[15%] hidden md:max-lg:block"
      />
      <Image
        src={HeroBanner}
        height={450}
        width={450}
        alt="working illustration"
        className="mix-blend-multiply absolute top-[5%] left-[15%] hidden sm:max-md:block"
      />
      <Image
        src={HeroBanner}
        height={450}
        width={450}
        alt="working illustration"
        className="mix-blend-multiply absolute top-[5%] left-[10%] hidden xsm:max-sm:block"
      />
      <Image
        src={HeroBanner}
        height={500}
        width={500}
        alt="working illustration"
        className="mix-blend-multiply absolute top-[5%] left-[5%] xsm:hidden"
      />

      <URLForm />
    </section>
  );
}
