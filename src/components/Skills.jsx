import { motion } from "framer-motion";
import { FaJs, FaPython, FaReact, FaNode, FaGitAlt, FaGithub, FaFlask, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiExpress, SiMongodb, SiScikitlearn, SiTensorflow, SiTailwindcss, SiFramer } from "react-icons/si";
import { BiCodeBlock } from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const skills = [
  {
    category: "Programming Languages",
    icon: <BiCodeBlock size={30} className="text-cyan-400" />,
    skills: [
      { name: "JavaScript", level: "90%", icon: <FaJs size={22} className="text-yellow-400" /> },
      { name: "Python", level: "85%", icon: <FaPython size={22} className="text-blue-400" /> },
      { name: "C", level: "75%", icon: <SiCplusplus size={22} className="text-blue-500" /> },
    ],
  },
  {
    category: "Frontend Development",
    icon: <HiOutlineDesktopComputer size={30} className="text-pink-400" />,
    skills: [
      { name: "React.js", level: "90%", icon: <FaReact size={22} className="text-blue-400" /> },
      { name: "Tailwind CSS", level: "85%", icon: <SiTailwindcss size={22} className="text-cyan-400" /> },
      { name: "Framer Motion", level: "80%", icon: <SiFramer size={22} className="text-pink-400" /> },
    ],
  },
  {
    category: "Backend Development",
    icon: <FaDatabase size={30} className="text-green-400" />,
    skills: [
      { name: "Node.js", level: "85%", icon: <FaNode size={22} className="text-green-500" /> },
      { name: "Express.js", level: "80%", icon: <SiExpress size={22} className="text-gray-400" /> },
      { name: "MongoDB", level: "75%", icon: <SiMongodb size={22} className="text-green-500" /> },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: <FaFlask size={30} className="text-orange-400" />,
    skills: [
      { name: "TensorFlow", level: "80%", icon: <SiTensorflow size={22} className="text-orange-400" /> },
      { name: "Scikit-Learn", level: "85%", icon: <SiScikitlearn size={22} className="text-yellow-400" /> },
      { name: "Pandas & NumPy", level: "90%", icon: <FaPython size={22} className="text-blue-400" /> },
    ],
  },
  {
    category: "Tools & Others",
    icon: <FaGitAlt size={30} className="text-red-400" />,
    skills: [
      { name: "Git & GitHub", level: "95%", icon: <FaGithub size={22} className="text-gray-300" /> },
      { name: "Postman", level: "80%", icon: <FaFlask size={22} className="text-orange-400" /> },
    ],
  },
];

const SkillsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-10 pt-24">
      <motion.h1
        className="text-5xl font-extrabold text-cyan-400 mb-12 text-center shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        💡 My <span className="text-pink-400">Skills</span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 bg-opacity-50 rounded-xl shadow-2xl p-6 relative group transform transition duration-300 hover:scale-105 hover:bg-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h2 className="text-2xl font-bold text-cyan-300">{category.category}</h2>
            </div>

            {category.skills.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {skill.icon}
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-gray-300">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                  <motion.div
                    className="bg-gradient-to-r from-cyan-400 to-pink-400 h-2 rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={() => window.history.back()}
        className="mt-12 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-pink-500 text-black rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🔙 Go Back
      </motion.button>
    </div>
  );
};

export default SkillsPage;
