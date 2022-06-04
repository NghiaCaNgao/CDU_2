import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Popup from "@/screens/popup/index";
// import Splash from "./screens/splash";
// import SplashStart from "./screens/splash/pages/start";
// import SplashFinish from "./screens/splash/pages/finish";

const Popup = React.lazy(() => import("@/screens/popup/index"));
const Splash = React.lazy(() => import("@/screens/splash"));
const SplashStart = React.lazy(() => import("@/screens/splash/pages/start"));
const SplashFinish = React.lazy(() => import("@/screens/splash/pages/finish"));
const NewTab = React.lazy(() => import("@/screens/new-tab"));
const Options = React.lazy(() => import("@/screens/options"));
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
                    <Route path="/newtab" element={<NewTab />} />
                    <Route path="/options" element={<Options />} />
                </Routes>
            </Router>
        )
    }
}