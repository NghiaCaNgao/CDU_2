import { CountType } from './countType';

export function calcTime(format: CountType, endTime: number): string {
    const now = new Date();
    const finish = new Date(endTime);
    const time = finish.getTime() - now.getTime();

    if (time < 0) return "Time up";

    switch (format) {
        case CountType.Day:
            return `${time / (1000 * 60 * 60 * 24)}-D`;
        case CountType.Month:
            return `${time / (1000 * 60 * 60 * 24 * 30)}-M`;
        case CountType.Year:
            return `${time / (1000 * 60 * 60 * 24 * 30 * 12)}-Y`;
        case CountType.Hour:
            return `${time / (1000 * 60 * 60)}-H`;
        case CountType.Minute:
            return `${time / (1000 * 60)}-M`;
        case CountType.Second:
            return `${time / 1000}-S`;
        case CountType.Week:
            return `${time / (1000 * 60 * 60 * 24 * 7)}-W`;
        default:
            return ""
    }
}