"use client";

import { sidebarLinks } from "@/constants";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";
const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300  dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6 ">
        {sidebarLinks.map((item) => {
          const active =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              href={item.route}
              key={item.route}
              className={`${
                active
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent  p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${active ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  active ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-4 ">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-md px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                width={20}
                height={20}
                alt="sign in"
                className="invert-colors lg:hidden"
              />
              <span className="text-primary-500 max-lg:hidden">Log In</span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium btn-tertiary text-dark400_light900 light-border-2 min-h-[41px] w-full rounded-md px-4 py-3 shadow-none">
              <Image
                className="invert-colors lg:hidden"
                src="/assets/icons/sign-up.svg"
                width={20}
                height={20}
                alt="sign in"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
