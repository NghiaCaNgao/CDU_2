import Notification from "./notification";
import Configurations from "./config";
import { calcTime } from "@/api/calcTime";

// const IndexPath = chrome.runtime.getURL("index.html");
const HomePagePath = "https://github.com/NghiaCaNgao/CDU_2";

// Create new tab with given url
function createTab(url: string) {
    chrome.tabs.create({
        active: true,
        url: url
    });
}

// calc time left
// async function calcTimeLeft(): Promise<string> {
//     const config = new Configurations();
//     await config.load();
//     const { finishDate, countBy } = config.get();

//     const now = Date.now();
//     const timeLeft = finishDate - now;

//     if (timeLeft <= 0) {
//         return "done";
//     } else {
//         const stringBadge = calcTime(countBy, timeLeft);
//         if (stringBadge.length > 4)
//             return "99+";
//         else
//             return stringBadge;
//     }
// }

chrome.runtime.onInstalled.addListener(async details => {
    await Notification.clear()
    // Create new data for the first installation times
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        await Configurations.clear();

        // Create welcome notification for first time        
        await Notification.create(
            "c2u_welcome",
            {
                title: "Thanks for installing!",
                message: "Track your countdown easily and easily.",
            }
        );

    }

    // Show notification after updating
    else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
        await Notification.create(
            "c2u_update",
            {
                title: "Updated!",
                message: "Update successfully",
                buttons: [{
                    title: "Changelog"
                }]
            });
    }

    // On click notification
    chrome.notifications.onButtonClicked.addListener(
        (notificationId, buttonIndex) => {
            if (notificationId === "c2u_update" && buttonIndex === 0) {
                createTab(HomePagePath);
            }
        });
});