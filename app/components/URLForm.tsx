import React from "react";
import Button from "./Button";

export default function URLForm() {
  return (
    <div className="absolute bg-[url('/assets/images/bg-shorten-desktop.svg')] bg-[var(--dark-violet)] px-[3rem] py-[2rem] w-[77.778vw] bottom-[-10%] rounded-lg">
      <form action="submit" className="flex gap-[1rem] w-full">
        <input
          type="text"
          className="bg-neutral-50 py-[0.8rem] px-[2rem] rounded-lg w-4/5 placeholder-[var(--dark-gray)]"
          placeholder="Shorten a link here..."
        />
        <Button
          cssProperties="bg-[var(--cyan)] rounded-lg text-neutral-50 hover:bg-transparent bg-[var(--cyan)] w-1/5"
          text="Shorten it!"
        />
      </form>
    </div>
  );
}
