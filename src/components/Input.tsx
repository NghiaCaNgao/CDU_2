import React, { ReactNode } from "react";
import { ReactComponent as IconDate } from "@/assets/icons/calendar.svg";
import { ReactComponent as IconDropdown } from "@/assets/icons/chevrondown.svg";
import { ReactComponent as IconLink } from "@/assets/icons/link.svg";

import "./input.scss";

enum InputType { Text = "text", Select = "select", Date = "date", Button = "button" }

interface IProps {
    id?: string;
    title: string;
    value: string | number;
    type: InputType;
    disabled?: boolean;
    dataSet?: {
        label: string,
        value: string
    }[];
    data?: {
        label: string,
        value: string
    }
    onChange?: () => void;
    onClick?: () => void;
}

export default class Input extends React.Component<IProps, {}>{
    parseTime(date: number): string {
        const d = new Date(date);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    }

    renderText(): ReactNode {
        return (
            <div className="input__text">
                <input
                    id={this.props.id}
                    type={this.props.type}
                    defaultValue={this.props.value}
                    disabled={this.props.disabled}
                    onChange={this.props.onChange}
                >
                </input>
                <div className={"input__fake flex items-center justify-between px-3 " + ((this.props.disabled) ? "" : "active")}>
                    <span className={"font-normal font-bold " + ((this.props.disabled) ? "" : "active")}>
                        {this.parseTime(Number(this.props.value))}
                    </span>
                    <div>
                        {(this.props.type === InputType.Date)
                            ? <IconDate />
                            : null}
                    </div>
                </div>
            </div>
        )
    }

    renderSelect(): ReactNode {
        return (
            <div className="input__select">
                <select
                    id={this.props.id}
                    defaultValue={this.props.value}
                    disabled={this.props.disabled}
                    onChange={this.props.onChange}>
                    {(this.props.dataSet)
                        ? this.props.dataSet.map((item, index) => {
                            return (
                                <option key={index} value={item.value}>{item.label}</option>
                            )
                        })
                        : null}
                </select>
                <div className={"input__fake flex items-center justify-between px-3 " + ((this.props.disabled) ? "" : "active")}>
                    <span className={"font-normal font-bold " + ((this.props.disabled) ? "" : "active")}>
                        {this.props.dataSet.filter(item => item.value === this.props.value)[0].label}
                    </span>
                    <div>
                        {(this.props.type === InputType.Select)
                            ? <IconDropdown />
                            : null}
                    </div>
                </div>
            </div>

        )
    }

    renderButton(): ReactNode {
        return (
            <div className="input__button">
                <button
                    id={this.props.id}
                    disabled={this.props.disabled}
                    onClick={this.props.onClick}>
                </button>
                <div className={"input__fake flex items-center justify-between px-3 " + ((this.props.disabled) ? "" : "active")}>
                    <span className={"font-normal font-bold " + ((this.props.disabled) ? "" : "active")}>
                        {(this.props.data)
                            ? this.props.data.label
                            : null}
                    </span>
                    <div>
                        {(this.props.type === InputType.Button)
                            ? <IconLink />
                            : null}
                    </div>
                </div>
            </div>
        )
    }

    switchType(): ReactNode {
        switch (this.props.type) {
            case InputType.Text:
            case InputType.Date:
                return this.renderText();
            case InputType.Select:
                return this.renderSelect();
            case InputType.Button:
                return this.renderButton();
            default:
                return;
        }
    }

    render() {
        return (
            <div className="input flex justify-between items-center mx-3 my-4">
                <div className="input__title font-semibold text-gray-500">{this.props.title}</div>
                {this.switchType()}
            </div>
        )
    }
}

export { InputType };