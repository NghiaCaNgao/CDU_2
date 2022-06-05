import React, { Suspense, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Loading from "@/screens/loading";

const Popup = React.lazy(() => import("@/screens/popup/index"));
const Splash = React.lazy(() => import("@/screens/splash"));
const SplashStart = React.lazy(() => import("@/screens/splash/pages/start"));
const SplashFinish = React.lazy(() => import("@/screens/splash/pages/finish"));
const NewTab = React.lazy(() => import("@/screens/new-tab"));
const Options = React.lazy(() => import("@/screens/options"));
const Countdown = React.lazy(() => import("@/screens/options/pages/countdown"));

function Wrapper() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fadeOut");
    }, [location]);

    return (
        <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransitionStage("fadeIn");
                    setDisplayLocation(location);
                }
            }}>

            <Suspense fallback={<Loading />}>
                <Routes location={displayLocation} key={location.pathname}>
                    <Route path="/loading" element={<Loading />} />
                    <Route path="/" element={<Popup />} />
                    <Route path="splash" element={<Splash />}>
                        <Route index element={<SplashStart />} />
                        <Route path="finish" element={<SplashFinish />} />
                    </Route>
                    <Route path="/newtab" element={<NewTab />} />
                    <Route path="options" element={<Options />}>
                        <Route index element={<Countdown />} />
                        <Route path="notifications" element={<div>Notifications</div>} />
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Wrapper />
        </Router>
    )
}