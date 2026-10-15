import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
        id="about"
        className="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
      <div className="about-container">

        <div className="about-image">
          <div className="about-box">
            <h3>MER<span>N</span></h3>
            <p>Full-Stack Developer</p>
          </div>
        </div>

        <div className="about-content">
          <p className="section-subtitle">ABOUT ME</p>

          <h2>
            Passionate about building
            <span> web applications</span>
          </h2>

          <p>
            I'm Sujay Kumar Mishra, a Computer Science graduate and
            full-stack developer specializing in the MERN stack. I build
            responsive web applications and secure REST APIs.
          </p>

          <p>
            My experience includes developing production-ready services,
            integrating JWT authentication, and deploying applications with
            Render and Vercel.
          </p>

          <div className="about-info">
            <div>
              <h4>Education</h4>
              <p>B.Tech, Computer Science</p>
            </div>

            <div>
              <h4>Focus</h4>
              <p>MERN Stack</p>
            </div>

            <div>
              <h4>Goal</h4>
              <p>Rewa, Madhya Pradesh</p>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default About;