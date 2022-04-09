import { BackgroundType } from "@/screens/popup/components/SelectBackground";

export enum CountType { Day = '0', Month = '1', Year = '2', Hour = '3', Minute = '4', Second = '5', Week = '6' };
export enum FieldType {
    isFloatCountdown,
    isSyncWithServer,
    finishDate,
    countBy,
    background
}

export interface Property {
    isFloatCountdown: boolean;
    isSyncWithServer: boolean;
    finishDate: number;
    countBy: CountType;
    background: BackgroundType
}

export interface NotificationItem {
    id: number;
    type: "update"|"important";
    title: string;
    description: string;
}