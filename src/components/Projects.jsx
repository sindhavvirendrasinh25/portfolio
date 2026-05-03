const Projects = () => {
  const projects = [
    {
      title: "LiFi Data Transfer System",
      desc: "Developed a hardware-based communication system using LiFi technology, where data is transmitted through light instead of radio waves. The system uses an LED to transmit data and a photodiode to receive and decode signals, ensuring fast and secure communication. This project strengthened my understanding of embedded systems and real-time data transmission.",
      tech: "Arduino, LED, Photodiode, Embedded Systems",
      type: "Hardware Project",
    },
    {
      title: "Portfolio Website",
      desc: "Designed and developed a modern personal portfolio using React to showcase my skills and projects. It features a responsive layout, reusable components, and smooth navigation, demonstrating strong frontend development and UI design skills.",
      tech: "React, JavaScript, CSS",
      link: "https://github.com/sindhavvirendrasinh25",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <h3>{p.title}</h3>

            <p>{p.desc}</p>

            <p className="tech">
              <strong>Tech Used:</strong> {p.tech}
            </p>

            {/* BUTTON LOGIC */}
            {p.type ? (
              <button className="btn disabled">{p.type}</button>
            ) : (
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <button className="btn">View Repo</button>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;