import React from "react";
import { CountType, FieldType, Property } from "@/api/def";
import Switcher from "@/components/Switcher";
import Input, { InputType } from "@/components/Input";
import SelectBackground from "./SelectBackground";
import { BackgroundType } from "@/api/def";

const countTypeOptions = Object.keys(CountType).map(key => ({
    value: CountType[key],
    label: key
}));

interface IProps {
    data?: Property;
    onChange?: (field: FieldType, event: any) => void;
}

export default class SettingSection extends React.Component<IProps, {}> {
    handleChange(field: FieldType, event: React.ChangeEvent<HTMLInputElement> | BackgroundType) {
        this.props.onChange && this.props.onChange(field, event);
    }

    render() {
        return (
            <div className="setting-section m-3 mt-5 font-nunito">
                <div className="relative z-10">
                    <Switcher
                        title="Float countdown"
                        checked={this.props.data.isFloatCountdown}
                        onChange={this.handleChange.bind(this, FieldType.isFloatCountdown)} />
                    <Switcher
                        title="Sync with server"
                        checked={this.props.data.isSyncWithServer}
                        onChange={this.handleChange.bind(this, FieldType.isSyncWithServer)} />
                    <Input
                        title="Custom date"
                        value={this.props.data.finishDate}
                        type={InputType.Date}
                        disabled={this.props.data.isSyncWithServer}
                        onChange={this.handleChange.bind(this, FieldType.finishDate)} />
                    <Input
                        title="Count by"
                        value={this.props.data.countBy}
                        type={InputType.Select}
                        disabled={false}
                        dataSet={countTypeOptions}
                        onChange={this.handleChange.bind(this, FieldType.countBy)} />
                    <Input 
                        title= "Text color"
                        value={this.props.data.textColor}
                        type={InputType.Color}
                        disabled={false}
                        onChange={this.handleChange.bind(this, FieldType.textColor)} />
                </div>
                <SelectBackground
                    background={this.props.data.background}
                    onChange={this.handleChange.bind(this, FieldType.background)} />
            </div>
        );
    }
}

export { FieldType };