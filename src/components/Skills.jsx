import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "C++",
      category: "Languages",
      mark: "C++",
    },
    {
      name: "JavaScript (ES6+)",
      category: "Languages",
      image: "/skills/javascript.png",
    },
    {
      name: "SQL",
      category: "Languages & Databases",
      mark: "SQL",
    },
    {
      name: "HTML & CSS",
      category: "Frontend",
      image: "/skills/html5.png",
    },
    {
      name: "React.js",
      category: "Frontend",
      image: "/skills/react.png",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      image: "/skills/css.png",
    },
    {
      name: "Node.js",
      category: "Backend",
      image: "/skills/node.png",
    },
    {
      name: "Express.js",
      category: "Backend",
      image: "/skills/express.png",
    },
    {
      name: "REST APIs & Middleware",
      category: "Backend",
      mark: "API",
    },
    {
      name: "MongoDB",
      category: "Database",
      image: "/skills/mongodb.png",
    },
    {
      name: "Mongoose & MySQL",
      category: "Database",
      mark: "DB",
    },
    {
      name: "JWT & bcrypt",
      category: "Security",
      mark: "JWT",
    },
    {
      name: "Cloudinary",
      category: "Media",
      mark: "CL",
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      image: "/skills/git.png",
    },
    {
      name: "Postman",
      category: "Tools",
      mark: "P",
    },
    {
      name: "Vercel, Render & Atlas",
      category: "Deployment",
      mark: "DEP",
    },
  ];

  return (
    <section className="skills" id="skills">

      <div className="section-heading">
        <p>MY SKILLS</p>

        <h2>
          Technologies I <span>work with</span>
        </h2>

        <p className="heading-description">
          My technical toolkit for building, securing, and deploying full-stack applications.
        </p>
      </div>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <motion.div
              className="skill-card"
              key={index}
              whileHover={{
              scale: 1.08,
              y: -8,
            }}
              whileInView={{
              opacity: 1,
              y: 0,
            }}
              initial={{
              opacity: 0,
              y: 50,
              }}
              viewport={{ once: true }}
              transition={{
              duration: 0.4,
              }}
            >

            <div className="skill-icon">
              {skill.image ? (
                <img src={skill.image} alt="" />
              ) : (
                <span aria-hidden="true">{skill.mark}</span>
              )}
            </div>

            <div className="skill-details">
              <h3>{skill.name}</h3>

              <p>{skill.category}</p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Skills;