import { Paper } from "@/lib/types/paper";
import PaperCard from "./PaperCard";
import PapersFilters from "../PapersFilters/PapersFilters";
import EmptyState from "@/app/components/EmptyState/EmptyState";

interface Props {
  papers: Paper[];
}

export function PapersList({ papers }: Props) {
  return (
    <div className="flex gap-14">
      <PapersFilters />
      {papers.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full p-6">
          {papers.map((paper, index) => (
            <PaperCard key={index} paper={paper} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No existen ponencias disponibles de momento"
          description="Espere con ansias a nuevas ponencias"
        />
      )}
    </div>
  );
}
