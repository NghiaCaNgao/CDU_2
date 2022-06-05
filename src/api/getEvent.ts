import { ResponseTimeData, EventType } from "./def";
import { getAbsoluteURL } from "./common";

const Host = getAbsoluteURL("/data/data.json");

/*
* Get Time events from server
* @returns {Promise<EventType[]>}: The event list or empty array if error
*/
export async function getEvent(): Promise<EventType[]> {
    try {
        const response = await fetch(Host, {
            method: "GET",
            mode: "cors", // for external requests (avoid CORS error)
        });

        const data: ResponseTimeData = await response.json();
        if (data) return data.events;
        else throw new Error("Invalid response data");
    } catch (error) {
        console.log(error);
        return [];
    }
}