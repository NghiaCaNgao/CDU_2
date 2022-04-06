import React from "react";
import "./icon.scss";

interface IProps {
    icon: React.ReactNode;
    id: string;
    to: string;
}

export default class LinkIcon extends React.Component<IProps, {}> {
    render() {
        return (
            <a 
            id = {this.props.id} 
            href={this.props.to} 
            target="_blank" rel="noreferrer"
             className="icon p-1 m-1 rounded-full w-10 h-10 flex items-center justify-center transition-all hover:bg-violet-300 hover:drop-shadow-lg">
                {this.props.icon}
            </a>
        );
    }
}