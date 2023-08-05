import React from "react";
import "./Home.css";
import Counter from "./counter";

const Home = () => {
  return (
    <div className="container home text-center">
      <div className=" mt-5" id="home">
        <h1>WELCOME TO</h1>
        <ul>
          <li className="animated">B</li>
          <li>I</li>
          <li>G</li>
          <li>_</li>
          <li>D</li>
          <li>A</li>
          <li> T</li>
          <li>A</li>
          <li>_</li>
          <li> S</li>
          <li>P</li>
          <li>E</li>
          <li>C</li>
          <li>I</li>
          <li>A</li>
          <li>L</li>
          <li>I</li>
          <li>S</li>
          <li>T</li>
        </ul>
        <h1>The Home of Free Education</h1>
        <div className="loader my-5">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
        
        <a href="#about">
          <button className="btn" type="button">
            <strong>About Us</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
