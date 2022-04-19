import { Property } from "@/api/def";
export enum EventEmitType {
    TEXT_COLOR = "cg-color",
    ALL = "cg-all"
}

export function emitCountdownChanged(eventEmitType?: EventEmitType, property?: Property) {
    chrome.tabs.query({ url: ["https://*/*", "http://*/*"] }, (tabs) => {
        console.log(tabs.map((tab) => tab.url));

        tabs.forEach((tab) => {
            chrome.tabs.sendMessage(tab.id, {
                eventEmitType: eventEmitType || EventEmitType.ALL,
                property: property
            }, function (data: any) {
                console.log("Send message to all tabs");
                console.log(data);
            });
        });
    });
    chrome.runtime.sendMessage({ eventEmitType: eventEmitType || EventEmitType.ALL });
}

export function emitChangeFromInject(eventEmitType: EventEmitType) {
    chrome.runtime.sendMessage({ eventEmitType: eventEmitType });
}