import React from "react";
import Input, { InputType } from "@/components/Input";
import ImageSelect from "@/components/ImageSelect";

interface IState {
    isShowSelectPanel: boolean
}

interface BackgroundType {
    id: string;
    url: string;
    name: string;
}

interface IProps {
    background: { id: string, url: string, name: string };
    onClick?: () => void;
    onChange?: (background: BackgroundType) => void;
}

const BackgroundImageList = [
    {
        name: "Water",
        url: "https://wallpapercave.com/wp/wp7291353.jpg",
        id: "water"
    },
    {
        name: "Dark Sky",
        url: "https://i.pinimg.com/originals/a7/f4/26/a7f4267372b13423aa8cbd691a0b279c.jpg",
        id: "dark-sky"
    },
    {
        name: "Blue Mine",
        url: "https://www.pixel4k.com/wp-content/uploads/2018/10/fox-forest-minimalism-artwork-4k_1540749137.jpg",
        id: "blue-mine"
    },
    {
        name: "Hero",
        url: "https://picstatio.com/large/ycv32b/nature-illustraion-wallpaper.jpg",
        id: "hero"
    },
    {
        name: "Step",
        url: "https://wallpaperaccess.com/full/2972945.png",
        id: "step"
    }, {
        name: "Gas",
        url: "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-8.jpg",
        id: "gas"
    }
]

export default class SelectBackground extends React.Component<IProps, IState> {
    private ref: React.RefObject<HTMLDivElement>;
    constructor(props: IProps) {
        super(props);
        this.state = {
            // TODO: Change to false in production mode
            isShowSelectPanel: true,
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
            <div className={"select-background relative "} ref={this.ref}>
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
                <div className={"bg-white rounded-2xl w-full p-3 absolute -bottom-3 left-0 shadow-2xl transition-all " + ((this.state.isShowSelectPanel) ? "opacity-100 z-10" : "opacity-0 z-0")}>
                    <div className="flex flex-wrap justify-center">
                        {BackgroundImageList.map(item =>
                        (<ImageSelect
                            key={item.id}
                            imgSrc={item.url}
                            onClick={this.handleClick.bind(this, item)}
                            selected={this.props.background === item}
                        />))}
                    </div>
                    <Input
                        type={InputType.Text}
                        title="Link to image"
                        onChangeTextLink={this.handleClickForLink.bind(this)} />
                    <div className="h-10"></div>
                </div>
            </div>
        );
    }
}

export { BackgroundType, BackgroundImageList };