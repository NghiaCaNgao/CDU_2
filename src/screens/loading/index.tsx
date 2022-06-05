import React from "react";
import LoadingSrc from "@/assets/gif/loading.gif";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-[#38375c]">
            <div className="my-12 text-white text-center">
                <h1 className="font-lexend text-5xl font-black">Loading...</h1>
                <p className="font-lexend mt-5">Please wait while we are loading your data</p>
            </div>
            <div className="w-[400px] h-[300px]">
                <img src={LoadingSrc} alt="deco" className="object-scale-down" />
            </div>
        </div>
    )
}