"use server";
import { buildQueryParams, QueryParamsURLFactory } from "../request";
import { IQueryable } from "../types/filters";
import { Paper } from "../types/paper";
import { SearchParams } from "../types/searchParams";
const papersPath = "ponencias/";
const papersTag = "ponencias";
export const getEventPapers = async (
  eventId: number,
  params: SearchParams
): Promise<Paper[]> => {
  const query: IQueryable = buildQueryParams(params);
  const queryObject = new QueryParamsURLFactory(
    query,
    `${process.env.NEXT_PUBLIC_API_URL}${papersPath}evento/${eventId}/`
  );
  const url = queryObject.build();
  const response = await fetch(url, {
    next: {
      tags: [papersTag],
    },
  });

  if (!response.ok) {
    console.log(response);
    throw new Error("Error in fetching event papers");
  }

  return await response.json();
};
