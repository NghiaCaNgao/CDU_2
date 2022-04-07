import React from "react";
import HeaderPopup from "./components/HeaderPopup";
import CountdownCard from "./components/CountdownCard";
import FooterPopup from "./components/FooterPopup";
import SettingSection from "./components/SettingSection";

import "./index.scss";

export default class Popup extends React.Component {
    render() {
        return (
            <div className="popup-app bg-violet-50 p-3">
                <HeaderPopup />
                <CountdownCard />
                <SettingSection />
                {/* <FooterPopup /> */}
            </div>
        );
    }
}