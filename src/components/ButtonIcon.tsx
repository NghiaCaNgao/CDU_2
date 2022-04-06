import React from "react";
import "./icon.scss";

interface IProps {
    icon: React.ReactNode;
    id: string;
    onClick: () => void;
}

export default class ButtonIcon extends React.Component<IProps, {}> {
    render() {
        return (
            <button 
            id = {this.props.id}
            onClick={this.props.onClick} 
            className="icon p-1 m-1 rounded-full w-10 h-10 flex items-center justify-center transition-all hover:bg-violet-300 hover:drop-shadow-lg">
                {this.props.icon}
            </button>
        );
    }
}