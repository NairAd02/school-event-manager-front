import { CalendarIcon, MapPinIcon } from "lucide-react";
import type { Event } from "@/lib/types/event";
import type { Paper } from "@/lib/types/paper";
import { PapersList } from "../PapersList/PapersList";

interface EventDetailsProps {
  event: Event;
  papers: Paper[];
}

export default function EventDetails({ event, papers }: EventDetailsProps) {
  return (
    <div className="px-4 py-12">
      <div className="bg-gradient-to-r from-primary to-primary rounded-lg shadow-lg mb-12 p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">{event.nombre_evento}</h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <CalendarIcon className="mr-2 h-5 w-5" />
            <span className="text-lg">{event.fecha}</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="mr-2 h-5 w-5" />
            <span className="text-lg">{event.lugar}</span>
          </div>
        </div>
      </div>
      <PapersList papers={papers} />
    </div>
  );
}
