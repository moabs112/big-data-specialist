import React from "react";
import "./About.css";


import moon from '../assets/moon.png'

const About = () => {
  return (
    <div className="container about mt-5 p-5" id="about">
      <h1 className="mb-5 about-title">About Us</h1>
      <div className="d-lg-flex justify-content-between align-items-center d-block">
        <div className="about-text">
          <h4>Who We Are?</h4>
          <p>
            We are a dedicated community that aims to provide free programming
            and data science learning resources.
          </p>
          <h4 className="mt-5">Our Mission</h4>
          <p>
            Our goal is to make quality educational resources available to
            everyone, regardless of their financial or geographical constraints.
            We believe that education should be free for everyone and acquiring
            new skills and knowledge can open doors to endless opportunities.
          </p>
          <h4 className="mt-5">What do we offer</h4>
          <p>
            We are sharing free programming courses by world's best
            universities, like MIT, Harvard, Stanford, Berkeley, free books,
            coolest GitHub repositories, best free programming and AI tools,
            tech news and many more. Whether you are an experienced programmer
            or a student, you will find something useful here.
          </p>
        </div>

        <img src={moon} className="moon" alt="student" />
      </div>
      <a href="#channels">
        <button className="btn mt-5" type="button">
          <strong>Our Channels</strong>
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
  );
};

export default About;
