import axios from "axios";

const Host = "https://raw.githubusercontent.com/NghiaCaNgao/CDU_2/main/data/data.json";

interface ResponseData {
    end_time: number;
}

const DEFAULT_TIME = Date.now() + 1000 * 60 * 60 * 24 * 7; // 1 week from now

async function getTime2(): Promise<number> {
    const res = await fetch(Host, {
        method: "GET",
        mode: "cors",
    });
    const data = await res.json();
    if (data && data.end_time) return data.end_time;
    else return 0;
}

export async function getTime(prevTime?: number): Promise<number> {
    return axios.get(Host)
        .then(res => {
            const data: ResponseData = res.data;
            console.log(data);
            return data.end_time;
        })
        .catch(async (err) => {
            // console.log(err);
            const data = await getTime2();
            if (data === 0) {
                if (prevTime) return prevTime;
                else return DEFAULT_TIME;
            }
            else return data;
        });
}