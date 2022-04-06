import React from "react";
import Switcher from "@/components/Switcher";
import Input, { InputType } from "@/components/Input";

enum CountType { Day = '0', Month = '1', Year = '2', Hour = '3', Minute = '4', Second = '5', Week = '6' }
enum FieldType {
    isFloatCountdown,
    isSyncWithServer,
    customDate,
    countBy,
    background
}

const countTypeOptions = Object.keys(CountType).map(key => ({
    value: CountType[key],
    label: key
}));

interface IState {
    isFloatCountdown: boolean;
    isSyncWithServer: boolean;
    customDate: number;
    countBy: CountType;
    background: string;
}

export default class SettingSection extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isFloatCountdown: true,
            isSyncWithServer: false,
            customDate: Date.now(),
            countBy: CountType.Day,
            background: "Dark Sky"
        };
    }

    handleChange(field: FieldType, event: React.ChangeEvent<HTMLInputElement>) {
        switch (field) {
            case FieldType.isFloatCountdown:
                this.setState({ isFloatCountdown: event.target.checked });
                break;
            case FieldType.isSyncWithServer:
                this.setState({ isSyncWithServer: event.target.checked });
                break;
            case FieldType.customDate:
                this.setState({ customDate: event.target.valueAsNumber });
                break;
            case FieldType.countBy:
                this.setState({ countBy: event.target.value as CountType });
                break;
            case FieldType.background:
                this.setState({ background: event.target.value });
                break;
        }
    }

    render() {
        return (
            <div className="setting-section mt-10 font-nunito">
                <Switcher
                    title="Float countdown"
                    checked={this.state.isFloatCountdown}
                    onChange={this.handleChange.bind(this, FieldType.isFloatCountdown)} />
                <Switcher
                    title="Sync with server"
                    checked={this.state.isSyncWithServer}
                    onChange={this.handleChange.bind(this, FieldType.isSyncWithServer)} />
                <Input
                    title="Custom date"
                    value={this.state.customDate}
                    type={InputType.Date}
                    disabled={this.state.isSyncWithServer}
                    onChange={this.handleChange.bind(this, FieldType.customDate)} />
                <Input
                    title="Count by"
                    value={this.state.countBy}
                    type={InputType.Select}
                    disabled={false}
                    dataSet={countTypeOptions}
                    onChange={this.handleChange.bind(this, FieldType.countBy)} />
                <Input
                    title="Background"
                    value={this.state.background}
                    data={{ value: "Dark Sky", label: "Dark Sky" }}
                    type={InputType.Button}
                    onClick={() => { alert("Hello") }} />
            </div>
        );
    }
}