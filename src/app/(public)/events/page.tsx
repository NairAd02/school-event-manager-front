import React from "react";
import EventsList from "./components/EventsList/EventsList";
import { getEvents } from "@/lib/services/events";
import { SearchParams } from "@/lib/types/searchParams";

type PageProps = {
  searchParams: SearchParams;
};

export default async function EventsPage({ searchParams }: PageProps) {
  const events = await getEvents(searchParams);

  return (
    <div className="p-6 pt-28">
      <EventsList events={events} />
    </div>
  );
}

export const dynamic = "force-dynamic";
