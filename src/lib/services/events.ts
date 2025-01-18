"use server";
import { buildQueryParams, QueryParamsURLFactory } from "../request";
import { Event } from "../types/event";
import { IQueryable } from "../types/filters";
import { SearchParams } from "../types/searchParams";

const eventsPath = "eventos/";
const eventsTag = "eventos";
export const getEvents = async (params: SearchParams): Promise<Event[]> => {
  const query: IQueryable = buildQueryParams(params);
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const queryObject = new QueryParamsURLFactory(
    query,
    `${process.env.NEXT_PUBLIC_API_URL}${eventsPath}`
  );
  const url = queryObject.build();
  const response = await fetch(url, {
    next: {
      tags: [eventsTag],
    },
  });

  if (!response.ok) {
    console.log(response);
    throw new Error("Error in fetching events");
  }

  return await response.json();
};
