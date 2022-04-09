const IconPath = "./images/logo/48x.png";

// get all notification Ids
async function getIDs(): Promise<string[]> {
    return new Promise((resolve, reject) => {
        if (chrome.notifications) {
            chrome.notifications.getAll(notifications => {
                resolve(Object.keys(notifications));
            });
        } else {
            console.log("notifications not supported");

        }
    });
}


// Check if notification exists
async function hasID(notification_id: string) {
    const IDSet = new Set(await getIDs());
    return IDSet.has(notification_id);
}

// Clear one notification | array of notifications | all notifications
async function clear(notification_id?: string | string[]) {
    if (notification_id) {
        // Clear many notifications
        if (Array.isArray(notification_id))
            await Promise.all(notification_id.map(element => clear(element)));

        // Clear one notification
        else chrome.notifications.clear(notification_id);
    }
    // Clear all notifications
    else await clear(await getIDs());
}


// Create a new notification
async function create(id: string, notification_options: chrome.notifications.NotificationOptions) {
    // Check if notification exists then delete it and create a new one
    if (await hasID(id)) await clear(id);
    chrome.notifications.create(id, {
        type: "basic",
        iconUrl: IconPath,
        title: notification_options.title,
        message: notification_options.message,
        buttons: notification_options.buttons,
    });
}

const Notification = {
    create,
    clear,
    getIDs,
    hasID
}

export default Notification;