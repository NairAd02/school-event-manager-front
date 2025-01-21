import React from "react";
import EventCard from "./EventCard/EventCard";
import { Event } from "@/lib/types/event";
import EventsFilers from "../EventsFilters/EventsFilters";
import EmptyState from "@/app/components/EmptyState/EmptyState";

interface Props {
  events: Event[];
}

export default function EventsList({ events }: Props) {
  return (
    <div className="flex gap-14">
      <EventsFilers />
      { events.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 w-full p-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div> : <EmptyState title="No existen eventos disponibles de momento" description="Espere con ansias a nuevos eventos" />}
    </div>
  );
}
