import CircularProgress from "@/components/ui/circular-progress";
import React from "react";

export default function Loading() {
  return (
    <div className="pt-28 flex items-center justify-center w-full h-screen">
      <CircularProgress className="size-40 border-primary" />
    </div>
  );
}
