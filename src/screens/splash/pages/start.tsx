import Configurations from "@/extensions/config";
import React from "react";
import InfoButton from "../components/InfoButton";
import { emitChangeFromInject, EventEmitType } from "@/extensions/common";
import { getTime } from "@/api/getTime";
import { getEvent } from "@/api/getEvent";
import { EventType } from "@/api/def";
interface IState {
    yearBornID: string;
    yearBornList: EventType[];
}

export default class FinishPage extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            yearBornID: "yb-2k4",
            yearBornList: []
        }
    }

    async handleChangeInfoButton(yearBornID: string) {
        const config = new Configurations();
        await config.load();
        config.setByKey("yearBornID", yearBornID);
        config.setByKey("finishDate", await getTime(config.get()));
        await config.save();
        emitChangeFromInject(EventEmitType.ALL);
        this.setState({ yearBornID });
    }

    async componentDidMount(): Promise<void> {
        const config = new Configurations();
        await config.load();
        const c = config.get();
        const e = await getEvent();
        this.setState({
            yearBornID: c.yearBornID,
            yearBornList: e
        });
    }

    render() {
        return (
            <div className="flex overflow-hidden w-full h-full">
                <div className="bg-[#eddda2] w-64 rounded-2xl shadow-sm m-3 p-3 flex flex-none flex-col justify-end items-center">
                    <div className="m-3 my-8">
                        <h1 className="font-lexend text-2xl font-semibold text-white">Getting started</h1>
                        <p className="font-lexend text-sm font-normal text-white mt-3">Start config something to initial app</p>
                    </div>
                    <img className="my-12" src="./images/items/love1.png" alt="deco"></img>
                    <a href="#/splash/finish"
                        className="my-5 font-lexend font-bold p-3 py-1 text-white bg-blue-500 hover:bg-blue-400 rounded-md shadow-md transition-all">Finish</a>
                </div>
                <div className="p-14 shrink">
                    <div>
                        <h1 className="font-lexend font-medium text-gray-700 text-3xl">Choose your birth year</h1>
                        <p className="font-lexend font-light text-gray-500 text-sm mt-2">We use this to calculate the year you will take part in National High School Exam</p>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center">
                        {this.state.yearBornList.map(item => (
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
        )
    }
}