import { Property, ResponseTimeData } from "./def";
const isProduction = false
const Host = (isProduction)
    ? "https://raw.githubusercontent.com/NghiaCaNgao/CDU_2/main/data/data.json"
    : "https://raw.githubusercontent.com/NghiaCaNgao/CDU_2/splashscreen/data/data.json"

const DEFAULT_TIME = Date.now() + 1000 * 60 * 60 * 24 * 7; // 1 week from now

export async function getTime(prevAttr?: Property): Promise<number> {
    const res = await fetch(Host, {
        method: "GET",
        mode: "cors",
    });
    const data: ResponseTimeData = await res.json();
    if (data) {
        if (prevAttr && prevAttr.yearBornID) {
            const event = data.events.find(e => e.id === prevAttr.yearBornID);
            return (event) ? event.end_time : data.end_time;
        }
        return data.end_time;
    }
    else if (prevAttr && prevAttr.finishDate) return prevAttr.finishDate;
    else return DEFAULT_TIME;
}