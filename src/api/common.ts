import { Property } from "./def";
import { BackgroundImageList } from "@/screens/popup/components/SelectBackground";

export function getDefaultAppData(finishDate?: number): Property {
    return {
        isFloatCountdown: true,
        isSyncWithServer: true,
        finishDate: finishDate || (new Date()).getTime() + 7 * 24 * 60 * 60 * 1000, // 1 week from now
        countBy: "0",
        background: BackgroundImageList[0],
        textColor: "#ffffff",
        yearBornID: "yb-2k4"
    } as Property
}