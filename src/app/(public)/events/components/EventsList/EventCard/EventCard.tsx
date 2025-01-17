"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  MapPinIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import { Event } from "@/lib/types/event";
import PreviewImage from "@/components/ui/preview-image/preview-image";
import { Button } from "@/components/ui/button";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <PreviewImage preview="/images/cujae-logo.jpg" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h2 className="text-2xl font-bold text-white mb-2 truncate">
            {event.nombre_evento}
          </h2>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4 text-gray-600">
          <CalendarIcon className="h-5 w-5 text-blue-500 mr-2" />
          <p className="text-sm">{event.fecha}</p>
        </div>
        <div className="flex items-center mb-4 text-gray-600">
          <MapPinIcon className="h-5 w-5 text-red-500 mr-2" />
          <p className="text-sm truncate">{event.lugar}</p>
        </div>
        <div className="flex items-center  justify-center">
          <Button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Ver detalles
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
