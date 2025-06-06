'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      offset: 200,
      once: true,
      mirror: true,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="about flex flex-col items-center justify-center bg-gray-900 text-center py-10 px-5">
      <div className="mx-auto w-[220px]">
        <h1
          className="text-[40px] font-bold text-center my-[20px] leading-[0] font-[custom3] text-[#CC8B00]"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
        >
          About Me
        </h1>
        <div className="flex justify-center items-center w-[220px] mx-auto">
          <div
            className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[100px] border-l-[#374151] border-b-[8px] border-b-transparent -mr-[10px]"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="800"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          ></div>
          <div
            className="w-[20px] h-[20px] rounded-full bg-[#374151]"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          ></div>
          <div
            className="w-0 h-0 border-t-[8px] border-t-transparent border-r-[100px] border-r-[#374151] border-b-[8px] border-b-transparent -ml-[10px]"
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

      <div className="about-content flex flex-col md:flex-row items-center justify-center my-6 md:ml-20">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
          className="mx-20"
        >
          <Image
            src={'/images/faraz-fiverr.png'}
            alt="About Us"
            width={280}
            height={320}
            className="rounded-custom-1 transition duration-700 flex hover:scale-90"
          />
        </div>
        <div
          className="about-text max-w-xl m-5 px-9 text-left text-[14px] font-normal text-white"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
        >
          <h3 className="font-semibold text-3xl">
            Curious about me? Here You Have it:
          </h3>
          <p className="m-2">
            I am a passionate, self-proclaimed web developer who specializes in
            UI / UX Designing and Web Development (React.js & Next.js). I am
            very enthusiastic about bringing the technical and visual aspects of
            digital products to life. User experience, pixel-perfect design, and
            writing clear, readable, highly performant code matter to me.
          </p>
          <p className="m-2">
            I started my journey as a web designer and developer in 2023. Since
            then, I have continued to grow and evolve, taking on new challenges
            and learning the latest technologies along the way.
          </p>
          <p className="m-2">
            I love learning about user psychology and creating valuable user
            experiences for all types of users.
          </p>
          <p className="m-2">
            Finally, some quick bits about me:
            <ul className="ml-5 space-y-1">
              <li className="flex items-start gap-2">
                <span>💡</span>
                <span>Tech Geek</span>
              </li>
              <li className="flex items-start gap-2">
                <span>💼</span>
                <span>Freelancer</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎨</span>
                <span>UI/UX Designer</span>
              </li>
            </ul>
          </p>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 mt-6 text-gray-900 font-bold py-2 px-4 rounded transition duration-700 hover:scale-90"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
 