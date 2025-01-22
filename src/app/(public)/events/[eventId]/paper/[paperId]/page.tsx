import React from "react";
import { getPaper } from "@/lib/services/papers";
import { PaperDetailsContent } from "./components/PaperDetails/PaperDetailsConent";

export default async function PaperDetailsPage({
  params,
}: {
  params: Promise<{ paperId: string }>;
}) {
  const paperId = (await params).paperId; // paper id
  // get the paper by id
  const paper = await getPaper(paperId);

  return (
    <div className="pt-28 min-h-screen bg-gray-100 p-6">
      <PaperDetailsContent paper={paper} />
    </div>
  );
}
