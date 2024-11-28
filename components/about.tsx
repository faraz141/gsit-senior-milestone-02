'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// 14.2.16

// components/AboutUs.tsx
const AboutUs = () => {
  return (
    <section className="about flex flex-col items-center justify-center bg-gray-900 text-center py-10 px-5 ">
      <h2 className="text-2xl font-bold text-white text-center mb-6 w-[200px] py-2 bg-gray-950 rounded-2xl">
        About <span className="text-yellow-500">Me</span>
      </h2>
      <div className="about-content flex flex-wrap items-center justify-center ml-20">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={'/images/faraz-fiverr.png'}
            alt="About Us"
            width={400}
            height={300}
            className="rounded-custom-1 m-5 transition duration-700 hover:scale-90"
          />
        </motion.div>
        <div className="about-text max-w-xl m-5 text-left text-[14px] font-normal  text-white">
          <h3 className="font-semibold text-3xl">
            Curious about me? Here You Have it:
          </h3>
          <p className="m-2">
            I am a passionate, self-proclaimed web developer who specializes in
            UI / UX Designing and Web Development (React.js & Next.js). I am
            very enthusiastic about bringing the technical and visual aspects of
            digital products to life. User experience, pixel perfect design, and
            writing clear, readable, highly performant code matters to me.
          </p>
          <p className="m-2">
            I have started my journey over a year back as a web designer and a
            web developer in 2023, and since then, I have continued to grow and
            evolve as a designer and a developer, taking on new challenges and
            learning the latest technologies along the way.
          </p>
          <p className="m-2">
            I am trying to learn and evolve everyday by taking up new challenges
            and learning new things on a day to day basis. I love learning about
            user psychology and make a valuable user experience for all type of
            users.
          </p>
          <p className="m-2">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="m-2">
            Finally some quick bits about me,
            <ul>
              <li>Tech Geek</li>
              <li>Freelancer</li>
              <li>Ui/Ux Designer</li>
            </ul>
          </p>
          <p className="m-2">
            One last thing, I am available for freelance work, so feel free to
            reach out and say hello! I promise I don not bite 😉
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600  mt-6 text-gray-900 font-bold py-2 px-4 rounded transition duration-700 hover:scale-90">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
