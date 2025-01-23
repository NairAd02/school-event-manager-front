"use client";
import { fetchFile } from "@/lib/fetchers/fetchFile";
import { useCallback, useEffect, useState } from "react";
import mammoth from "mammoth";
import { PaperDetails } from "@/lib/types/paper";

interface Props {
  paper: PaperDetails;
}

export default function useDocumentPreview({ paper }: Props) {
  const [content, setContent] = useState("");
  const [isDocumentLoading, setIsDocumentLoading] = useState(false);
  const loadDocument = useCallback(async () => {
    setIsDocumentLoading(true);
    try {
      const file = await fetchFile(paper.summary);
      const result = await mammoth.extractRawText({ arrayBuffer: file });
      setContent(result.value);
    } catch (error) {
      console.error("Error loading document:", error);
    } finally {
      setIsDocumentLoading(false);
    }
  }, [paper]);

  useEffect(() => {
    loadDocument();
  }, [loadDocument]);

  return { content, isDocumentLoading };
}
