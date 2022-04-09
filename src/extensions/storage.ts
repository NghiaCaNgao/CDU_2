// Return the value of the given key from the storage
async function get(keys: string | string[]): Promise<object> {
    return chrome.storage.sync.get(keys);
}

// Set the value of the given key in the storage
async function set(data: object): Promise<void> {
    return chrome.storage.sync.set(data);
}

// Clear all the data in the storage and set default data to it
async function clear(): Promise<void> {
    chrome.storage.sync.clear();
}

const Storage = {
    get,
    set,
    clear
}

export default Storage;