import { Event } from "@/lib/types/event";
import React from "react";
import EventsList from "./components/EventsList/EventsList";

export default function EventsPage() {
  const events: Event[] = [
    {
      id: 0,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
    {
      id: 1,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
    {
      id: 2,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
    {
      id: 3,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
    {
      id: 4,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
    {
      id: 5,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
    {
      id: 6,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
    {
      id: 7,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
    {
      id: 8,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
    {
      id: 9,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
    {
      id: 10,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
    {
      id: 11,
      nombre_evento: "evento 1",
      fecha: "2024",
      lugar: "lugar",
    },
  ];
  return (
    <div className="p-6 pt-28">
      <EventsList events={events} />
    </div>
  );
}
