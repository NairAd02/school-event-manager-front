"use client";
import { downloadZip } from "@/lib/services/files";
import { useCallback, useState } from "react";

interface Props {
  packName: string;
  files: string[];
}

export default function useDownloadPack({ packName, files }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const downloadPack = useCallback(async () => {
    setIsLoading(true);
    await downloadZip(packName, files);
    setIsLoading(false);
  }, [packName, files]);

  return { isLoading, downloadPack };
}
