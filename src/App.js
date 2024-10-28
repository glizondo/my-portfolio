import React, { useState } from "react";
import ReactGA from "react-ga4";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
ReactGA.initialize(GA_MEASUREMENT_ID);

function App() {
  ReactGA.send("pageview");

  const [selectedPage, setSelectedPage] = useState("about");
  const handleBodyChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <Router>
      <div className="container">
        <Header onBodyChange={handleBodyChange} />
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<Body bodyName={selectedPage} />} />
          <Route path="/projects" element={<Body bodyName={selectedPage} />} />
          <Route
            path="/photography"
            element={<Body bodyName={selectedPage} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
