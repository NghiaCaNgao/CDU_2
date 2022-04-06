import React from "react";
import LinkIcon from "@/components/LinkIcon";
import ButtonIcon from "@/components/ButtonIcon";
import {ReactComponent as BellIcon} from "@/assets/icons/bell.svg";
import {ReactComponent as SettingsIcon} from "@/assets/icons/settings.svg";

export default class HeaderPopup extends React.Component {
    render() {
        return (
            <div className="p-3 pt-0 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-violet-pastel">Countdown2Uni</h1>
                <div className="flex">
                    <ButtonIcon icon={<BellIcon/>} id = "btn-notification" onClick={()=>{}}/>
                    <LinkIcon icon={<SettingsIcon/>} id = "btn-settings" to="/settings"/>
                </div>
            </div>
        );
    }
}