import React from "react";
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import "./assets/bootstrap/scss/bootstrap.scss"
import LandingPage from "./pages/LandingPage";
import Personal from "./pages/Personal";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/:username" element={<Personal/>}/>
    </Routes>
  );
}

export default App;
