import Notification from "./notification";
import Configurations from "./config";
// import { calcTime } from "@/api/calcTime";
import { emitCountdownChanged } from "./common";
import { getTime } from "@/api/getTime";

// const IndexPath = chrome.runtime.getURL("index.html");
const HomePagePath = "https://github.com/NghiaCaNgao/CDU_2";

// Create new tab with given url
function createTab(url: string) {
    chrome.tabs.create({
        active: true,
        url: url
    });
}

// Create new context menu
function createNormalContextMenu(id: string, title: string) {
    chrome.contextMenus.create({
        contexts: ["image"],
        type: "normal",
        documentUrlPatterns: ["<all_urls>"],
        id: id,
        title: title,
    });
}

async function setBackground(url: string) {
    const config = new Configurations();
    await config.load();
    let configData = config.get();
    configData.background = {
        id: "custom-user-background",
        url: url,
        name: "Custom Background"
    }
    config.set(configData);
    await config.save();
    emitCountdownChanged();
}

async function updateSyncTime() {
    const config = new Configurations();
    await config.load();
    let configData = config.get();
    configData.finishDate = await getTime();
    config.set(configData);
    await config.save();
}

function setAutoSync() {
    chrome.alarms.create(
        "auto sync",
        {
            periodInMinutes: 3 * 60,
            when: Date.now() + 3 * 60 * 1000 // After install 3 minutes

            // For check
            // periodInMinutes: 1,
            // when: Date.now() + 10 * 1000 // After install 1 minutes
        },
    );
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
        setAutoSync();

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

// handle context menu click
chrome.contextMenus.onClicked.addListener(async info => {
    switch (info.menuItemId) {
        case "set_background": {
            setBackground(info.srcUrl);
            break;
        }
    }
});

// Create context menu
chrome.contextMenus.removeAll();
createNormalContextMenu("set_background", "Set as background");

chrome.alarms.onAlarm.addListener(updateSyncTime);