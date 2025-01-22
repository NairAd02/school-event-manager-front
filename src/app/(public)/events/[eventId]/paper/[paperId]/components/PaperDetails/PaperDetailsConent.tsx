"use client";

import React from "react";
import useDocumentPreview from "./hooks/useDocumentPreview";
import type { PaperDetails } from "@/lib/types/paper";
import { motion } from "framer-motion";
import { Download, FileText, Music } from "lucide-react";
import AudioPlayer from "@/components/ui/audio-player";
import { Button } from "@/components/ui/button";
import useDownloadPack from "./hooks/useDownloadPack";
import CircularProgress from "@/components/ui/circular-progress";

interface Props {
  paper: PaperDetails;
}

export function PaperDetailsContent({ paper }: Props) {
  const { content, isDocumentLoading } = useDocumentPreview({ paper });
  const { isLoading, downloadPack } = useDownloadPack({
    packName: paper.nombre_ponencia,
    files: [paper.documento_original, paper.summary, paper.audio_file],
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        {paper.nombre_ponencia}
      </h1>
      <p className="text-gray-600 mb-6 flex items-center">
        <FileText className="mr-2" size={18} />
        Autor: <span className="font-semibold ml-1">{paper.autor}</span>
      </p>

      {!isDocumentLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="border border-gray-200 rounded-lg p-6 mb-6 bg-gray-50 overflow-x-auto whitespace-pre-wrap text-gray-700 max-h-[500px] shadow-inner"
        >
          <p className="text-lg leading-relaxed">{content}</p>
        </motion.div>
      ) : (
        <CircularProgress className="h-16 w-16" />
      )}

      <div className="flex flex-wrap gap-4 mb-6">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={paper.documento_original}
          download
          className="bg-primary text-white px-6 py-3 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-primary"
        >
          <Download className="mr-2" size={18} />
          Descargar Documento Original
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={paper.summary}
          download
          className="bg-primary text-white px-6 py-3 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-primary"
        >
          <Download className="mr-2" size={18} />
          Descargar Resumen
        </motion.a>
      </div>

      <AudioPlayer audioSrc={paper.audio_file} />
      <div>
        <Button
          onClick={downloadPack}
          disabled={isLoading}
          className="bg-primary mt-8 hover:bg-primary-dark text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          <Download className="mr-2" size={18} />
          Descargar Pack de Ponencia
          {isLoading && <CircularProgress className="h-5 w-5" />}
        </Button>
      </div>
    </motion.div>
  );
}
