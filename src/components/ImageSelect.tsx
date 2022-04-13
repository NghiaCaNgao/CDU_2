import React from 'react';
import LazyImage from '@/components/LazyImage';

interface IProps {
    imgSrc: string;
    onClick: () => void;
    selected?: boolean;
}

export default class ImageSelect extends React.Component<IProps, {}> {
    render() {
        return (
            <div
                className={'m-2 w-20 h-12 rounded-xl transition-all cursor-pointer object-scale-down overflow-hidden '
                    + ((this.props.selected) ? "border-2 border-violet-500 p-1" : "")}
                onClick={this.props.onClick}>
                {/* <img src={this.props.imgSrc}
                    className={"rounded-lg w-full h-full overflow-hidden saturate-150 transition-all cursor-pointer hover:shadow-lg "}
                    alt="preview background" /> */}
                <LazyImage
                    src={this.props.imgSrc}
                    width={`100%`}
                    height={`auto`}
                    effect={"opacity"}
                    className={"rounded-lg w-full h-full overflow-hidden saturate-150 transition-all cursor-pointer hover:shadow-lg "}
                    alt="Background"
                />
            </div>
        );
    }

}