"use client";
import React from "react";
import { motion } from "framer-motion";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Event } from "@/lib/types/event";
import PreviewImage from "@/components/ui/preview-image/preview-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { routes } from "@/lib/routes/routes";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl w-[clamp(280px, 20%, 300px)] border-2 shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 flex flex-col items-center pt-4 pb-0 pl-0 pr-0 gap-4"
    >
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 rounded-full"></div>
        <div>
          <PreviewImage preview="/images/cujae-logo.jpg"/>
        </div>
      </div>
      <div className="flex flex-cols h-full">
        <div>
          <h2 className="text-xl font-bold text-black ml-4 mr-4 mb-2 whitespace-normal break-words">
            {event.nombre_evento}
          </h2>
          <div className="flex items-center mr-4 font-bold  text-gray-600">
            <CalendarIcon className="h-5 w-5 text-blue-500 mr-2" />
            <p className="text-base">{event.fecha}</p>
          </div>
          <div className="flex items-center mr-4 font-bold  text-gray-600">
            <MapPinIcon className="h-5 w-5 text-red-500 mr-2" />
            <p className="text-base truncate">{event.lugar}</p>
          </div>
          <div>
            <Button className="m-0 mt-4 w-full bg-primary hover:bg-primary-dark gradient-btn text-white font-bold transition duration-300 ease-in-out transform hover:text-lg rounded-t-none">
              <Link href={routes.event(event.id.toString()).path}>Ver detalles</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
