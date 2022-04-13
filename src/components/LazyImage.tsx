import React from "react";
import "./lazyLoad.scss";

function elementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

interface IProps {
    src: string;
    placeHolder?: string;
    alt?: string;
    className?: string;
    effect?: string;
    width?: string;
    height?: string;
}

export default class LazyImage extends React.Component<IProps, { loaded: boolean }> {
    private imgElm: HTMLElement;
    constructor(props: IProps) {
        super(props);

        this.state = {
            loaded: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.handleScroll();
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        if (!this.state.loaded) {
            // Load real image
            const imgLoader = new Image();
            imgLoader.src = this.props.src;
            imgLoader.onload = () => {
                this.imgElm.setAttribute(`src`, `${this.props.src}`);
                this.imgElm.classList.add(`${this.props.effect}`);

                this.setState({
                    loaded: true,
                });
            };
        }
    }

    render() {
        const width = this.props.width || "100%";
        const height = this.props.height || "100%";

        return (
            <img
                src={(this.props.placeHolder)
                    ? this.props.placeHolder
                    : "https://dummyimage.com/600x400/000000/dedede.png&text=c2u"}
                width={width}
                height={height}
                ref={(imgElm) => (this.imgElm = imgElm)}
                className={"lazy-image" + (this.props.className ? ` ${this.props.className}` : "")}
                alt={this.props.alt}
            />
        );
    }
}