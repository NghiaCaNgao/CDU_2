import React from "react";
import LinkIcon from "@/components/LinkIcon";
import ButtonIcon from "@/components/ButtonIcon";
import NotiItem from "./NotiItem";
import { ReactComponent as BellIcon } from "@/assets/icons/bell.svg";
import { ReactComponent as SettingsIcon } from "@/assets/icons/settings.svg";
interface IState {
    showNoti: boolean;
}
export default class HeaderPopup extends React.Component<{}, IState> {
    private ref: React.RefObject<HTMLDivElement>;
    constructor(props: {}) {
        super(props);
        this.state = {
            // TODO: fix this in production mode: turn to false
            showNoti: false,
        }
        this.ref = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    toggleNoti() {
        this.setState({ showNoti: !this.state.showNoti })
    }

    setShowNotiState(state: boolean) {
        this.setState({ showNoti: state })
    }

    handleClickOutside(event) {
        // Check if clicked target is inside the ref
        if (this.ref.current && !this.ref.current.contains(event.target)) {
            this.setShowNotiState(false);
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    render() {
        return (
            <div className="p-5 py-3 relative" ref={this.ref}>
                <div className="flex items-center justify-between relative z-50">
                    <h1 className="text-2xl font-lexend font-black text-violet-pastel">Countdown2Uni</h1>
                    <div className="flex">
                        <ButtonIcon icon={<BellIcon />} id="btn-notification" onClick={this.toggleNoti.bind(this)} />
                        <LinkIcon icon={<SettingsIcon />} id="btn-settings" to="/settings" />
                    </div>
                </div>

                <div className={"notification bg-white rounded-2xl w-full p-3 absolute top-0 left-0 shadow-2xl transition-all " + ((this.state.showNoti) ? "opacity-100 z-10" : "opacity-0 z-0")}>
                    <div className="h-16"></div>
                    <NotiItem title="Update 3.30" description="We come back" type="update" />
                    <NotiItem title="Explore new world" description="See what you know" type="important" />
                </div>
            </div>
        );
    }
}