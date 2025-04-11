import React from "react";
import Button from "./Button";

export default function URLForm() {
  return (
    <div className="absolute w-full px-[1rem] lg:px-[10rem] left-0 right-0 bottom-[-4rem]">
      <div className="bg-[url('/assets/images/bg-shorten-desktop.svg')] bg-[var(--dark-violet)] p-[1rem] lg:px-[3rem] lg:py-[2rem] w-[93vw] lg:w-full rounded-lg ">
        <form
          action="submit"
          className="lg:flex-row gap-[1rem] w-full flex flex-col"
        >
          <input
            type="text"
            className="bg-neutral-50 py-[0.8rem] px-[2rem] rounded-lg w-full lg:w-4/5 placeholder-[var(--dark-gray)] text-[var(--dark-gray)]"
            placeholder="Shorten a link here..."
          />
          <Button
            cssProperties="bg-[var(--cyan)] rounded-lg text-neutral-50 hover:bg-transparent bg-[var(--cyan)] w-full lg:w-1/5"
            text="Shorten it!"
          />
        </form>
      </div>
    </div>
  );
}
