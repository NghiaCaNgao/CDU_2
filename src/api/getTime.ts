import { Property } from "./def";
const Host = "https://raw.githubusercontent.com/NghiaCaNgao/CDU_2/main/data/data.json";

interface Event {
    id: string;
    title: string;
    description: string;
    end_time: number;
}
interface ResponseData {
    end_time: number;
    events: Event[];
}

const DEFAULT_TIME = Date.now() + 1000 * 60 * 60 * 24 * 7; // 1 week from now

export async function getTime(prevAttr?: Property): Promise<number> {
    const res = await fetch(Host, {
        method: "GET",
        mode: "cors",
    });
    const data: ResponseData = await res.json();
    if (data) {
        if (prevAttr && prevAttr.yearBornID)
            return data.events.find(e => e.id === prevAttr.yearBornID).end_time || data.end_time;
        return data.end_time;
    }
    else if (prevAttr && prevAttr.finishDate) return prevAttr.finishDate;
    else return DEFAULT_TIME;
}