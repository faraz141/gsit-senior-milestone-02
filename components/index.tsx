import Image from 'next/image';
// import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
// import Link from 'next/link';
import React from 'react';
import AboutUs from './about';
import Contact from './contact';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const MyComponent = () => {
  return (
    <div className="bg-gray-950">
      <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center py-0 px-4">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center my-[10px] mx-[40px]">
          {/* Left Side - Text Content */}
          <div className=" w-full h-auto lg:w-[70%] lg:h-[364px] text-start flex flex-col  items-start justify-center my-0 mx-[20px]">
            <h1 className="text-[40px] md:text-5xl lg:text-6xl font-bold text-white my-4">
              Hi, I am Faraz Alam <span className="wave">👋</span>
            </h1>
            <p className="text-[16px] text-[#d1d5db]">
              I’m a JavaScript developer specializing in React.js and Next.js,
              focused on crafting exceptional web applications that are
              user-centric, accessible, and responsive. With over a year of
              experience in developing dynamic applications using TypeScript, I
              am passionate about creating intuitive interfaces and optimizing
              user experiences. My goal is to build solutions that not only meet
              user needs but also enhance overall usability and performance.
            </p>
            <div className="flex flex-col items-start my-8 mx-0">
              <span className="text-[gray]">📍 Karachi, Pakistan</span>
              <span className="text-[#d1d5db]">
                | Available for new projects
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 justify-center">
              <FaTwitter className="h-6 w-6 cursor-pointer text-gray-400 hover:text-blue-500 transition-colors duration-300" />
              <FaGithub className="h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors duration-300" />
              <FaLinkedin className="h-6 w-6 cursor-pointer text-gray-400 hover:text-blue-700 transition-colors duration-300" />
            </div>
          </div>

          {/* Right Side - Profile Image with Frame */}
          <div className="flex items-center justify-center w-full h-[364px] overflow-hidden bg-transparent lg:w-[30%] lg:items-end lg:justify-end">
            <div className="w-[250px] h-[260px] sm:w-[300px] sm:h-[310px] md:w-[260px] md:h-[320px] bg-[#374151]">
              <Image
                src="/images/faraz-fiverr.png" // Replace with the path to your profile image
                alt="Profile Picture"
                width={280}
                height={320}
                className="w-[220px] h-[270px] ml-[15px] mt-[-25px] mr-[10px] border-[10px] border-[#030712] sm:w-[260px] sm:h-[320px] sm:mt[-30px] sm:ml-[20px] md:ml-[-32px] md:mt-[-32px]"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <AboutUs />
      <br />
      <Contact />
    </div>
  );
};

export default MyComponent;
