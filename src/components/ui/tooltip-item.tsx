import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

interface Props {
  text: string;
  children: ReactNode;
}

export default function TooltipItem({ text, children }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className="bg-secondary">
          <p className="text-white text-[9.36px] sm:text-sm md:text-lg">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
