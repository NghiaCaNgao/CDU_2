import React from "react";
import { Link } from "react-router-dom";
import ImageLogo from "@/assets/images/logo.png";

interface IProps {
    size?: number
}

export default function Logo(props: IProps) {
    return (
        <div>
            <Link to="/" className="flex mx-3 my-3 h-8">
                <img src={ImageLogo} className="object-scale-down" />
                <p className="font-lexend text-[#08508e] mx-2 text-xl font-bold mt-1">Countdown2Uni</p>
            </Link>
        </div>
    )

}