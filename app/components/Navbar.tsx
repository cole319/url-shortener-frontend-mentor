import React from "react";

//internal imports
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-[4rem]">
        {/* logo */}

        <h1 className="text-[var(--very-dark-violet)] font-extrabold text-[2.5rem]">
          Shortly
        </h1>
        {/* menu */}
        <ul className="text-[var(--grayish-violet)] font-bold flex gap-[1.5rem] cursor-pointer text-[1rem]">
          <li className=" hover:text-[var(--dark-gray)]">Features</li>
          <li className=" hover:text-[var(--dark-gray)]">Pricing</li>
          <li className=" hover:text-[var(--dark-gray)]">Resources</li>
        </ul>
      </div>

      {/* login signup buttons */}
      <div className="flex h-fit gap-[1rem] justify-center items-center">
        <Button
          cssProperties="bg-transparent rounded-full text-[var(--grayish-violet)] hover:bg-[var(--cyan)] hover:text-[var(--light-gray)] border-transparent"
          text="Login"
        />
        <Button
          cssProperties="bg-[var(--cyan)] rounded-full text-[var(--light-gray)] hover:bg-transparent hover:text-[var(--grayish-violet)] bg-[var(--cyan)]"
          text="Sign Up"
        />
      </div>
    </nav>
  );
}
