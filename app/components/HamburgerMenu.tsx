"use client";
import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

//internal imports
import Button from "./Button";

interface HamburgerMenuProps {
  hamburger: boolean;
  setHamburger: (n: boolean) => void;
}

export default function HamburgerMenu({
  hamburger,
  setHamburger,
}: HamburgerMenuProps) {
  return (
    <div
      className={`flex flex-col items-start bg-[var(--light-violet)] px-[2rem] py-[1rem] right-[0%] top-[0%] z-20 rounded-lg lg:hidden transform transition-transform duration-300 ease-in-out fixed ${
        !hamburger ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end items-center w-full pr-[0rem] pb-[1rem]">
        <button
          className="text-[var(--grayish-violet)] cursor-pointer"
          onClick={() => setHamburger(true)}
        >
          <IoMdCloseCircleOutline className="h-[2rem] w-[2rem]" />
        </button>
      </div>

      <ul className="flex flex-col items-start text-[var(--grayish-violet)]  gap-[1rem]">
        <li className=" hover:text-[var(--dark-gray)] cursor-pointer font-bold">
          Features
        </li>
        <li className=" hover:text-[var(--dark-gray)] cursor-pointer font-bold">
          Pricing
        </li>
        <li className=" hover:text-[var(--dark-gray)] cursor-pointer font-bold">
          Resources
        </li>
      </ul>
      <div className="flex flex-col gap-[0.5rem] pt-[1rem]">
        <Button
          cssProperties="bg-transparent rounded-full text-[var(--grayish-violet)] hover:bg-[var(--cyan)] hover:text-neutral-50 border-[1px] border-solid border-[var(--cyan)]"
          text="Login"
        />
        <Button
          cssProperties="bg-[var(--cyan)] rounded-full text-neutral-50 hover:bg-transparent hover:text-[var(--grayish-violet)] bg-[var(--cyan)]"
          text="Sign Up"
        />
      </div>
    </div>
  );
}
