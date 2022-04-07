import React from "react";
import { ReactComponent as UpdateIcon } from "@/assets/icons/arrowcircleup.svg";
import { ReactComponent as ImportantIcon } from "@/assets/icons/flag3.svg";
import "./noti.scss";

interface IProps {
    title: string;
    description: string;
    type: "update" | "important";
}

export default class NotiIcon extends React.Component<IProps, {}> {
    render() {
        return (
            <div className={"noti-item flex items-center rounded-xl px-3 py-2 transition-all cursor-pointer " + (this.props.type === "update" ? "hover:bg-violet-50" : "hover:bg-yellow-50")}>
                <div className={"noti-item__icon h-10 w-10 flex items-center justify-center rounded-full " + ((this.props.type === "update") ? "bg-violet-100" : "bg-yellow-100")}>
                    {(this.props.type === "update")
                        ? <UpdateIcon className="stroke-violet-200" />
                        : <ImportantIcon className="stroke-yellow-200" />}
                </div>
                <div className="flex flex-col pl-3">
                    <div className={"font-lexend font-bold text-lg " + ((this.props.type === "update") ? "text-violet-400" : "text-yellow-400")}>{this.props.title}</div>
                    <div className="font-nunito font-semibold text-sm text-gray-600 ">{this.props.description}</div>
                </div>
            </div>
        )
    }
}