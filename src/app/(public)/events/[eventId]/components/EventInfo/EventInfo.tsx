"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PreviewImage from "@/components/ui/preview-image/preview-image"
import type { Event } from "@/lib/types/event"
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline"

interface Props {
  event: Event
}

export function EventInfo({ event }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="mb-6 overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
        <CardHeader className="bg-primary text-white">
          <CardTitle className="text-2xl font-bold">{event.nombre_evento}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
              <div className="flex items-center text-gray-600">
                <CalendarIcon className="h-5 w-5 text-blue-500 mr-2" />
                <p className="text-sm">
                  <strong>Fecha:</strong> {event.fecha}
                </p>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="h-5 w-5 text-red-500 mr-2" />
                <p className="text-sm">
                  <strong>Lugar:</strong> {event.lugar}
                </p>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <PreviewImage preview="/images/cujae-logo.jpg" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

