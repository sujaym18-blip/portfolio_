import { motion } from "framer-motion";


const Projects = () => {
  const projects = [
    {
      title: "ShopSphere",
      description:
        "A full-stack e-commerce platform with product filtering, cart management, order checkout, secure authentication, and Cloudinary media storage.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
      image: "/projects/shopsphere.png",
      live: "https://frontend-pink-five-36.vercel.app",
    },
    {
      title: "Currency Converter",
      description:
        "A responsive currency conversion app that fetches live exchange rates, validates input, and supports swapping currencies.",
      technologies: ["React.js", "Tailwind CSS", "REST API"],
      image: "/projects/currency-converter.png",
      live: "https://currency-conv-livid.vercel.app",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p>MY PROJECTS</p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p className="heading-description">
          Selected full-stack and frontend projects from my development work.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key ={index}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            whileHover={{
              y: -10,
            }}
          >
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt="" />
              </div>
            )}

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((technology, index) => (
                  <span key={index}>{technology}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
