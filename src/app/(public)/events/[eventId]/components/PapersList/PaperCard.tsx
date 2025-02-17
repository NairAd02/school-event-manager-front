"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Paper } from "@/lib/types/paper";
import { UserIcon } from "@heroicons/react/24/outline";
import { routes } from "@/lib/routes/routes";
import NavigationButton from "@/components/generals/navigation-button";
import TooltipItem from "@/components/ui/tooltip-item";

interface Props {
  paper: Paper;
}

export default function PaperCard({ paper }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-auto shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
        <CardHeader className="bg-primary p-2 sm:p-4 text-white">
          <CardTitle>
            <TooltipItem text={paper.nombre_ponencia}>
              <p className="line-clamp-1 text-start text-ellipsis text-sm sm:text-sm md:text-lg">
                {paper.nombre_ponencia}
              </p>
            </TooltipItem>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center text-gray-600">
              <UserIcon className="h-5 w-5 text-blue-500 mr-2" />
              <p className="text-sm">
                <strong>Autor:</strong> {paper.autor}
              </p>
            </div>
            <NavigationButton
              href={
                routes.paper(paper.evento.toString(), paper.id.toString()).path
              }
            >
              Ver Detalles
            </NavigationButton>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
