const Skills = () => {
  const skillData = [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      items: ["PHP", "MySQL", "Database"],
    },
    {
      title: "Languages",
      items: ["Python", "C++"],
    },
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-container">
        {skillData.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.items.map((skill, i) => (
                <span className="skill-item" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;