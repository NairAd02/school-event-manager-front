"use client";

import { Music } from "lucide-react";

interface Props {
  audioSrc: string;
}

export default function AudioPlayer({ audioSrc }: Props) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-3 flex items-center">
        <Music className="mr-2" size={24} />
        Audio del Resumen
      </h2>
      <audio controls className="w-full">
        <source src={audioSrc} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
}
