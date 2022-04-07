import React from "react";
import "../index.scss";

export default class CountdownCard extends React.Component {
    render() {
        return (
            <div className="card-countdown p-3 m-3 rounded-2xl bg-white drop-shadow-xl">
                <div className="container background p-3 rounded-2xl h-40 flex items-center justify-center">
                    <h1 className="font-lexend font-bold text-7xl text-white shadow-2xl">66-D</h1>
                </div>
            </div>
        )
    }
}