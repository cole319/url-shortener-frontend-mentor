import React from "react";
import Button from "./Button";

export default function URLForm() {
  return (
    <div className="absolute w-full px-[1rem] lg:px-[10rem] left-0 right-0 bottom-[-4rem] md:max-lg:px-[7rem]">
      <div className="bg-[url('/assets/images/bg-shorten-desktop.svg')] bg-[var(--dark-violet)] p-[1rem] lg:px-[3rem] lg:py-[2rem] w-full rounded-lg ">
        <form
          action="submit"
          className="sm:flex-row gap-[1rem] w-full flex flex-col"
        >
          <input
            type="text"
            className="bg-neutral-50 py-[0.8rem] px-[2rem] rounded-lg w-full sm:w-3/4 lg:w-4/5 placeholder-[var(--dark-gray)] text-[var(--dark-gray)]"
            placeholder="Shorten a link here..."
          />
          <Button
            cssProperties="bg-[var(--cyan)] rounded-lg text-neutral-50 hover:bg-transparent bg-[var(--cyan)] w-full sm:w-1/4 lg:w-1/5 sm:max-lg:text-[0.8rem]"
            text="Shorten it!"
          />
        </form>
      </div>
    </div>
  );
}
