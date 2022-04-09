import axios from "axios";
import { NotificationItem } from "./def"
const Host = "https://raw.githubusercontent.com/NghiaCaNgao/CDU_2/main/data/notification.json";

async function getNoti2(): Promise<NotificationItem[]> {
    try {
        const res = await fetch(Host, {
            method: "GET",
            mode: "cors",
        });
        return await res.json();
    }
    catch (err) {
        console.log(err);
        return [];
    }
}

export async function getNoti(): Promise<NotificationItem[]> {
    return axios.get(Host)
        .then(res => {
            const data: NotificationItem[] = res.data;
            return data;
        })
        .catch(async (err) => {
            console.log(err);
            return await getNoti2();
        });
}