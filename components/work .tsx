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
    image: "/images/about.jpg",
    site: "https://piaic-ultra.vercel.app/",
    github: "https://github.com/OkashaTanoli/piaic-website",
    heading: "PIAIC Site (Next JS)",
  },
  {
    image: "/images/about.jpg",
    site: "https://expense-tracker-app-okasha.surge.sh/",
    github: "https://github.com/OkashaTanoli/Expense-Tracker-App",
    heading: "Expense Tracker App",
  },
  {
    image: "/images/about.jpg",
    site: "https://covid19-tracker-app-okasha.surge.sh/",
    github: "https://github.com/OkashaTanoli/covid-tracker",
    heading: "Covid Tracker App",
  },
  {
    image: "/images/about.jpg",
    site: "https://shoe-store-okasha.surge.sh/",
    github: "https://github.com/OkashaTanoli/shoe-store",
    heading: "Shoe Store",
  },
  {
    image: "/images/about.jpg",
    site: "https://shortanimation-okasha.surge.sh/",
    github: "https://github.com/OkashaTanoli/Short-Animation",
    heading: "Tiny Animation",
  },
  {
    image: "/images/about.jpg",
    site: "http://redqueenapp-okasha.surge.sh/",
    github: "https://github.com/OkashaTanoli/Short-Animation",
    heading: "Red Queen Animation",
  },
  {
    image: "/images/about.jpg",
    site: "https://react-309aa.web.app",
    github: "https://github.com/OkashaTanoli/olx-replica",
    heading: "Olx Replica",
  },
  {
    image: "/images/about.jpg",
    site: "https://timer-tdd-okasha.surge.sh/",
    github: "https://github.com/OkashaTanoli/timer-app-tyscript-tdd",
    heading: "Timer App",
  },
  {
    image: "/images/about.jpg",
    site: "https://quiz-app-tyscript-pwa-okasha.surge.sh",
    github: "https://github.com/OkashaTanoli/quiz-app-typescript-pwa",
    heading: "Quiz App",
  },
  {
    image: "/images/about.jpg",
    site: "https://shopping-cart-using-redux-toolkit.surge.sh/",
    github:
      "https://github.com/OkashaTanoli/shopping-basket-using-redux-toolkit",
    heading: "Shopping Cart",
  },
  {
    image: "/images/about.jpg",
    site: "https://easyaccomodations.com/",
    github: "https://github.com/OkashaTanoli/hostel_site",
    heading: "Hostel Site",
  },
  {
    image: "/images/about.jpg",
    site: "http://spacex-graphgql-okasha.surge.sh/",
    github: "https://github.com/OkashaTanoli/spacex-graphql",
    heading: "Space X",
  },
];

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-full py-12 bg-cover bg-no-repeat bg-white"
      style={{ backgroundImage: 'url("/images/bg1.png")' }}
      id="work"
    >
      <div className="max-w-6xl mx-auto mt-24">
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-bold text-yellow-600"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Work
          </h1>
          <div className="flex justify-center items-center gap-1 mt-2">
            <div
              className="w-24 h-2 border-l-[100px] border-t-[8px] border-b-[8px] border-transparent border-l-[#140023] -mr-2"
              data-aos="fade-right"
            />
            <div
              className="w-5 h-5 rounded-full bg-[#140023]"
              data-aos="fade-down"
            />
            <div
              className="w-24 h-2 border-r-[100px] border-t-[8px] border-b-[8px] border-transparent border-r-[#140023] -ml-2"
              data-aos="fade-left"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-xl shadow-2xl overflow-hidden aspect-[16/8] transition-all duration-500"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
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
    </div>
  );
};

export default Work;
