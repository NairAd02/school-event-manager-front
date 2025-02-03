import  {Event}  from "./event";

export interface MonthArray{
    january: Array<Event>,
    february: Array<Event>,
    march: Array<Event>,
    april: Array<Event>,
    may: Array<Event>,
    june: Array<Event>,
    july: Array<Event>,
    august: Array<Event>,
    september: Array<Event>,
    october: Array<Event>,
    november: Array<Event>,
    december: Array<Event>,
}

export class EventMatrix{
    readonly monthMatrix: MonthArray;

    constructor(eventList:Array<Event>){
        this.monthMatrix=this.splitEvent(eventList)
        this.sort()
    }


    private splitEvent(eventList: Event[]): MonthArray {
        //initialize dynamically
        const monthMatrix: MonthArray = {
            january:[],
            february:[],
            march:[],
            april: [],
            may:[],
            june:[],
            july:[],
            august:[],
            september:[],
            october:[],
            november:[],
            december:[]
        }
        console.log(monthMatrix)
        const monthNames: Array<string> = Object.keys(monthMatrix);
        eventList.forEach((event:Event)=>{
            const date: Date = new Date(event.fecha);
            const month: number = date.getMonth();
            monthMatrix[monthNames[month] as keyof MonthArray].push(event);
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