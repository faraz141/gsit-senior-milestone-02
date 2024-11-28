import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';

const skills = [
  { name: 'HTML', level: 90, icon: <FaHtml5 className="text-[#DD4B25]" /> },
  { name: 'CSS', level: 85, icon: <FaCss3Alt className="text-[#244CDE]" /> },
  { name: 'JavaScript', level: 75, icon: <FaJs className="text-[#EFD81D]" /> },
  { name: 'React.js', level: 80, icon: <FaReact className="text-[#12CEF2]" /> },
  {
    name: 'Next.js',
    level: 70,
    icon: <RiNextjsFill />,
  },
];

const SkillsSection = () => {
  return (
    <div className="p-8 text-center bg-gray-950 text-white">
      <h2 className="text-3xl font-bold mb-4">My Skills</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-start">
        {skills.map((skill, index) => (
          <div className="w-full max-w-[250px] mb-4 " key={index}>
            <motion.div
              className=" bg-[#111827] rounded-lg m-2 p-4"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
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
                <motion.div
                  className="bg-gray-200 rounded-full h-2"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 2.5 }}
                >
                  <div className="bg-teal-600 h-2 rounded-full transition-all duration-300 hover:bg-teal-700"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
