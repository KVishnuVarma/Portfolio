import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HackerrankImage from "../assets/Hackerrank.png";
import StockImage from "../assets/Stock.png";
import CompilerImage from "../assets/Desgin.png";
import VoicePaymentImage from "../assets/Voice_paymen.png";
import PortfolioImage from "../assets/Portfoilio.png";
import TodoImage from "../assets/Todo.png";

const projects = [
  {
    name: "HackerRank Clone",
    link: "https://github.com/KVishnuVarma/team-project.git",
    image: HackerrankImage,
    description: "A coding platform clone with live code execution.",
  },
  {
    name: "Stock Prediction",
    link: "https://github.com/KVishnuVarma/stock-predicts.git",
    image: StockImage,
    description: "Machine learning-based stock price prediction.",
  },
  {
    name: "Compiler Design",
    link: "https://github.com/KVishnuVarma/Compiler_Desgin.git",
    image: CompilerImage,
    description: "A compiler project with API execution.",
  },
  {
    name: "Voice Recognition on Payments",
    link: "https://github.com/KVishnuVarma/Login.git",
    image: VoicePaymentImage,
    description: "A voice authentication-based payment system.",
  },
  {
    name: "Portfolio Website",
    link: "https://github.com/KVishnuVarma/PORTFOLIO-USING-HTML-CSS.git",
    image: PortfolioImage,
    description: "A modern animated portfolio website.",
  },
  {
    name: "Todo App",
    link: "https://github.com/KVishnuVarma/Todo-App.git",
    image: TodoImage,
    description: "A simple task management app.",
  },
];

const ProjectsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasAccess = sessionStorage.getItem("canAccessProjects") === "true";
    if (!hasAccess) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-10 relative pt-24">
      
      <motion.div 
        className="absolute inset-0 w-full h-full bg-fixed backdrop-blur-md"
        animate={{ opacity: [0, 1], backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />

      <motion.h1
        className="text-5xl font-extrabold text-cyan-400 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚀 My Projects & Contributions
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 bg-opacity-50 rounded-xl shadow-xl overflow-hidden relative group transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
          >
            <div className="relative w-full h-52 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-lg font-bold text-cyan-300">{project.name}</h2>
                <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition-transform duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View on GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={() => navigate("/")}
        className="mt-12 px-6 py-3 text-lg font-semibold bg-cyan-500 text-black rounded-lg shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🔙 Go Back
      </motion.button>
    </div>
  );
};

export default ProjectsPage;
