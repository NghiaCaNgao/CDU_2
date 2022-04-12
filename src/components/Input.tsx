import React, { ReactNode } from "react";
import { ReactComponent as IconDate } from "@/assets/icons/calendar.svg";
import { ReactComponent as IconDropdown } from "@/assets/icons/chevrondown.svg";
import { ReactComponent as IconLink } from "@/assets/icons/link.svg";
import { ReactComponent as IconAttachment } from "@/assets/icons/attachment.svg";
import { ReactComponent as IconPin } from "@/assets/icons/pin2.svg";

import "./input.scss";

enum InputType {
    Text = "text",
    Select = "select",
    Date = "date",
    Button = "button",
    Color = "color",
}

interface IProps {
    id?: string;
    title?: string;
    value?: string | number;
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
    onChangeTextLink?: (url: string) => void;
}

export default class Input extends React.Component<IProps, {}>{
    formatDate(date: number): string {
        const d = new Date(date);
        return d.getFullYear() + '-' +
            ((d.getMonth() + 1 > 9) ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) + '-' +
            (d.getDate() > 9 ? d.getDate() : '0' + d.getDate());
    }

    //Emit event when click on fake select
    handleTextLinkChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.onChangeTextLink && this.props.onChangeTextLink(event.target.value as string);
    }

    renderText(): ReactNode {
        return (
            <div className="input__text flex items-center px-3 active">
                <input
                    id={this.props.id}
                    type="text"
                    value={this.props.value}
                    onChange={this.handleTextLinkChange.bind(this)}
                ></input>
                <div>
                    <IconAttachment />
                </div>
            </div>
        )
    }

    renderDate(): ReactNode {
        return (
            <div className="input__date transition-all">
                <input
                    id={this.props.id}
                    type={this.props.type}
                    defaultValue={this.formatDate(Number(this.props.value))}
                    disabled={this.props.disabled}
                    onChange={this.props.onChange}
                ></input>
                <div className={"input__fake flex items-center justify-between px-3 " + ((this.props.disabled) ? "" : "active")}>
                    <span className={"font-nunito font-semibold text-lg " + ((this.props.disabled) ? "" : "active")}>
                        {(new Date(this.props.value).toLocaleDateString("vi"))}
                    </span>
                    <div>
                        <IconDate />
                    </div>
                </div>
            </div>
        );
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
                    <span className={"font-nunito font-semibold text-lg " + ((this.props.disabled) ? "" : "active")}>
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
                <div className={"input__fake flex items-center justify-between px-3 transition-all " + ((this.props.disabled) ? "" : "active")}>
                    <span className={"font-nunito font-semibold text-lg truncate " + ((this.props.disabled) ? "" : "active")}>
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

    renderColor(): ReactNode {
        return (
            <div className="input__color transition-all">
                <input
                    id={this.props.id}
                    type="color"
                    defaultValue={this.props.value}
                    disabled={this.props.disabled}
                    onChange={this.props.onChange}
                ></input>
                <div className={"input__fake flex items-center justify-between px-3 " + ((this.props.disabled) ? "" : "active")}>
                    <span className={"font-nunito font-semibold text-lg " + ((this.props.disabled) ? "" : "active")}>
                        {(this.props.value)}
                    </span>
                    <div>
                        <IconPin />
                    </div>
                </div>
            </div>
        );
    }


    switchType(): ReactNode {
        switch (this.props.type) {
            case InputType.Date:
                return this.renderDate();
            case InputType.Text:
                return this.renderText();
            case InputType.Select:
                return this.renderSelect();
            case InputType.Button:
                return this.renderButton();
            case InputType.Color:
                return this.renderColor();
            default:
                return;
        }
    }

    render() {
        return (
            <div className="input flex justify-between items-center mx-3 my-4">
                <div className="input__title font-semibold text-gray-500 text-lg truncate">{this.props.title}</div>
                {this.switchType()}
            </div>
        )
    }
}

export { InputType };