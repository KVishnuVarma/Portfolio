const Hero = () => {
    return (
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-50 to-gray-200"
      >
        <h1 className="text-4xl font-bold">
          Hi, I'm <span className="text-blue-600">Vishnu Varma</span>
        </h1>
        <p className="text-lg mt-2 text-gray-600">
          A passionate AI/ML & Full-Stack Developer 🚀
        </p>
        <a
          href="#projects"
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          View My Projects
        </a>
      </section>
    );
  };
  
  export default Hero;
  