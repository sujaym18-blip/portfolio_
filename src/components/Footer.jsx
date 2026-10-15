const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            Sujay<span>.</span>
          </h2>

          <p>
            Full-stack developer building secure, scalable web applications.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>

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

          <a href="mailto:kumars302003@gmail.com">
            Email: kumars302003@gmail.com
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sujay Kumar Mishra. All rights reserved.
        </p>

        <p>
          Built with React.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;