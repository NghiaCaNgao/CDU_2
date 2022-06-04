import React from "react";
import { BackgroundType } from "@/api/def";
import Input, { InputType } from "@/components/Input";
import ImageSelect from "@/components/ImageSelect";

interface IState {
    isShowSelectPanel: boolean
}

interface IProps {
    background: { id: string, url: string, name: string };
    onClick?: () => void;
    onChange?: (background: BackgroundType) => void;
}

const BackgroundImageList = [
    {
        name: "Water",
        url: (chrome.runtime)
            ? chrome.runtime.getURL("/images/background/bg1.jpg")
            : "/images/background/bg1.jpg",
        id: "water"
    },
    {
        name: "Dark Sky",
        url: (chrome.runtime)
            ? chrome.runtime.getURL("/images/background/bg2.jpg")
            : "/images/background/bg2.jpg",
        id: "dark-sky"
    },
    {
        name: "Blue Mine",
        url: (chrome.runtime)
            ? chrome.runtime.getURL("/images/background/bg3.jpg")
            : "/images/background/bg3.jpg",
        id: "blue-mine"
    },
    {
        name: "Hero",
        url: (chrome.runtime)
            ? chrome.runtime.getURL("/images/background/bg4.jpg")
            : "/images/background/b4g.jpg",
        id: "hero"
    },
    {
        name: "Step",
        url: (chrome.runtime)
            ? chrome.runtime.getURL("/images/background/bg5.jpg")
            : "/images/background/bg.jpg",
        id: "step"
    },
    {
        name: "Gas",
        url: (chrome.runtime)
            ? chrome.runtime.getURL("/images/background/bg6.jpg")
            : "/images/background/bg.jpg",
        id: "gas"
    }
]

export default class SelectBackground extends React.Component<IProps, IState> {
    private ref: React.RefObject<HTMLDivElement>;
    constructor(props: IProps) {
        super(props);
        this.state = {
            isShowSelectPanel: false,
        };
        this.ref = React.createRef();
    }

    toggleSelect() {
        this.setState({ isShowSelectPanel: !this.state.isShowSelectPanel });
    }

    setShowState(state: boolean) {
        this.setState({ isShowSelectPanel: state });
    }

    handleClickOutside(event) {
        // Check if clicked target is inside the ref
        if (this.ref.current && !this.ref.current.contains(event.target)) {
            this.setShowState(false);
        }
    }

    // Emit event when input change
    handleClick(background: BackgroundType) {
        this.props.onChange && this.props.onChange(background);
    }

    // Add event when input change
    handleClickForLink(url: string) {
        this.props.onChange && this.props.onChange({ id: "custom-user-background", url: url, name: "Custom Background" });
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside.bind(this));
    }

    render() {
        return (
            <div className={"select-background relative"} ref={this.ref}>
                <div className={"relative z-50 transition-all " + (this.state.isShowSelectPanel ? "px-3" : "")}>
                    <Input
                        title="Background"
                        data={{
                            value: this.props.background.url,
                            label: this.props.background.name
                        }}
                        type={InputType.Button}
                        onClick={this.toggleSelect.bind(this)} />
                </div>
                <div className={"bg-white rounded-2xl w-full p-3 absolute -bottom-3 left-0 shadow-2xl transition-all " + ((this.state.isShowSelectPanel) ? "opacity-100 z-10" : "opacity-0")}>
                    <div className="flex flex-wrap justify-center">
                        {BackgroundImageList.map(item =>
                        (<ImageSelect
                            key={item.id}
                            imgSrc={item.url}
                            onClick={this.handleClick.bind(this, item)}
                            selected={this.props.background.id === item.id}
                        />))}
                    </div>
                    <Input
                        type={InputType.Text}
                        title="Link to image"
                        value={this.props.background.url}
                        onChangeTextLink={this.handleClickForLink.bind(this)} />
                    <div className="h-10"></div>
                </div>
            </div>
        );
    }
}

export { BackgroundImageList };