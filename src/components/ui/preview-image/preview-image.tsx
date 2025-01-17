"use client";
import React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog";

interface Props {
  preview: string;
}

export default function PreviewImage({ preview }: Props) {
  // Estado para controlar si el Dialog está abierto o cerrado
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  // Función para abrir el Dialog
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  // Función para cerrar el Dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      {/* Div que contiene la imagen y maneja el clic para abrir el Dialog */}
      <div
        className="w-full h-48 cursor-pointer"
        onClick={() => {
          console.log("entre");
          handleOpenDialog();
        }}
      >
        <Image
          src={preview}
          alt="Vista previa"
          width={400} // Ancho original de la imagen
          height={200} // Alto original de la imagen
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dialog de shadcn para mostrar la imagen en tamaño completo */}
      <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-2xl">
          {" "}
          {/* Ajusta el tamaño del Dialog */}
          <DialogHeader>
            <DialogTitle>Previsualización de imagen</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center items-center p-2">
            <Image
              src={preview}
              alt="Vista previa"
              width={1000}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
