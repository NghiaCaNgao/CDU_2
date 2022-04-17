import React from "react";
import { ReactComponent as CheckedIcon } from "@/assets/icons/checkcircle.svg";

interface IProps {
    title: string;
    description: string;
    checked?: boolean;
    onClick?: () => void;
}

export default class InfoButton extends React.Component<IProps, {}>{
    render() {
        return (
            <div
                onClick={this.props.onClick}
                className={"box-border rounded-xl overflow-hidden w-36 p-2 cursor-pointer relative m-2 border-2 transition-all "
                    + ((this.props.checked) ? "bg-blue-100 border-blue-600" : "bg-gray-50 hover:bg-gray-100")}>
                <h1
                    className={"font-lexend text-center select-none text-3xl "
                        + ((this.props.checked) ? "text-blue-600 font-black" : "text-gray-500 font-bold")}>
                    {this.props.title}
                </h1>
                <p className={"font-lexend font-normal text-center select-none "
                    + ((this.props.checked ? "text-blue-500" : "text-gray-400"))}>
                    {this.props.description}
                </p>
                <CheckedIcon className={"absolute top-1 right-1 transition-all "
                    + ((this.props.checked) ? "opacity-1" : "opacity-0")} />
            </div>
        )
    }
}