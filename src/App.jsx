import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container"></div>
    </>
  );
};

export default App;
