import Storage from "./storage";
import { Property, CountType } from "@/api/def";
import { getTime } from "@/api/getTime";
import { BackgroundImageList } from "@/screens/popup/components/SelectBackground";
import { getDefaultAppData } from "@/api/common";
export default class Configurations {
    private data: Property;
    constructor() {
        this.data = getDefaultAppData();
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
        // TODO: Clear key in storage
        const finishDate = await getTime();
        this.data = getDefaultAppData(finishDate);
    }

    async save(): Promise<void> {
        await Storage.set({ "config": this.data });
    }

    static async clear() {
        const config = new Configurations();
        await config.resetData();
    }
}