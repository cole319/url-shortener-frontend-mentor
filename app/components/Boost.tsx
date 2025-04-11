import React from "react";
import Button from "./Button";

export default function Boost() {
  return (
    <div className="px-[10rem] py-[6rem] bg-[url('/assets/images/bg-boost-desktop.svg')] h-[10rem] bg-[var(--dark-violet)] flex flex-col gap-[1rem] items-center justify-center">
      <h1 className="text-[var(--light-violet)] font-bold text-[2rem]">
        Boost your links today
      </h1>
      <Button
        cssProperties="bg-[var(--cyan)] rounded-full text-neutral-50 hover:bg-transparent bg-[var(--cyan)] w-fit"
        text="Get Started"
      />
    </div>
  );
}
