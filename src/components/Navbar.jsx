import { useState , useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        Sujay<span>.</span>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a
          href="#home"
          className={active === "home" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={active === "about" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#skills"
          className={active === "skills" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={active === "projects" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#experience"
          className={active === "experience" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Experience
        </a>
        <a
          href="#education"
          className={active === "education" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Education
        </a>
        <a
          href="#contact"
          className={active === "contact" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>

      <a href="#contact" className="nav-btn">
        Let's Talk
      </a>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
