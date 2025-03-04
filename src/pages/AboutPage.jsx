import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import avatar from "../assets/avatar.png"; 
const About = () => {
  return (
    <div
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 md:px-20 overflow-hidden"
    >
      <div className="absolute top-10 left-20 w-72 h-72 bg-cyan-400 opacity-30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-pink-500x opacity-30 blur-3xl rounded-full animate-pulse"></div>

      <Tilt
        options={{ max: 15, scale: 1.1, speed: 300 }}
        className="rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/30"
      >
        <motion.div
          className="w-56 h-56 md:w-72 md:h-72"
          initial={{ opacity: 0, rotateY: 180 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src={avatar} alt="My Avatar" className="w-full h-full object-cover" />
        </motion.div>
      </Tilt>

      <motion.div
        className="mt-10 md:mt-0 md:ml-16 max-w-lg p-6 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400">
          About Me
        </h2>
        <p className="text-lg mt-4 text-gray-300 leading-relaxed">
          I’m <span className="text-cyan-400 font-semibold">Vishnu Varma</span>, an aspiring  
          <span className="text-cyan-400 font-semibold"> AI/ML Engineer & Full-Stack Developer</span>  
          passionate about intelligent systems and high-performance web applications.  
        </p>

        <p className="text-lg mt-3 text-gray-300 leading-relaxed">
          From securing **Top Performer in a Hackathon** to building innovative  
          **AI-powered applications**, I push the limits of technology with every project.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
          <motion.a
            href="https://github.com/KVishnuVarma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 text-md font-semibold bg-cyan-500 text-black rounded-lg shadow-lg hover:shadow-cyan-400/50 hover:scale-110 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-xl" /> GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/vishnu-varma-kalidindi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 text-md font-semibold bg-blue-500 text-white rounded-lg shadow-lg hover:shadow-blue-400/50 hover:scale-110 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </motion.a>

          <motion.a
            href="https://www.instagram.com/accounts/edit/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-md font-semibold bg-pink-500 text-white rounded-lg shadow-lg hover:shadow-pink-400/50 hover:scale-110 transition-all duration-300 whitespace-nowrap"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram className="text-xl" /> Instagram
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
