"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGlobe } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

// import Governor from "@/public/images/governor.png";
// import DMAS from "@/public/images/dmas.png";
// import Todo from "@/public/images/todo.png";
// import Panaverse from "@/public/images/panaverse.png";
// import Piaic from "@/public/images/piaic.png";
// import Expense from "@/public/images/expense.png";
// import Covid from "@/public/images/covid.png";
// import Shoe from "@/public/images/shoe.png";
// import ShortAnimation from "@/public/images/shortanimation.png";
// import RedQueen from "@/public/images/redqueen.png";
// import Olx from "@/public/images/olx.png";
// import Timer from "@/public/images/timer.png";
// import Quiz from "@/public/images/quiz.png";
// import ShoppingCart from "@/public/images/shoppingcart.png";
// import HostelSite from "@/public/images/hostel.png";
// import SpaceX from "@/public/images/spacex.png";

const cards = [
  {
    image: "/images/e-comerce.jpg",
    site: "https://hacathon-templete-4.vercel.app/",
    github: "https://github.com/faraz141/hacathon-templete-4",
    heading: "Giaic Hackathon E-commerce",
  },
  {
    image: "/images/internpools.jpg",
    site: "https://internpools.com",
    github: "https://github.com/faraz141/Internpools",
    heading: "Internpools Website",
  },
  {
    image: "/images/todo-list.jpg",
    site: "https://faraz-bq-30-todo-list-app.vercel.app/",
    github: "https://github.com/faraz141/bq-3.0-todo-list-app",
    heading: "Todo List App (Next JS)",
  },
  {
    image: "/images/resturant.jpg",
    site: "https://bq-3-0-final-project-react.vercel.app/",
    github: "https://github.com/faraz141/bq-3.0-final-project-react",
    heading: "Resturant Dashboard (React JS)",
  },
  {
    image: "/images/resume.jpg",
    site: "https://resumefm.vercel.app/",
    github:
      "https://github.com/faraz141/gsit-dynamic-resume-sharable-link-download",
    heading: "Dynamic resume builder (Typescript) ",
  },
  {
    image: "/images/expense.jpg",
    site: "https://faraz-expensetraker.vercel.app/",
    github: "https://github.com/faraz141/expense-tracker",
    heading: "Expense Tracker App",
  },
  {
    image: "/images/real-estate.jpg",
    site: "https://mid-term-real-estate-website.vercel.app/",
    github: "https://github.com/faraz141/bq-wd-2-mid-term-project",
    heading: "Real Estate Site (React)",
  },
  {
    image: "/images/github.jpg",
    site: "https://faraz-bq-project-02.vercel.app/",
    github: "https://github.com/faraz141/bq-project-02",
    heading: "Github Finder App (React)",
  },
  {
    image: "/images/timer.jpg",
    site: "https://faraz-gsit-countdown-app.vercel.app/",
    github: "https://github.com/faraz141/gsit-countdown-app",
    heading: "Countdown Timer App",
  },
  {
    image: "/images/joke.jpg",
    site: "https://faraz-gsit-random-joke-app.vercel.app/",
    github: "https://github.com/faraz141/gsit-random-joke-app",
    heading: "Random Joke App",
  },
];

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="p-8 text-center bg-gray-950 text-white">
      <div className="mx-auto mb-20 w-[220px]">
        <h1
          className="text-[40px] font-bold text-center my-[20px] leading-[0] font-[custom3] text-[#eee]"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
        >
          Works
        </h1>
        <div className="flex justify-center items-center w-[220px] mx-auto">
          <div
            className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[100px] border-l-[#CA8A04] border-b-[8px] border-b-transparent -mr-[10px]"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="800"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          ></div>
          <div
            className="w-[20px] h-[20px] rounded-full bg-[#CA8A04]"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          ></div>
          <div
            className="w-0 h-0 border-t-[8px] border-t-transparent border-r-[100px] border-r-[#CA8A04] border-b-[8px] border-b-transparent -ml-[10px]"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="800"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-xl shadow-2xl overflow-hidden aspect-[16/8] transition-all duration-500"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <Image
              src={card.image}
              alt={card.heading}
              className="object-cover w-full h-full"
              fill
            />
            <div className="absolute inset-0 bg-black opacity-10 hover:opacity-0 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-white bg-black/50 px-4 py-2 rounded-md text-lg font-semibold">
              {card.heading}
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <a href={card.site} target="_blank" rel="noreferrer">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                  Visit Site <FaGlobe />
                </button>
              </a>
              <a href={card.github} target="_blank" rel="noreferrer">
                <button className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                  View on GitHub <VscGithub />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
