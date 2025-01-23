"use client";
import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

interface Props {
  videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: Props) {
  return (
    <div className="mb-6">
      <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="400px"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}
