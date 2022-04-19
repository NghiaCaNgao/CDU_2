import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Popup from "@/screens/popup/index";
import Splash from "./screens/splash";
import SplashStart from "./screens/splash/pages/start";
import SplashFinish from "./screens/splash/pages/finish";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Popup />} />
                    <Route path="splash" element={<Splash />}>
                        <Route index element={<SplashStart />} />
                        <Route path="finish" element={<SplashFinish />} />
                    </Route>
                </Routes>
            </Router>
        )
    }
}