import React from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import discord from "../assets/discord.png";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.webp";
import whatsapp from "../assets/WhatsApp.webp";
import { useState } from "react";
import Counter from "./counter";

const Contact = () => {
  const [messageSent, setMessageSent] = useState('')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ej70fp8",
        "template_ed92nlt",
        form.current,
        "4r4-MPx8O6fK6Y3hQ"
      )
      .then(
        (result) => {
          setMessageSent('Your message has been sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact p-5 mt-5" id="contact">
      <h1 className="about-title mb-5">Contact Us</h1>
      <form className="form mx-auto" ref={form}>
        <input className="input" type="text" placeholder="Name" name="name" />
        <input
          className="input"
          type="text"
          placeholder="E-Mail I.D."
          name="email"
        />
        <textarea
          className="textarea"
          placeholder="Enter message"
          name="message"
        ></textarea>
        <center>
          <button className="button" onClick={sendEmail}>
            Submit
          </button>
          <p className="sent-text">{messageSent}</p>
        </center>
      </form>

      <div className="d-flex justify-content-between align-items-center mt-5 pt-5">
        <div>
          <a href="#navbar">
            <button className="back-top">
              <div className="text">
                <span>Back</span>
                <span>to</span>
                <span>top</span>
              </div>
              <div className="clone">
                <span>Back</span>
                <span>to</span>
                <span>top</span>
              </div>
              <svg
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>

        <div>
         
          <div className="main">
            <div className="up">
              <button className="card1">
                <a
                  href="https://www.instagram.com/bigdataspecialist"
                  target="_blank"
                >
                  <img src={instagram} className="instagram" />
                </a>
              </button>
              <button className="card2">
                <a
                  href="https://www.linkedin.com/in/bigdata-specialist-2b6899210/"
                  target="_blank"
                >
                  <img src={linkedin} className="linkedin" />
                </a>
              </button>
            </div>
            <div className="down">
              <button className="card3">
                <a
                  href="https://chat.whatsapp.com/C4G1Xe8XN9KH800ScPpIOg"
                  target="_blank"
                >
                  <img src={whatsapp} className="whatsapp" />
                </a>
              </button>
              <button className="card4">
                <a href="https://discord.gg/f4sXD37H9q" target="_blank">
                  <img src={discord} className="discord" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 d-flex justify-content-center align-items-center p-5">
        <p className="visited">People visited:</p>
        <Counter />
      </div>
    </div>
  );
};

export default Contact;
