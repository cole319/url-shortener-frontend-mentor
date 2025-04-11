import React from "react";
import Button from "./Button";

export default function URLForm() {
  return (
    <div className="absolute bg-[url('/assets/images/bg-shorten-desktop.svg')] bg-[var(--dark-violet)] p-[1rem] md:px-[3rem] md:py-[2rem] w-[93vw] md:w-[77.778vw] bottom-[-10%] rounded-lg transform -translate-x-1 md:transform-none md:-translate-0">
      <form
        action="submit"
        className="md:flex-row gap-[1rem] w-full flex flex-col"
      >
        <input
          type="text"
          className="bg-neutral-50 py-[0.8rem] px-[2rem] rounded-lg w-full md:w-4/5 placeholder-[var(--dark-gray)] text-[var(--dark-gray)]"
          placeholder="Shorten a link here..."
        />
        <Button
          cssProperties="bg-[var(--cyan)] rounded-lg text-neutral-50 hover:bg-transparent bg-[var(--cyan)] w-full md:w-1/5"
          text="Shorten it!"
        />
      </form>
    </div>
  );
}
