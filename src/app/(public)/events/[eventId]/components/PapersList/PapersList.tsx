import { Paper } from "@/lib/types/paper";
import PaperCard from "./PaperCard";
import PapersFilters from "../PapersFilters/PapersFilters";
import EmptyState from "@/app/components/EmptyState/EmptyState";

interface Props {
  papers: Paper[];
}

export function PapersList({ papers }: Props) {
  return (
    <div className="flex justify-center gap-6">
      <div className="hidden lg:flex w-[600px]">
        <PapersFilters />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ponencias</h2>
        {papers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {papers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No existen ponencias disponibles de momento"
            description="Espere con ansias a nuevas ponencias"
          />
        )}
      </div>
    </div>
  );
}
