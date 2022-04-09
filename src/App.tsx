import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Popup from "@/screens/popup/index";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Popup />} />
                </Routes>
            </Router>
        )
    }
}