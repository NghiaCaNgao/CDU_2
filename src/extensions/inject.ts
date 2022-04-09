import { calcTime } from "@/api/calcTime";
import { CountType, Property } from "@/api/def";
import Configurations from "./config";

var property: Property;
var interval: any;

// Make element draggable
function dragElement(el: HTMLElement) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function setUp() {
    const el = document.getElementById("c2u-text");
    const timeString = calcTime(property.countBy, property.finishDate, " ");
    if (el) {
        el.innerText = timeString;
    }
}
// Set update time left interval
function updateTimeLeft() {
    let intervalSpan: number = 0;
    switch (property.countBy) {
        case CountType.Day:
        case CountType.Month:
        case CountType.Year:
        case CountType.Week:
        case CountType.Hour:
            intervalSpan = 1000 * 60 * 60;
            break;
        case CountType.Minute:
            intervalSpan = 1000 * 60;
            break;
        case CountType.Second:
            intervalSpan = 1000;
            break;
    }
    interval = window.setInterval(setUp, intervalSpan);
}

function removeUpdateTimeLeft() {
    window.clearInterval(interval);
}

// Render the countdown
async function render({ timeString, backgroundURL }: { timeString: string, backgroundURL: string }) {
    const body = document.querySelector("body");
    const container = document.createElement("div");
    container.id = "c2u-container";
    container.style.backgroundImage = `url(${backgroundURL})`;
    container.innerHTML = `
        <div>
            <h1 class="c2u-text" id="c2u-text">${timeString}</h1>
        </div>
    `;
    dragElement(container);
    body.insertBefore(container, body.firstChild);
}

async function init() {
    if (document.getElementById("c2u-app")) return;
    const config = new Configurations();
    await config.load();
    property = config.get();
    if (property.isFloatCountdown) {
        const timeString = calcTime(property.countBy, property.finishDate, " ");
        const backgroundURL = property.background.url;
        updateTimeLeft();
        await render({ timeString, backgroundURL });
    }
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        // Remove the countdown if it exists
        document.getElementById("c2u-container")?.remove();

        // Remove the update time left interval
        removeUpdateTimeLeft();

        switch (request.type) {
            case "countdown-changed":
                init();
                break;
            default:
                break;
        }

        sendResponse({ data: request.type });
    });

init();