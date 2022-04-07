import React from "react";
import { CountType } from "@/api/countType";
import HeaderPopup from "./components/HeaderPopup";
import CountdownCard from "./components/CountdownCard";
// import FooterPopup from "./components/FooterPopup";
import SettingSection, { FieldType, Property } from "./components/SettingSection";
import { BackgroundImageList, BackgroundType } from "./components/SelectBackground";

import "./index.scss";

export default class Popup extends React.Component<{}, Property> {
    constructor(props: any) {
        super(props);
        this.state = {
            isFloatCountdown: true,
            isSyncWithServer: false,
            finishDate: Date.now(),
            countBy: CountType.Day,
            background: BackgroundImageList[0]
        };
    }

    handleChange(field: FieldType, event: React.ChangeEvent<HTMLInputElement> | BackgroundType) {
        // console.log(field, event);
        switch (field) {
            case FieldType.isFloatCountdown:
                this.setState({ isFloatCountdown: (event as React.ChangeEvent<HTMLInputElement>).target.checked });
                break;
            case FieldType.isSyncWithServer:
                this.setState({ isSyncWithServer: (event as React.ChangeEvent<HTMLInputElement>).target.checked });
                break;
            case FieldType.finishDate:
                this.setState({ finishDate: (event as React.ChangeEvent<HTMLInputElement>).target.valueAsNumber });
                break;
            case FieldType.countBy:
                this.setState({ countBy: (event as React.ChangeEvent<HTMLInputElement>).target.value as CountType });
                break;
            case FieldType.background:
                this.setState({ background: event as BackgroundType });
                break;
        }
    }

    render() {
        return (
            <div className="popup-app bg-violet-50 p-3">
                <HeaderPopup />
                <CountdownCard
                    background={this.state.background}
                    countType={this.state.countBy}
                    finishDate={this.state.finishDate} />
                <SettingSection data={this.state} onChange={this.handleChange.bind(this)} />
                {/* <FooterPopup /> */}
            </div>
        );
    }
}