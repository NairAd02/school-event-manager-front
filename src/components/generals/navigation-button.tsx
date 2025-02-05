import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function NavigationButton({
  href,
  children,
  className = "",
}: Props) {
  return (
    <Link href={href}>
      <Button
        className={
          "m-0 mt-4 w-full bg-primary hover:bg-primary-dark  text-white font-bold transition duration-300 ease-in-out transform hover:text-lg rounded-t-none " +
          className
        }
      >
        {children}
      </Button>
    </Link>
  );
}
