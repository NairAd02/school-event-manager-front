"use client";
import { getPaperVideos } from "@/lib/services/videos";
import { Video } from "@/lib/types/video";
import { useCallback, useEffect, useState } from "react";

interface Props {
  paperId: string;
}

export default function usePaperVideos({ paperId }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);

  const fetchVideos = useCallback(async () => {
    setIsLoading(true);

    try {
      setVideos(await getPaperVideos(paperId));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [paperId]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { isLoading, videos, fetchVideos };
}
