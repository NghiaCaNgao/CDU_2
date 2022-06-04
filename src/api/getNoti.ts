import { NotificationItem, ResponseNotificationData } from "./def"
import { getAbsoluteURL } from "./common";

const Host = getAbsoluteURL("/data/notification.json");

/* Get general notification from server
* @returns {Promise<NotificationItem[]>}: The notification list or empty array if error
*/
export async function getNotification(): Promise<NotificationItem[]> {
    try {
        const response = await fetch(Host, {
            method: "GET",
            mode: "cors", // for external requests (avoid CORS error)
        });
        const data: ResponseNotificationData = await response.json();
        console.log(data);
        if (data) return data.data;
        else throw new Error("Invalid response data");
    }
    catch (err) {
        console.log(err);
        return [];
    }
}