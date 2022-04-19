import { ResponseTimeData, EventType } from "./def";
const Host = "https://raw.githubusercontent.com/NghiaCaNgao/CDU_2/main/data/data.json";

export async function getEvent(): Promise<EventType[]> {
    const res = await fetch(Host, {
        method: "GET",
        mode: "cors",
    });
    const data: ResponseTimeData = await res.json();
    if (data)
        return data.events;
    else return [];
}