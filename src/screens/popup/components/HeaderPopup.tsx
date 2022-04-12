import React from "react";
import { NotificationItem } from "@/api/def";
import { getNoti } from "@/api/getNoti";
import Configuration from "@/extensions/config";
import LinkIcon from "@/components/LinkIcon";
import ButtonIcon from "@/components/ButtonIcon";
import NotiItem from "./NotiItem";
import { ReactComponent as BellIcon } from "@/assets/icons/bell.svg";
import { ReactComponent as SettingsIcon } from "@/assets/icons/settings.svg";
import { ReactComponent as RestoreIcon } from "@/assets/icons/rotateleft.svg";
interface IState {
    showNoti: boolean;
    notifications: NotificationItem[];
}

interface IProps {
    onChange?: () => void;
}
export default class HeaderPopup extends React.Component<IProps, IState> {
    private ref: React.RefObject<HTMLDivElement>;
    constructor(props: IProps) {
        super(props);
        this.state = {
            showNoti: false,
            notifications: []
        }
        this.ref = React.createRef();
    }

    toggleNoti() {
        this.setState({ showNoti: !this.state.showNoti })
    }

    setShowNotiState(state: boolean) {
        this.setState({ showNoti: state })
    }

    async restoreData() {
        const config = new Configuration();
        await config.load();
        await config.resetData();
        alert("Data has been restored!");
        this.props.onChange && this.props.onChange();
    }

    handleClickOutside(event) {
        // Check if clicked target is inside the ref
        if (this.ref.current && !this.ref.current.contains(event.target)) {
            this.setShowNotiState(false);
        }
    }

    async componentDidMount() {
        console.log(await getNoti());

        this.setState({ notifications: await getNoti() })
        document.addEventListener("mousedown", this.handleClickOutside.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside.bind(this));
    }

    render() {
        return (
            <div className="p-5 py-0 relative" ref={this.ref}>
                <div className="flex items-center justify-between relative z-50">
                    <h1 className="text-2xl font-lexend font-black text-violet-pastel">Countdown</h1>
                    <div className="flex">
                        <ButtonIcon icon={<RestoreIcon />} id="btn-restore" onClick={this.restoreData.bind(this)} />
                        <ButtonIcon icon={<BellIcon />} id="btn-notification" onClick={this.toggleNoti.bind(this)} />
                        <LinkIcon icon={<SettingsIcon />} id="btn-settings" to="/settings" />
                    </div>
                </div>

                <div className={"notification bg-white rounded-2xl w-full p-3 absolute top-0 left-0 shadow-2xl transition-all " + ((this.state.showNoti) ? "opacity-100 z-40" : "opacity-0 z-0")}>
                    <div className="h-16"></div>
                    {this.state.notifications.map((noti, index) => {
                        return <NotiItem key={index} title={noti.title} type={noti.type} description={noti.description} />
                    })}
                </div>
            </div>
        );
    }
}