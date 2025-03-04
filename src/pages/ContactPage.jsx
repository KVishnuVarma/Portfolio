import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com"; 
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        "your_service_id", 
        "your_template_id", 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "your_public_key" 
      );

      if (response.status === 200) {
        alert("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send the message. Please try again later.");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      alert("❌ Something went wrong. Please check your connection.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-10 relative pt-24">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/contact-bg.jpg')] bg-cover bg-no-repeat"></div>

      <motion.h1
        className="text-5xl font-extrabold text-cyan-400 mb-12 relative z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📩 Get in Touch
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-xl w-full max-w-2xl z-10 backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-4">
          <label className="block text-cyan-300 text-lg font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-cyan-300 text-lg font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          />
        </div>

        <div className="mb-6">
          <label className="block text-cyan-300 text-lg font-semibold">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg shadow-lg hover:bg-cyan-600 transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Send Message
        </motion.button>
      </motion.form>

      <div className="mt-12 flex space-x-6 z-10">
        <motion.a
          href="mailto:kalidindivishnuvarma@gmail.com"
          className="text-cyan-400 text-3xl hover:text-cyan-500 transition-transform duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaEnvelope />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/vishnu-varma-kalidindi"
          className="text-cyan-400 text-3xl hover:text-cyan-500 transition-transform duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/KVishnuVarma"
          className="text-cyan-400 text-3xl hover:text-cyan-500 transition-transform duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
