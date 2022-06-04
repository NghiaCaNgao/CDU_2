import { Property } from "./def";
import { BackgroundImageList } from "@/screens/popup/components/SelectBackground";

/*
* Get default configuration
* @returns {Promise<Property>}: The default configuration
* @param finishDate: The pre finish date that will be filled in the default configuration. 
                    If undefined, the default time will be set for 1 week from now.
*/

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

/*
* Get absolute URL from relative URL
* @param relativeURL: The relative URL
* @returns {string}: The absolute URL
*/

export function getAbsoluteURL(relativeURL: string): string {
    console.log(process.env["REACT_APP_MODE"]);
    const isProduction = process.env["REACT_APP_MODE"] == "production";

    const BaseDir = (isProduction)
        ? "https://raw.githubusercontent.com/NghiaCaNgao/CDU_2/main"
        : "https://raw.githubusercontent.com/NghiaCaNgao/CDU_2/splashscreen";

    return BaseDir + relativeURL;
}