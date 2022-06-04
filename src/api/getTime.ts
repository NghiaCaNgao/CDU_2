import { Property, ResponseTimeData } from "./def";
import { getAbsoluteURL } from "./common";

const Host = getAbsoluteURL("/data/data.json");
const DEFAULT_TIME = Date.now() + 1000 * 60 * 60 * 24 * 7; // 1 week from now

/* Get finish time from server
* @returns {Promise<number>}: The finish time
* @param prevAttr:  The previous attribute that will be used to choose the finish time. 
                    If undefined, the default time will be used.
*/

export async function getTime(prevAttr?: Property): Promise<number> {
    try {
        const response = await fetch(Host, {
            method: "GET",
            mode: "cors", // for external requests (avoid CORS error)
        });

        const data: ResponseTimeData = await response.json();
        if (data) {
            if (prevAttr && prevAttr.yearBornID) {
                const event = data.events.find(e => e.id === prevAttr.yearBornID);
                return (event) ? event.end_time : data.end_time;
            }
            return data.end_time;
        }
        else throw new Error("Invalid response data");
    } catch (error) {
        console.log(error);
        return (prevAttr && prevAttr.finishDate) ? prevAttr.finishDate : DEFAULT_TIME;
    }
}