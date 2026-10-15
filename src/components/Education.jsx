const Education = () => {
  return (
    <section className="education" id="education">
      <div className="section-heading">
        <p>MY EDUCATION</p>

        <h2>
          Education & <span>Learning</span>
        </h2>

        <p className="heading-description">
          My academic background and technical learning journey.
        </p>
      </div>

      <div className="education-container">
        <div className="education-card">
          <div className="education-year">
            Aug 2022 - May 2026
          </div>

          <div className="education-content">
            <h3>B.Tech in Computer Science Engineering</h3>

            <h4>Medi-Caps University, Indore</h4>

            <p>
              Graduated with a CGPA of 7.0. Coursework included object-oriented
              programming, operating systems, data structures and algorithms,
              and database management systems.
            </p>

            <div className="education-tags">
              <span>Computer Science</span>
              <span>CGPA: 7.0</span>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="education-year">
            2022
          </div>

          <div className="education-content">
            <h3>Class XII - MPBSE</h3>

            <h4>Saraswati HSS, Mauganj</h4>

            <p>
              Completed higher secondary education with 79%.
            </p>

            <div className="education-tags">
              <span>MPBSE</span>
              <span>79%</span>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="education-year">
            2020
          </div>

          <div className="education-content">
            <h3>Class X - MPBSE</h3>

            <h4>St. Xavier's School, Mauganj</h4>

            <p>
              Completed secondary education with 93%.
            </p>

            <div className="education-tags">
              <span>MPBSE</span>
              <span>93%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;