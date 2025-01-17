import { Event } from "@/lib/types/event";
import React from "react";

export default function EventsPage() {
  const events: Event[] = [
    {
      id: 0,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
  ];
  return <div>EventsPage</div>;
}
