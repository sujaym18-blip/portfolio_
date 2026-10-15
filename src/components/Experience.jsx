import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "DebugShala",
      role: "Full Stack Developer",
      period: "Professional Experience",
      description:
        "Built practical full-stack web applications using modern frontend and backend technologies, with a focus on responsive interfaces and reliable APIs.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      company: "Applatus Technologies Pvt. Ltd.",
      role: "Full Stack Web Developer",
      location: "Indore, MP",
      period: "May - Aug 2025",
      description:
        "Built responsive React.js applications with Tailwind CSS and modern JavaScript. Developed secure Node.js and Express.js REST APIs, designed MongoDB data models with Mongoose, configured deployments with Render and GitHub, and tested endpoints with Postman.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Render",
        "Postman",
      ],
    },
  ];

  return (
    <section
      className="experience"
      id="experience"
    >
      <div className="section-heading">
        <p>PROFESSIONAL EXPERIENCE</p>

        <h2>
          Work <span>Experience</span>
        </h2>

        <p className="heading-description">
          Full-stack development experience building practical web applications.
        </p>
      </div>

      <div className="education-container">
        {experiences.map((experience) => (
          <motion.article
            className="education-card"
            key={experience.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <div className="education-year">{experience.period}</div>

            <div className="education-content">
              <h3>{experience.role}</h3>
              <h4>
                {experience.company}
                {experience.location && ` · ${experience.location}`}
              </h4>

              <p>{experience.description}</p>

              <div className="education-tags">
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
