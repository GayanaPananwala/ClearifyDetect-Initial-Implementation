import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import TabViewPage from "./Components/TabView/TabViewPage";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tab-view/*" element={<TabViewPage />} />
        </Routes>
      </Router>
    </div>
  );
}
