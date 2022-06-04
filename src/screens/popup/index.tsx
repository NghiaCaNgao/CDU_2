import React from "react";
import Configurations from "@/extensions/config";
import { CountType, Property } from "@/api/def";
import { getTime } from "@/api/getTime";
import { emitCountdownChanged, EventEmitType } from "@/extensions/common";
import { getDefaultAppData } from "@/api/common";
import { BackgroundType } from "@/api/def";

import HeaderPopup from "./components/HeaderPopup";
import CountdownCard from "./components/CountdownCard";
import Setting, { FieldType } from "./components/Setting";
// import FooterPopup from "./components/FooterPopup";

import "./index.scss";
export default class Popup extends React.Component<{}, Property> {
    constructor(props: any) {
        super(props);
        this.state = getDefaultAppData();
    }

    async loadAppData(isEmitEvent = true) {
        // Load data from extension storage
        const config = new Configurations();
        await config.load();

        // Update state
        this.setState(config.get(), async () => {
            if (this.state.isSyncWithServer) {
                await this.updateFinishDate();
            }
        });

        // Send message to every current tab if isEmitEvent is true
        if (isEmitEvent) emitCountdownChanged();
    }

    async updateFinishDate(): Promise<void> {
        const finishDate = await getTime(this.state);
        this.setState({ finishDate });
    }

    async saveConfig(eventEmitType?: EventEmitType): Promise<void> {
        // Load and save data to extension storage
        const config = new Configurations();
        config.set(this.state);
        await config.save();

        // Send message to every current tab 
        emitCountdownChanged(eventEmitType || EventEmitType.ALL, this.state);
    }

    async componentDidMount() {
        await this.loadAppData(false);
    }

    async handleChange(field: FieldType, event: React.ChangeEvent<HTMLInputElement> | BackgroundType) {
        switch (field) {
            case FieldType.isFloatCountdown:
                this.setState({ isFloatCountdown: (event as React.ChangeEvent<HTMLInputElement>).target.checked }, this.saveConfig);
                break;
            case FieldType.isSyncWithServer:
                const isChecked = (event as React.ChangeEvent<HTMLInputElement>).target.checked;
                if (isChecked) await this.updateFinishDate();
                this.setState({ isSyncWithServer: isChecked }, this.saveConfig);
                break;
            case FieldType.finishDate:
                this.setState({ finishDate: (event as React.ChangeEvent<HTMLInputElement>).target.valueAsNumber }, this.saveConfig);
                break;
            case FieldType.countBy:
                this.setState({ countBy: (event as React.ChangeEvent<HTMLInputElement>).target.value as CountType }, this.saveConfig);
                break;
            case FieldType.background:
                this.setState({ background: event as BackgroundType }, this.saveConfig);
                break;
            case FieldType.textColor:
                this.setState(
                    { textColor: (event as React.ChangeEvent<HTMLInputElement>).target.value },
                    this.saveConfig.bind(this, EventEmitType.TEXT_COLOR));
        }
    }

    render() {
        return (
            <div className="popup-app bg-violet-50 p-3">
                <HeaderPopup
                    onChange={this.loadAppData.bind(this)} />
                <CountdownCard
                    textColor={this.state.textColor}
                    background={this.state.background}
                    countType={this.state.countBy}
                    finishDate={this.state.finishDate} />
                <Setting data={this.state} onChange={this.handleChange.bind(this)} />
                {/* <FooterPopup /> */}
            </div>
        );
    }
}