import React from "react";

export default class FinishPage extends React.Component {
    constructor(props: any) {
        super(props);
        console.log("Hello from FinishPage constructor");
        
    }
    render() {
        // console.log("Hello from FinishPage");
        
        return (
            <div className="flex flex-col items-center w-full h-full">
                <div className="my-12">
                    <h1 className="font-lexend text-5xl font-black text-blue-600 text-center">All are set</h1>
                    <p className="font-lexend mt-5 text-gray-500 text-center">Congratulation! You have finished setup</p>
                </div>
                <img src="./images/items/happy.png" alt="deco" />
                <a href="#/splash"
                    className="text-center text-gray-500 font-lexend underline cursor-pointer hover:text-blue-500">Back to previous</a>
            </div>
        )
    }
}