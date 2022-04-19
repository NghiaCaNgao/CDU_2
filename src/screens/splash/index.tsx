import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";
export default class Splash extends React.Component {
    render() {
        return (
            <div className="splash-screen w-screen h-screen flex justify-center items-center">
                <div className="rounded-3xl shadow-md bg-white w-3/5 h-4/5">
                    <Outlet />
                </div>
            </div>
        )
    }
}