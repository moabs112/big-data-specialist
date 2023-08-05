import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Channels from "./components/Channels";
import Contact from "./components/contact";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    <About/>
    <Channels/>
    <Contact/>
    </div>
  );
};

export default App;
