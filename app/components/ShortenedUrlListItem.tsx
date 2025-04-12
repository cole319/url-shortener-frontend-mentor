import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";

//internal imports
import Button from "./Button";

//types
import ShortenedUrlListItemType from "../types/ShortenedUrlListItemType";

export default function ShortenedUrlListItem({
  url,
  shortenedUrl,
}: ShortenedUrlListItemType) {
  return (
    <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center w-full bg-neutral-50 text-[var(--dark-violet)] py-[0.4rem] px-[1rem] xll:px-[2rem] gap-[1rem] shadow-xs rounded-lg">
      <h1 className="xll:w-2/3 text-center xll:text-start">
        {url.slice(0, 18) + "...." + url.slice(-18)}
      </h1>
      <div className="flex justify-center gap-[1rem] xll:gap-0 lg:justify-between items-center xll:w-1/3">
        <h1 className="text-[var(--very-dark-cyan)] font-bold">
          {shortenedUrl}
        </h1>
        <Button
          cssProperties="bg-[var(--cyan)] rounded-lg text-neutral-50 hover:bg-[var(--dark-violet)] bg-[var(--cyan)] sm:max-lg:text-[0.8rem] text-[0.7rem] lg:text-[0.9rem] hidden lg:block"
          text="Copy"
        />
        <button className="lg:hidden text-neutral-50 h-[2rem] w-[2rem] bg-[var(--cyan)] flex justify-center items-center rounded-full cursor-pointer hover:bg-[var(--dark-violet)]">
          <MdOutlineContentCopy />
        </button>
      </div>
    </div>
  );
}
