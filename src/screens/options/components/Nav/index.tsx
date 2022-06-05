import React from "react";
import { Link } from "react-router-dom";

const NavLinks = [
    {
        name: "Bookmarks",
        to: "bookmarks"
    },
    {
        name: "New tab",
        to: "newtab"
    },
]

export default function Nav() {
    return (
        <div className="mx-5 ml-8 flex items-center">
            {NavLinks.map((item, index) =>
                <Link
                    to={item.to}
                    key={index}
                    className="block mx-5 text-gray-400 hover:text-gray-800 transition-all
                     font-bold font-nunito text-[14px]">
                    {item.name}
                </Link>)}
        </div>
    );
}