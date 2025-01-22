import React from "react";
import { EventInfo } from "./components/EventInfo/EventInfo";
import { PapersList } from "./components/PapersList/PapersList";
import { getEvent } from "@/lib/services/events";
import { getEventPapers } from "@/lib/services/papers";
import type { SearchParams } from "@/lib/types/searchParams";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { routes } from "@/lib/routes/routes";

export default async function PapersPage({
  params,
  searchParams,
}: {
  params: Promise<{ eventId: string }>;
  searchParams: SearchParams;
}) {
  const eventId = (await params).eventId; // event id
  // get the event by id
  const event = await getEvent(eventId);
  const papers = await getEventPapers(+eventId, searchParams);

  return (
    <div className="container mx-auto pt-28">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <Button variant="outline" className="mb-4 flex items-center">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          <Link href={routes.events.path}>Volver a los eventos</Link>
        </Button>
        <h1 className="text-3xl font-bold">Evento y Ponencias</h1>
      </div>
      <EventInfo event={event} />
      <h2 className="text-2xl font-semibold mb-4">Ponencias</h2>
      <PapersList papers={papers} />
    </div>
  );
}
