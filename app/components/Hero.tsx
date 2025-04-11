import React from "react";
import Image from "next/image";

//internal imports
import Button from "./Button";
import HeroBanner from "../../public/assets/images/illustration-working.svg";
import URLForm from "./URLForm";

export default function Hero() {
  return (
    <section className="lg:flex py-[8rem] px-[1rem] lg:px-[10rem] relative lg:pb-[12rem]">
      {/* Description */}
      <div className="w-full lg:w-1/2 pt-[10rem] lg:pt-0 text-center lg:text-left">
        <h1 className="lg:text-[4.5rem] text-[var(--very-dark-violet)] font-bold lg:leading-20 text-[2.5rem]">
          More than just shorter links
        </h1>
        <p className="text-[var(--grayish-violet)] text-[1rem] lg:text-[1.4rem] font-semibold pb-[2.5rem] pt-[0.8rem]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <Button
          cssProperties="bg-[var(--cyan)] rounded-full text-neutral-50 hover:bg-transparent hover:text-[var(--grayish-violet)] bg-[var(--cyan)]"
          text="Get Started"
        />
      </div>
      {/* Banner Image */}
      <div className="lg:w-1/2 lg:relative w-[1/2]">
        <Image
          src={HeroBanner}
          height={900}
          width={900}
          alt="working illustration"
          className="mix-blend-multiply absolute lg:left-[30%] bottom-[65%] lg:bottom-0"
        />
      </div>

      <URLForm />
    </section>
  );
}
