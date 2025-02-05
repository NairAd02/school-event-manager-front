import React from "react";
import EventsList from "./components/EventsList/EventsList";
import Calendar from "./components/CalendarNav/CalendarNav";
import { getEvents } from "@/lib/services/events";
import { SearchParams } from "@/lib/types/searchParams";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function EventsPage({ searchParams }: PageProps) {
  const events = await getEvents(await searchParams);

  return (
    <div className="flex relative">
      <div className="p-6 pt-28 flex-grow">
        <EventsList events={events} />
      </div>
      <div className="fixed top-0 right-0 mt-20 mr-10">
        <Calendar></Calendar>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
