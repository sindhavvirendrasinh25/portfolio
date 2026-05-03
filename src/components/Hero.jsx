import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../assets/resume.pdf";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">

      <div className="hero-left">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Hi, I'm <span>Virendra</span>
        </motion.h1>

        <h2>Frontend Developer</h2>
        <p>I build modern and responsive web applications.</p>

        <div>
          <button className="btn" onClick={scrollToProjects}>
            View Projects
          </button>

          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="btn">Download Resume</button>
          </a>
        </div>

        {/* ✅ CLICKABLE ICONS */}
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/virendrasinh-sindhav-341b13387"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/sindhavvirendrasinh25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="hero-right">
      <img src="/portfolio/profile.png" alt="profile" />
      </div>

    </section>
  );
};

export default Hero;