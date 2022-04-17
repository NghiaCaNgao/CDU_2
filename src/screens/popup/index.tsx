import React from "react";
import { CountType, Property } from "@/api/def";
import { getTime } from "@/api/getTime";
import Configurations from "@/extensions/config";
import { emitCountdownChanged, EventType } from "@/extensions/common";
import { getDefaultAppData } from "@/api/common";

import HeaderPopup from "./components/HeaderPopup";
import CountdownCard from "./components/CountdownCard";
// import FooterPopup from "./components/FooterPopup";
import SettingSection, { FieldType } from "./components/SettingSection";
import { BackgroundType } from "./components/SelectBackground";

import "./index.scss";

export default class Popup extends React.Component<{}, Property> {
    constructor(props: any) {
        super(props);
        this.state = getDefaultAppData();
    }

    async loadAppData(isEmitEvent = true) {
        const config = new Configurations();
        await config.load();
        this.setState(config.get(), async () => {
            if (this.state.isSyncWithServer) {
                await this.updateFinishDate(this.state.finishDate);
            }
        });
        // Send message to every current tab
        if (isEmitEvent) emitCountdownChanged();
    }

    async updateFinishDate(_finishDate?: number): Promise<void> {
        const finishDate = await getTime(_finishDate);
        this.setState({ finishDate });
    }

    async saveConfig(eventType?: EventType): Promise<void> {
        console.log("saveConfig", eventType);

        const config = new Configurations();
        config.set(this.state);
        await config.save();

        // Send message to every current tab
        emitCountdownChanged(eventType || EventType.ALL, this.state);
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
                    this.saveConfig.bind(this, EventType.TEXT_COLOR));
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
                <SettingSection data={this.state} onChange={this.handleChange.bind(this)} />
                {/* <FooterPopup /> */}
            </div>
        );
    }
}