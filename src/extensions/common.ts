import { Property } from "@/api/def";
export enum EventType {
    TEXT_COLOR = "cg-color",
    ALL = "cg-all"
}

export function emitCountdownChanged(eventType?: EventType, property?: Property) {
    chrome.tabs.query({ url: ["https://*/*", "http://*/*"] }, (tabs) => {
        console.log(tabs.map((tab) => tab.url));

        tabs.forEach((tab) => {
            chrome.tabs.sendMessage(tab.id, {
                eventType: eventType || EventType.ALL,
                property: property
            }, function (data: any) {
                console.log("Send message to all tabs");
                console.log(data);
            });
        });
    });
    chrome.runtime.sendMessage({ eventType: eventType || EventType.ALL });
}

export function emitChangeFromInject(eventType: EventType) {
    chrome.runtime.sendMessage({ eventType: eventType });
}