import React from "react";
import InfoButton from "./components/InfoButton";
import "./index.scss";

const yearBorn = [
    { id: "yb-2004", title: "2k4", description: "2021-2022" },
    { id: "yb-2005", title: "2k5", description: "2022-2023" },
    { id: "yb-2006", title: "2k6", description: "2023-2024" },
    { id: "yb-2007", title: "2k7", description: "2024-2025" },
    { id: "yb-2008", title: "2k8", description: "2025-2026" },
    { id: "yb-2009", title: "2k9", description: "2026-2027" },
]

interface IState {
    yearBornID: string;
}

export default class Splash extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            yearBornID: "yb-2004"
        }
    }

    handleChangeInfoButton(yearBornID: string) {
        console.log("handleChangeInfoButton");
        this.setState({ yearBornID });
    }

    render() {
        return (
            <div className="splash-screen w-screen h-screen flex justify-center items-center">
                <div className="rounded-3xl shadow-md bg-white w-3/5 h-4/5 flex overflow-hidden">
                    <div className="side-view w-64 rounded-2xl shadow-md m-3 p-3 flex flex-none flex-col justify-end items-center">
                        <div className="m-3 my-10">
                            <h1 className="font-lexend text-2xl font-semibold text-blue-500">Getting started</h1>
                            <p className="font-lexend text-sm font-normal text-blue-400 mt-3">Start config something to initial app</p>
                        </div>
                        <img className="my-12" src="./images/items/love1.png" alt="deco"></img>
                        <button className="my-5 font-lexend font-bold p-3 py-1 text-white bg-blue-500 hover:bg-blue-400 rounded-md shadow-md transition-all">Finish</button>
                    </div>
                    <div className="p-14 shrink">
                        <div>
                            <h1 className="font-lexend font-medium text-gray-700 text-3xl">Choose your birth year</h1>
                            <p className="font-lexend font-light text-gray-500 text-sm mt-2">We use this to calculate the year you will take part in National High School Exam</p>
                        </div>
                        <div className="mt-14 flex flex-wrap justify-center">
                            {yearBorn.map(item => (
                                <InfoButton
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    checked={item.id === this.state.yearBornID}
                                    onClick={this.handleChangeInfoButton.bind(this, item.id)} />
                            ))}
                        </div>
                        <img src="./images/items/love2.png" alt="deco 2"></img>
                    </div>
                </div>
            </div>
        )
    }
}