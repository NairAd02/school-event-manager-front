"use client";
import { getPaperImages } from "@/lib/services/images";
import { Image } from "@/lib/types/image";
import { useCallback, useEffect, useState } from "react";

interface Props {
  paperId: string;
}

export default function usePaperImages({ paperId }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<Image[]>([]);

  const fetchImages = useCallback(async () => {
    setIsLoading(true);

    try {
      setImages(await getPaperImages(paperId));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [paperId]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return { isLoading, images, fetchImages };
}
