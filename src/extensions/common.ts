export function emitCountdownChanged() {
    chrome.tabs.query({ url: ["https://*/*", "http://*/*"] }, (tabs) => {
        console.log(tabs);
        console.log(tabs.map((tab) => tab.url));

        tabs.forEach((tab) => {
            chrome.tabs.sendMessage(tab.id, {
                type: "countdown-changed"
            }, function (data: any) {
                console.log("Send message to all tabs");
                console.log(data);
            });
        });
    });
}