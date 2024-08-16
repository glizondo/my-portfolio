import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import FunFactSlide from "./components/FunFact/FunFactBody";

function App() {
  const [selectedPage, setSelectedPage] = useState("about");
  const handleBodyChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <Router basename="/my-portfolio">
      <div className="container">
        <Header onBodyChange={handleBodyChange} />
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<Body bodyName={selectedPage} />} />
          <Route path="/projects" element={<Body bodyName={selectedPage} />} />
          <Route path="/funfact" element={<FunFactSlide />} />
          <Route path="/photography" element={<Body bodyName={selectedPage} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
