import Notification from "./notification";
import Configurations from "./config";
import { CountType } from "@/api/def";
import { EventEmitType } from "./common";
import { calcTime } from "@/api/calcTime";
import { emitCountdownChanged } from "./common";
import { getTime } from "@/api/getTime";

// const IndexPath = chrome.runtime.getURL("index.html");
const HomePagePath = "https://github.com/NghiaCaNgao/CDU_2";
const SplashPagePath = "index.html#/splash";

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
    configData.finishDate = await getTime(configData); // Update finish date
    config.set(configData);
    await config.save();
}

function setAutoSync() {
    chrome.alarms.create(
        "auto sync",
        {
            periodInMinutes: 3 * 60, // 3 hours
            when: Date.now() + 3 * 60 * 1000 // After install 3 minutes

            // For check
            // periodInMinutes: 1,
            // when: Date.now() + 10 * 1000 // After install 1 minutes
        },
    );
}

function setAutoShowBadge() {
    chrome.alarms.create(
        "auto show badge",
        {
            periodInMinutes: 1, // 1 minutes
            when: Date.now() // Right now
        },
    );
}

// calc time left
async function calcTimeLeft(): Promise<string> {
    const config = new Configurations();
    await config.load();
    let { finishDate, countBy } = config.get();
    if (countBy == CountType.Second ||
        countBy == CountType.Minute ||
        countBy == CountType.Hour) {
        countBy = CountType.Day;
    }

    const stringBadge = calcTime(countBy, finishDate, " ");
    if (stringBadge.length > 4)
        return "99+";
    else
        return stringBadge;
}

chrome.runtime.onInstalled.addListener(async details => {
    await Notification.clear()
    // Create new data for the first installation times
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        await Configurations.clear();
        setAutoSync();
        setAutoShowBadge();
        createTab(SplashPagePath);

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
        setAutoShowBadge();
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

// Handle alarm
chrome.alarms.onAlarm.addListener((alarms) => {
    if (alarms.name === "auto sync") {
        updateSyncTime();
    }
    else if (alarms.name === "auto show badge") {
        calcTimeLeft().then(timeLeft => {
            chrome.action.setBadgeText({ text: timeLeft });
        });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.eventEmitType === EventEmitType.ALL) {
        sendResponse({ message: "Hello" });
        calcTimeLeft().then(timeLeft => {
            console.log(timeLeft);
            chrome.action.setBadgeText({ text: timeLeft });
        });
    }
});

// Create context menu
chrome.contextMenus.removeAll();
createNormalContextMenu("set_background", "Set as background");