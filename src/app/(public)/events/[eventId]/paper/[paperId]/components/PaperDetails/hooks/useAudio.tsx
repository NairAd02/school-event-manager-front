"use client";
import { fetchFileBase64 } from "@/lib/fetchers/fetchFile";
import { useEffect, useState } from "react";

interface Props {
  audioUrl: string;
}

export default function useAudio({ audioUrl }: Props) {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadAudio = async () => {
      try {
        setIsLoading(true);
        const base64Audio = await fetchFileBase64(audioUrl);
        setAudioSrc(base64Audio);
      } catch (error) {
        console.error("Error al cargar el audio", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAudio();
  }, [audioUrl]);

  return { audioSrc, isLoading };
}
