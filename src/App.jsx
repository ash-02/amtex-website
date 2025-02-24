import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navigation from "./Navigation/index.jsx";
import Home from "./Home/index.jsx";
import Footer from "./Footer/index.jsx";
import AboutUs from "./AboutUs/index.jsx";
import Solutions from "./Solutions/index.jsx";
import Letter from "./Letter/index.jsx"

function App() {
  return (
    <Router>
    <div
      className="App
    flex flex-col items-start justify-start h-full w-full
    "
    >
      <Navigation />
      <Routes>
        <Route path="/" element={
          <Navigate to="/home" replace />
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutus/letter" element={<Letter />} />
        <Route path="/solutions/:sectionTitle" element={<Solutions />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
