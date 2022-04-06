import React from "react";
import "./switcher.scss";

interface IProps {
    title: string;
    checked: boolean;
    id?: string;
    onChange?: () => void;
}

export default class Switcher extends React.Component<IProps, {}> {
    render() {
        return (
            <div className="switcher flex justify-between mx-3 my-4">
                <div className="switcher__title font-semibold text-gray-500">{this.props.title}</div>
                <div className="switcher__switch">
                    <div className={"switcher__switch-fake " + ((this.props.checked) ? "active" : "")}>
                        <div className={"switcher__switch-fake__slider " + ((this.props.checked) ? "active" : "")}></div>
                        <input
                            id={this.props.id}
                            type="checkbox"
                            className="switcher__switch-input"
                            defaultChecked={this.props.checked}
                            onChange={this.props.onChange} />
                    </div>
                </div>
            </div>
        );
    }
}