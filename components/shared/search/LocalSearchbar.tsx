"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
interface Props {
  route: string;
  placeholder: string;
  otheClasses?: string;
  iconPosition: string;
  imgSrc: string;
}

const LocalSearchbar = ({
  route,
  placeholder,
  otheClasses,
  iconPosition,
  imgSrc,
}: Props) => {
  return (
    <div
      className={` background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ${otheClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
      )}
      <Input
        onChange={() => {}}
        type="text"
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchbar;
