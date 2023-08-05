import React from "react";
import "./Channels.css";
import AI from "../assets/AI.jpg";
import courses from "../assets/main.png";
import books from "../assets/books logo.png";
import chatgpt from "../assets/chatgpt.jpg";
import comics from "../assets/code-comics.jpg";
import vis from "../assets/Data vis.png";
import github from "../assets/github.png";
import interview from "../assets/interview prep.png";
import logic from "../assets/logic.jpg";
import memes from "../assets/memes.jpg";
import python from "../assets/python.jpg";
import research from "../assets/research.jpg";
import news from "../assets/tech-news.jpg";
import web from "../assets/web-dev.jpg";
import science from "../assets/DSML logo.png";
import telegram from '../assets/telegram.png'

const Channels = () => {
  const cards = [
    {
      title: "Free Courses",
      desc: `Unlock the power of programming with our channel! We offer
                  free courses on various programming topics, catering to
                  beginners and experienced learners alike.`,
      img: courses,
      link: "https://t.me/+jKYc5_ByEAc1MjY0",
    },
    {
      title: "Free Books",
      desc: `Access a world of knowledge with our channel! We share free programming books on various topics. Expand your skills and explore new horizons with our extensive collection. Start learning today, all for free!`,
      img: books,
      link: "https://t.me/+XqChV7kWKXswZmFk",
    },
    {
      title: "Data Science/ML/AI",
      desc: `Unleash the power of data science with our channel! We share free content focused on data analysis, machine learning, and AI. Join us to access valuable resources and stay ahead in this exciting field. Start exploring data science today, all for free!`,
      img: science,
      link: "https://t.me/+CV0ySqqvYjZmOTY0",
    },
    {
      title: "Interview Preparation",
      desc: `Ace your coding interviews with our channel! We offer free resources and tips to help you prepare for coding interviews. Join our community and get ready to land your dream job.`,
      img: interview,
      link: "https://t.me/+d6MhF3WRdCNiNGVk",
    },
    {
      title: "Github Repositories",
      desc: `Discover free GitHub repositories on our channel! Access a variety of coding resources, from libraries to project templates. Expand your knowledge and enhance your programming skills. Join us and explore the world of open-source collaboration, all for free!`,
      img: github,
      link: "https://t.me/+UxF3hcAJ_UQ5NTU8",
    },
    {
      title: "Data Visualization",
      desc: `Visualize your data like never before with our channel! We offer a curated collection of free resources focused on data visualization. Learn the art of transforming complex data into compelling visuals. Join us and unlock the power of storytelling through data, all for free!`,
      img: vis,
      link: "https://t.me/+Fxs6qqI6qo0wNzA8",
    },
    {
      title: "Tech News",
      desc: `Stay informed with our tech news channel! Get the latest updates and insights on the world of technology. From new gadgets and innovations to industry trends and breakthroughs, we've got you covered. Join us and stay ahead in the fast-paced world of tech, all in one place.`,
      img: news,
      link: "https://t.me/+5-OqsMvkGsU2OGY0",
    },
    {
      title: "python",
      desc: `Unlock the potential of Python with our channel! Access free resources and tutorials to master the versatile programming language. From beginner-friendly basics to advanced techniques, we've got your Python learning journey covered. Join us and level up your coding skills with Python, all for free!`,
      img: python,
      link: "https://t.me/+PxBINE_LVzNmY2Q1",
    },
    {
      title: "web Development",
      desc: `Level up your web development skills with our channel! Explore free resources and tutorials to master the art of building websites. From HTML and CSS to JavaScript and frameworks, we've got you covered. Join us and dive into the world of web development, all for free!`,
      img: web,
      link: "https://t.me/+u55UjNtFJio2NTg8",
    },
    {
      title: "Logic Quests",
      desc: `Embark on logical adventures with our channel! Solve mind-bending puzzles and challenges that sharpen your critical thinking skills. Join us and embark on exciting logic quests that exercise your brain and push the boundaries of reasoning. Are you ready to embark on a journey of logic?`,
      img: logic,
      link: "https://t.me/+VW2SGjrydZA3ZTM0",
    },
    {
      title: "AI Revolution",
      desc: `Discover the future with our AI channel! Dive into the fascinating world of Artificial Intelligence. Access free resources and insights on machine learning, neural networks, and AI applications. Join us and explore the limitless possibilities of AI, all in one place.`,
      img: AI,
      link: "https://t.me/+uGfOYiZSEc5hOTRk",
    },
    {
      title: "Talks With Chatgpt",
      desc: `Engage with the power of AI through our ChatGPT channel! Join conversations and explore the capabilities of this advanced language model. Access free resources and discover the potential of AI-powered chatbots. Join us and experience the future of conversational AI, all in one place.`,
      img: chatgpt,
      link: "https://t.me/+uIAGLkHITccxM2U0",
    },
    {
      title: "Data Science Research Papers",
      desc: `Unleash the insights of data science with our research papers channel! Access free resources and dive into the latest advancements in the field. Stay up to date with cutting-edge research papers on data analysis, machine learning, and more. Join us and explore the forefront of data science research, all in one place.`,
      img: research,
      link: "https://t.me/+MQPSdyz2XmIxNTg0",
    },
    {
      title: "Code Comics",
      desc: `Experience coding like never before with our Code Comics channel! Explore the world of programming through fun and engaging comics. Learn coding concepts, algorithms, and best practices in a visually captivating way. Join us and enjoy the lighter side of coding with our unique blend of education and entertainment.`,
      img: comics,
      link: "https://t.me/+YJAUZV-XvxtmMWY0",
    },
    {
      title: "Programming Memes",
      desc: `Get your daily dose of laughter with our Programming Memes channel! Dive into a collection of hilarious memes that only coders can truly appreciate. From relatable coding struggles to clever jokes about programming languages, we've got your funny bone covered.`,
      img: memes,
      link: "https://t.me/+HIOAL-UMEaM5YTY0",
    },
  ];

  return (
    <div className="channels p-5 mt-5" id="channels">
      <div className="container">
        <h1 className="about-title mb-5">Our Telegram <img src={telegram} alt="telegram" className="telegram"/> Channels</h1>
        <div className="row g-5">
          {cards.map((card) => {
            return (
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card mx-auto">
                  <img className="card-img" src={card.img} />
                  <div className="card-body">
                    <h2 className="text-center card-text">{card.title}</h2>
                    <div className="mx-auto">
                      <p className="desc text-center">{card.desc}</p>
                      <button className="join-btn">
                        <a className="channel-links" href={card.link} target="_blank">
                        Join Now</a>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <a href="#contact">
        <button className="btn mt-5" type="button">
          <strong>Contact Us</strong>
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

export default Channels;
