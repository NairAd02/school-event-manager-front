import  {Event}  from "./event";
import { MONTHS } from "../utils";

export interface MonthArray {
  [key: string]: Array<Event>;
}


export class EventMatrix{
    readonly monthMatrix: MonthArray;

    constructor(eventList:Array<Event>){
        this.monthMatrix=this.splitEvent(eventList)
        this.sort()
    }


    private splitEvent(eventList: Event[]): MonthArray {
        //initialize dynamically
        const monthMatrix: MonthArray = MONTHS.reduce((acc, month) => {
            acc[month.toLowerCase()] = [];
            return acc;
          }, {} as MonthArray);
        eventList.forEach((event: Event) => {
            const date: Date = new Date(event.fecha);
            const month: string = MONTHS[date.getMonth()].toLowerCase();
            monthMatrix[month].push(event);
        });
        return monthMatrix;
    }

    private sort(){
        const comparison = (a:Event, b:Event) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
        for (const month in this.monthMatrix) {
            if (this.monthMatrix.hasOwnProperty(month)) {
                this.monthMatrix[month as keyof MonthArray].sort(comparison);
            }
        }
    }
}