import React from "react";
import EventCard from "./EventCard/EventCard";
import { Event } from "@/lib/types/event";
import { EventMatrix, MonthArray } from "@/lib/types/eventMatrix";
import { parse, isThisMonth } from "date-fns";
import { MONTHS } from "@/lib/utils";

interface Props {
  events: Event[];
}



function noEventsFoundedMessage(): React.ReactNode {
  return <p className="text-gray-400 italic">No events</p>;
}

function createMonthCards(months: Array<Event>) {
  const monthCards = months.map((monthEvent) => (
    <EventCard key={monthEvent.id} event={monthEvent}></EventCard>
  ));
  return (
    <div className="flex flex-wrap gap-5">
      {monthCards.length > 0 ? monthCards : noEventsFoundedMessage()}
    </div>
  );
}

function useMonthDetails(month: string, currentDate: Date, monthMatrix: MonthArray) {
  const isCurrentMonth: boolean = isThisMonth(
    parse(`${currentDate.getFullYear()}-${month}-01`, "yyyy-MMMM-dd", new Date())
  );
  const monthKey: string = month.toLowerCase();
  const monthList: Array<Event> = monthMatrix[monthKey as keyof MonthArray];

  return { isCurrentMonth, monthList };
}

function splitMonths(eventMatrix: EventMatrix) {
  const currentDate = new Date();
  const monthMatrix = eventMatrix.monthMatrix;

  return MONTHS.map((month) => {
    const { monthList } = useMonthDetails(month, currentDate, monthMatrix);
    const monthName = (
      <div
        id={month}
        className="text-center font-semibold border-r px-2 py-[150px] mb-4 m-5 flex items-center justify-center"
      >
        {month}
      </div>
    );
    const monthCardList = (
      <div className="flex-grow">
        {createMonthCards(monthList)}
      </div>
    );
    return (
      <div
        key={month}
        className="flex items-center border-b pb-4"
      >
        {monthName}
        {monthCardList}
      </div>
    );
  });
}

export default function EventsList({ events }: Props) {
  const eventMatrix = new EventMatrix(events);

  const monthSplitted = splitMonths(eventMatrix);
  return <div className="space-y-4">{monthSplitted}</div>;
}
