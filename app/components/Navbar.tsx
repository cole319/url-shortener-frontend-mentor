"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

//internal imports
import Button from "./Button";
import Logo from "../../public/assets/images/logo.svg";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(true);

  return (
    <nav className="flex justify-between items-center px-[1rem] md:px-[10rem] relative">
      <div className="flex justify-center items-center gap-[4rem]">
        {/* logo */}

        <h1 className="text-[var(--very-dark-violet)] font-extrabold md:text-[2.3rem] text-[1.5rem]">
          <Image src={Logo} height={150} width={150} alt="shortly logo" />
        </h1>
        {/* menu */}
        <ul className="text-[var(--grayish-violet)] font-bold gap-[1.5rem] cursor-pointer text-[1rem] hidden md:flex">
          <li className=" hover:text-[var(--dark-gray)]">Features</li>
          <li className=" hover:text-[var(--dark-gray)]">Pricing</li>
          <li className=" hover:text-[var(--dark-gray)]">Resources</li>
        </ul>
      </div>

      {/* login signup buttons */}
      <div className="h-fit gap-[1rem] justify-center items-center hidden md:flex">
        <Button
          cssProperties="bg-transparent rounded-full text-[var(--grayish-violet)] hover:bg-[var(--cyan)] hover:text-neutral-50 border-transparent"
          text="Login"
        />
        <Button
          cssProperties="bg-[var(--cyan)] rounded-full text-neutral-50 hover:bg-transparent hover:text-[var(--grayish-violet)] bg-[var(--cyan)]"
          text="Sign Up"
        />
      </div>

      {/* small screen navbar menu */}

      {hamburger == false && (
        <div
          className={`flex flex-col items-start w-full bg-[var(--light-violet)] px-[2rem] py-[1rem] right-[0%] top-[0%] z-20 rounded-lg md:hidden transform transition-transform duration-300 ease-in-out fixed ${
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

          <ul className="flex flex-col items-start text-[var(--grayish-violet)] gap-[1rem] w-full">
            <li className=" hover:text-[var(--dark-gray)] cursor-pointer font-bold border-b-[0.1rem] border-solid border-b-[var(--semi-gray)] w-full">
              Features
            </li>
            <li className=" hover:text-[var(--dark-gray)] cursor-pointer font-bold border-b-[0.1rem] border-solid border-b-[var(--semi-gray)] w-full">
              Pricing
            </li>
            <li className=" hover:text-[var(--dark-gray)] cursor-pointer font-bold border-b-[0.1rem] border-solid border-b-[var(--semi-gray)] w-full">
              Resources
            </li>
          </ul>
          <div className="flex flex-col gap-[0.5rem] pt-[1rem] w-full">
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
      )}
      {hamburger == true && (
        <button
          className="text-[var(--grayish-violet)] text-[2rem] md:hidden"
          onClick={() => setHamburger(false)}
        >
          <GiHamburgerMenu />
        </button>
      )}
    </nav>
  );
}
