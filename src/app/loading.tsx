import { SkeletonCard } from "@/components/ui/skeleton-card";
import React from "react";

export default function Loading() {
  return (
    <div className="p-6 pt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 w-full">
      {Array.from({ length: 20 }, (_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
