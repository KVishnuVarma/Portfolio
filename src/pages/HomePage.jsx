import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import avatar from "../assets/avatar.png";

const TypingEffect = () => {
  const words = ["Vishnu", "a Developer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length); // Switch to next word
    }

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return <span className="typing-text">{text}</span>;
};

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    sessionStorage.setItem("canAccessProjects", "true");
    navigate("/projects");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 md:px-20 relative">
      {/* Glowing Background Animation */}
      <motion.div
        className="absolute w-72 h-72 bg-cyan-400 opacity-30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Avatar Section */}
      <motion.div
        className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <img src={avatar} alt="Vishnu Avatar" className="w-full h-full object-cover" />
      </motion.div>

      {/* Text & Buttons Section */}
      <motion.div
        className="mt-10 md:mt-0 md:ml-16 text-center md:text-left max-w-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-extrabold text-cyan-400">
          Hi, I'm <TypingEffect />
        </h2>
        <p className="text-lg mt-4 text-gray-300">
          A passionate Full Stack Developer specialized in AI/ML, MERN stack, and
          building interactive web applications.
        </p>

        <div className="flex space-x-6 mt-8 justify-center md:justify-start">
          <motion.button
            onClick={handleViewProjects}
            className="px-6 py-3 text-lg font-semibold bg-cyan-500 text-black rounded-lg shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.button>

          <motion.a
            href="https://drive.google.com/file/d/1i7BKZl7CocXI2utIv_keUx8YjK6Sk3FL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
