import React from "react";

interface Props {
  className?: string;
}

export default function CircularProgress({ className = "" }: Props) {
  return (
    <div className="flex items-center justify-center h-64">
      <div
        className={
          "animate-spin rounded-full border-t-2 border-b-2 border-secondary " +
          className
        }
      ></div>
    </div>
  );
}
