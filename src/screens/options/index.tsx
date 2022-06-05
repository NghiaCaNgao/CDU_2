import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";

const OptionTabLinks = [
    {
        name: "Countdown",
        to: "/options",
    },
    {
        name: "Notifications",
        to: "/options/notifications",
    },
]

export default class Options extends React.Component {
    render() {
        return (
            <div className="min-h-screen bg-gray-50 min-w-[600px]">
                <Header />
                <div className="max-w-[900px] w-full mx-auto mt-20 px-10 sm:px-20 lg:px-0">
                    <h1 className="text-gray-700 text-4xl font-lexend font-bold">Settings</h1>
                    <div className="flex mt-3">
                        <div className="mt-10 w-44 overflow-hidden mr-3 flex-none">
                            {OptionTabLinks.map((item, index) =>
                                <NavLink
                                    key={index}
                                    to={item.to}
                                    end 
                                    className={
                                        ({ isActive }) =>
                                            `block font-nunito text-[16px] truncate font-semibold rounded-2xl px-4 py-1 hover:text-gray-700 hover:bg-indigo-100 my-1 ` +
                                            (isActive ? "bg-indigo-100 text-gray-700" : "text-gray-400")
                                    }>
                                    {item.name}
                                </NavLink>
                            )}
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg h-40 w-full flex-shrink p-10">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}