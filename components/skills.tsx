'use client';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPython,
} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { TbBrandTailwind } from 'react-icons/tb';
import { SiBootstrap, SiMui, SiFigma } from 'react-icons/si';
import { IoShirtOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML', level: 90, icon: <FaHtml5 className="text-[#DD4B25]" /> },
  { name: 'CSS', level: 85, icon: <FaCss3Alt className="text-[#244CDE]" /> },
  { name: 'JavaScript', level: 75, icon: <FaJs className="text-[#EFD81D]" /> },
  { name: 'React.js', level: 80, icon: <FaReact className="text-[#12CEF2]" /> },
  { name: 'Next.js', level: 70, icon: <RiNextjsFill /> },
  {
    name: 'Tailwind CSS',
    level: 80,
    icon: <TbBrandTailwind className="text-[#38BDF8]" />,
  },
  { name: 'Python', level: 80, icon: <FaPython className="text-[#306998]" /> },

  {
    name: 'Bootstrap',
    level: 75,
    icon: <SiBootstrap className="text-[#7952B3]" />,
  },
  {
    name: 'ShadCN UI',
    level: 70,
    icon: <IoShirtOutline className="text-gray-400" />,
  }, // ShadCN has no specific logo, using an outline icon as a placeholder
  { name: 'MUI', level: 85, icon: <SiMui className="text-[#007FFF]" /> },
  { name: 'Git', level: 90, icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: 'Figma', level: 80, icon: <SiFigma className="text-[#F24E1E]" /> },
];

const SkillsSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ once: true }); // Trigger animations only once
  }, []);

  return (
    <div className="p-8 text-center bg-gray-950 text-white">
      {/* <h2
        className="text-3xl font-bold mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        My Skills
      </h2> */}
      <div className="mx-auto w-[220px]">
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
          Skills
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
      <p
        className="m-8"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top"
      >
        The skills, tools and technologies I am really good at:
      </p>

      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top"
        className="grid grid-cols-1 md:grid-cols-3 justify-center items-center place-items-center lg:grid-cols-4"
      >
        {skills.map((skill, index) => (
          <div
            className="w-full  max-w-[350px] mb-4"
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 200}
            // data-aos-duration="800"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <div className="bg-[#111827] rounded-lg m-2 p-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  {skill.icon}
                  <span className="ml-2 font-semibold">{skill.name}</span>
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                  {skill.level}%
                </span>
              </div>
              <div className="relative pt-1">
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-teal-600 h-2 rounded-full transition-all duration-300 hover:bg-teal-700"
                    style={{ width: `${skill.level}%` }}
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay={index * 200}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
