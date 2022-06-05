import React from "react";
import Logo from "@/components/Logo"
import Nav from "../Nav"

export default function Header(){
    return (
        <div className="bg-white flex border-b-2 border-b-gray-200">
            <Logo />
            <Nav />          
        </div>
    )
}