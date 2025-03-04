import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-lg text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-3xl font-bold text-cyan-400 tracking-wide">
              Vishnu.
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Skills", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-lg font-semibold text-white hover:text-blue-400 transition-all duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            className="md:hidden text-cyan-400 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black bg-opacity-90 backdrop-blur-md text-white p-4"
        >
          <div className="space-y-3">
            {["Home", "About", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block text-lg font-medium text-white hover:text-blue-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
