import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 text-center py-4">
      <p className="text-sm">
        © {new Date().getFullYear()} Kalidindi Vishnu Datta Raghu Varma.  
        All Rights Reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-2">
        <a
          href="/privacy-policy"
          className="hover:text-cyan-400 transition duration-300"
        >
          Privacy Policy
        </a>
        <span>|</span>
        <a
          href="/terms-of-service"
          className="hover:text-cyan-400 transition duration-300"
        >
          Terms of Service
        </a>
        <span>|</span>
        <a
          href="mailto:kalidindivishnuvarma@gmail.com"
          className="hover:text-cyan-400 transition duration-300"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
