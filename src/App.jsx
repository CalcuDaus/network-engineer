import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <About/>
      </div>
      <Routes>
        <Route path="/tes" element={ <Card/> } />
      </Routes>
    </>
  );
};

export default App;
