import React from "react";
import { CountType } from "@/api/countType";
import { BackgroundType } from "./SelectBackground";
import { calcTime } from "@/api/calcTime";
import "../index.scss";

interface IProps {
    background: BackgroundType
    countType: CountType
    finishDate: number
}

export default class CountdownCard extends React.Component<IProps, {}> {
    render() {
        return (
            <div className="card-countdown p-3 m-3 rounded-2xl bg-white drop-shadow-xl">
                <div style={{ backgroundImage: `url(${this.props.background.url})` }} className="container background p-3 rounded-2xl h-40 flex items-center justify-center">
                    <h1 className="font-lexend font-bold text-7xl text-white shadow-2xl">{calcTime(this.props.countType, this.props.finishDate)}</h1>
                </div>
            </div>
        )
    }
}