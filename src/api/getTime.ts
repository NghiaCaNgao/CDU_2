import axios from "axios";

const Host = "https://raw.githubusercontent.com/NghiaCaNgao/CDU_2/main/data/data.json";

interface ResponseData {
    end_time: number;
}

async function getTime2(): Promise<number> {
    const res = await fetch(Host, {
        method: "GET",
        mode: "cors",
    });
    const txt = await res.json();
    if (txt && txt.end_time) return txt.end_time;
}

export async function getTime(): Promise<number> {
    return axios.get(Host)
        .then(res => {
            const data: ResponseData = res.data;
            return data.end_time;
        })
        .catch(async (err) => {
            console.log(err);
            const data = await getTime2();
            if (data === 0)
                return Date.now();
            else return data;
        });
}