import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';
import AboutUs from './about';
import Contact from './contact';

const MyComponent = () => {
  return (
    <div className="bg-gray-950">
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="bg-gray-900 rounded-lg p-8 md:p-16 flex flex-col items-center justify-center md:flex-row">
          <div className="text-white text-left mt-24 md:w-1/2 md:pr-16">
            <h1 className="text-4xl mb-4">
              I am{' '}
              <span className="text-yellow-500 font-bold ml-2">FARAZ ALAM</span>
            </h1>
            <p className="mb-8">Front-end Web Developer</p>
            <p className="mb-8">React.js | Next.js | Typescript</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded transition duration-700 hover:scale-90">
              <Link href="/contact">Contact Us</Link>
            </button>
            <div className="flex justify-center mt-12 space-x-6 mb-4 sm:-ml-40">
              <Link
                href="https://github.com/faraz141"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-yellow-400 text-3xl hover:text-yellow-600 transition duration-700 hover:scale-125" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/faraz-alam-89a923296/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-yellow-400 text-3xl hover:text-yellow-600 transition duration-700 hover:scale-125 " />
              </Link>
              <Link
                href="https://www.facebook.com/faraz.alam.14203544"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-yellow-400 text-3xl hover:text-yellow-600 transition duration-700 hover:scale-125" />
              </Link>
              <Link
                href="https://www.instagram.com/farazalam857/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-yellow-400 text-3xl hover:text-yellow-600 transition duration-700 hover:scale-125" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 pl-20 md:mt-0 ">
            <div className="absolute top-0 left-0" />
            <Image
              src={'/images/faraz-fiverr.png'}
              alt="About-Us"
              width={400}
              height={300}
              className=" m-5w-full h-full border-4 border-yellow-500 rounded-custom-1 transition duration-700 hover:scale-110 "
            />
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
