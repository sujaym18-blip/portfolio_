import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroPhoto from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-greeting">Hi, I'm</p>

        <h1>
          Sujay <span>Kumar Mishra</span>
        </h1>

        <h2>
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "React & Node.js Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="hero-description">
          B.Tech Computer Science graduate and full-stack developer building
          secure, scalable web applications with React, Node.js, and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            View Resume
          </a>

          <a href="/resume.pdf" download className="download-btn">
            Download Resume
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/sujaym18-blip"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sujay-mishra-b6a8ba374"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="profile-circle">
          <img src={heroPhoto} alt="Sujay Kumar Mishra" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
