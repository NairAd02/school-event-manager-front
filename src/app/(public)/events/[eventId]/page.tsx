import React from "react";
import { getEvent } from "@/lib/services/events";
import { getEventPapers } from "@/lib/services/papers";
import type { SearchParams } from "@/lib/types/searchParams";
import EventDetails from "./components/EventDetails/EventDetails";
import NavigationButton from "@/components/generals/navigation-button";
import { ArrowLeftIcon } from "lucide-react";
import { routes } from "@/lib/routes/routes";

export default async function PapersPage({
  params,
  searchParams,
}: {
  params: Promise<{ eventId: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const eventId = (await params).eventId; // event id
  // get the event by id
  const event = await getEvent(eventId);
  const papers = await getEventPapers(+eventId, await searchParams);

  return (
    <div className="container mx-auto pt-28 flex flex-col gap-4 min-h-screen p-6">
      <NavigationButton href={routes.events.path} className="w-auto">
        <div className="flex gap-2 items-center justify-center">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Volver a los eventos
        </div>
      </NavigationButton>
      <EventDetails event={event} papers={papers} />
    </div>
  );
}
