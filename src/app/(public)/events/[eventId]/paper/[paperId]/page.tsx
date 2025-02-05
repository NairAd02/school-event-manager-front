import React from "react";
import { getPaper } from "@/lib/services/papers";
import { PaperDetailsContent } from "./components/PaperDetails/PaperDetailsConent";
import NavigationButton from "@/components/generals/navigation-button";
import { ArrowLeftIcon } from "lucide-react";
import { routes } from "@/lib/routes/routes";

export default async function PaperDetailsPage({
  params,
}: {
  params: Promise<{ paperId: string; eventId: string }>;
}) {
  const paperId = (await params).paperId; // paper id
  const eventId = (await params).eventId;
  // get the paper by id
  const paper = await getPaper(paperId);

  return (
    <div className="flex flex-col gap-4 pt-28 min-h-screen bg-gray-100 p-6">
      <NavigationButton href={routes.event(eventId).path} className="w-auto">
        <div className="flex gap-2 items-center justify-center">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Volver al evento
        </div>
      </NavigationButton>
      <PaperDetailsContent paper={paper} />
    </div>
  );
}
