import React from "react";
import Image from "next/image";

//internal imports
import Button from "./Button";
import HeroBanner from "../../public/assets/images/illustration-working.svg";
import URLForm from "./URLForm";

export default function Hero() {
  return (
    <section className="flex py-[8rem] px-[10rem] relative pb-[12rem]">
      {/* Description */}
      <div className="w-1/2">
        <h1 className="text-[4.5rem] text-[var(--very-dark-violet)] font-bold leading-20">
          More than just shorter links
        </h1>
        <p className="text-[var(--grayish-violet)] text-[1.4rem] font-semibold pb-[2.5rem] pt-[0.8rem]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <Button
          cssProperties="bg-[var(--cyan)] rounded-full text-neutral-50 hover:bg-transparent hover:text-[var(--grayish-violet)] bg-[var(--cyan)]"
          text="Get Started"
        />
      </div>
      {/* Banner Image */}
      <div className="w-1/2 relative">
        <Image
          src={HeroBanner}
          height={900}
          width={900}
          alt="working illustration"
          className="mix-blend-multiply absolute left-[30%]"
        />
      </div>

      <URLForm />
    </section>
  );
}
