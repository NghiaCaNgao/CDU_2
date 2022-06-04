export enum CountType { Day = '0', Month = '1', Year = '2', Hour = '3', Minute = '4', Second = '5', Week = '6' };

export enum FieldType {
    isFloatCountdown,
    isSyncWithServer,
    finishDate,
    countBy,
    background,
    textColor,
    yearBornID
}

export interface BackgroundType {
    id: string;
    url: string;
    name: string;
}
export interface Property {
    isFloatCountdown: boolean;
    isSyncWithServer: boolean;
    finishDate: number;
    countBy: CountType;
    background: BackgroundType,
    textColor: string,
    yearBornID: string
}
export interface NotificationItem {
    id: number;
    type: "update"|"important";
    title: string;
    description: string;
}
export interface EventType {
    id: string;
    title: string;
    description: string;
    end_time: number;
}

export interface ResponseTimeData {
    end_time: number;
    events: EventType[];
}

export interface ResponseNotificationData{
    data: NotificationItem[];
}