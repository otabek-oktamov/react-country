import React, { useState } from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import HomePage from "./components/home_page/HomePage";
import SinglePage from "./components/single_page/SinglePage";

function App() {
  const [currentCountry, setCurrentCountry] = useState("");
 
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage onChange={setCurrentCountry} />} />
          <Route path='/about' element={<SinglePage country={currentCountry}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
