import React from "react";

interface ButtonProps {
  cssProperties?: string;
  text: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

export default function Button({
  cssProperties,
  text,
  type,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`font-bold cursor-pointer py-[0.8rem] px-[2rem] transition ease-in-out duration-300 ${cssProperties}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
