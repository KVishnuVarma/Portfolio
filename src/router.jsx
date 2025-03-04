import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Navbar from "./components/Navbar"; 
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";
import About from "./pages/AboutPage";
import SkillsPage from "./components/Skills"; 
import Footer from "./components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<SkillsPage />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<About />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
