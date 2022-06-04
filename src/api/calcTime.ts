import { CountType } from './def';

/*
* Calculate time left and return formatted string
* @param 
    format: CountType - The type of countdown: (by day, month,...)
    endTime: number - The end time of the countdown
    delimiter: string - The delimiter between the time parts
@ returns {string}: The formatted string
*/

export function calcTime(format: CountType, endTime: number, delimiter: string = "-"): string {
    const now = new Date();
    const time = endTime - now.getTime();

    if (time < 0) return "Done";

    const formatNumber = new Intl.NumberFormat();
    switch (format) {
        case CountType.Second:
            return `${formatNumber.format(Math.floor(time / 1000))}${delimiter}s`;
        case CountType.Minute:
            return `${formatNumber.format(Math.floor(time / (1000 * 60)))}${delimiter}m`;
        case CountType.Hour:
            return `${formatNumber.format(Math.floor(time / (1000 * 60 * 60)))}${delimiter}h`;
        case CountType.Day:
            return `${formatNumber.format(Math.floor(time / (1000 * 60 * 60 * 24)))}${delimiter}D`;
        case CountType.Week:
            return `${formatNumber.format(Math.floor(time / (1000 * 60 * 60 * 24 * 7)))}${delimiter}W`;
        case CountType.Month:
            return `${formatNumber.format(Math.floor(time / (1000 * 60 * 60 * 24 * 30)))}${delimiter}M`;
        case CountType.Year:
            return `${formatNumber.format(Math.floor(time / (1000 * 60 * 60 * 24 * 30 * 12)))}${delimiter}Y`;
        default:
            return ""
    }
}