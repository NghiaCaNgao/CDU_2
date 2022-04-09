import Storage from "./storage";
import { Property, CountType } from "@/api/def";
import { getTime } from "@/api/getTime";
import { BackgroundImageList } from "@/screens/popup/components/SelectBackground";

export default class Configurations {
    private data: Property;
    constructor() {
        this.data = {
            isFloatCountdown: false,
            isSyncWithServer: false,
            finishDate: Date.now(),
            countBy: CountType.Day,
            background: BackgroundImageList[0]
        }
    }

    async load(): Promise<void> {
        const data = (await Storage.get("config"))["config"] as Property;

        if (data) {
            this.data = data;
        } else {
            this.resetData();
        }
    }

    get(): Property {
        return this.data;
    }

    set(data: Property) {
        this.data = data;
    }

    async resetData() {
        await this.clear();
        this.save();
    }

    async clear(key?: string): Promise<void> {
        const finishDate = await getTime();
        this.data = {
            isFloatCountdown: true,
            isSyncWithServer: true,
            finishDate: finishDate,
            countBy: CountType.Day,
            background: BackgroundImageList[0]
        }
    }

    async save(): Promise<void> {
        await Storage.set({ "config": this.data });
    }

    static async clear() {
        const config = new Configurations();
        await config.resetData();
    }
}