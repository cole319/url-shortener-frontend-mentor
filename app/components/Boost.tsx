import React from "react";
import Button from "./Button";

export default function Boost() {
  return (
    <div className="px-[1rem] xll:px-[10rem] py-[6rem] bg-[url('/assets/images/bg-boost-desktop.svg')] h-fit xs:h-[10rem] bg-[var(--dark-violet)] flex flex-col gap-[1rem] items-center justify-center text-center lg:max-xll:px-[4rem]">
      <h1 className="text-[var(--light-violet)] font-bold text-[1.8rem] lg:text-[2rem]">
        Boost your links today
      </h1>
      <Button
        cssProperties="bg-[var(--cyan)] rounded-full text-neutral-50 hover:bg-transparent bg-[var(--cyan)] w-fit"
        text="Get Started"
      />
    </div>
  );
}
