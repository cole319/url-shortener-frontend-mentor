import React from "react";

interface ButtonProps {
  cssProperties?: string;
  text: string;
}

export default function Button({ cssProperties, text }: ButtonProps) {
  return (
    <button
      className={`font-bold cursor-pointer py-[0.8rem] px-[2rem] transition ease-in-out duration-300 ${cssProperties}`}
    >
      {text}
    </button>
  );
}
