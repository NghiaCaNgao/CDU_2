import React from "react";
import { CountType } from "@/api/def";
import { BackgroundType } from "@/api/def";
import { calcTime } from "@/api/calcTime";
import "../index.scss";

interface IProps {
    background: BackgroundType
    countType: CountType
    finishDate: number
    textColor: string
}

export default class CountdownCard extends React.Component<IProps, {}> {
    render() {
        return (
            <div className="card-countdown p-3 m-3 rounded-2xl bg-white drop-shadow-xl relative z-10">
                <div
                    style={{
                        backgroundImage: `url(${this.props.background.url})`,
                        color: this.props.textColor
                    }}
                    className="container background p-3 rounded-2xl h-40 flex items-center justify-center">
                    <h1 className="font-lexend font-bold text-7xl text-shadow truncate">{calcTime(this.props.countType, this.props.finishDate)}</h1>
                </div>
            </div>
        )
    }
}