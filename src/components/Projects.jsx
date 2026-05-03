const Projects = () => {
  const projects = [
    {
      title: "Li-Fi Data Transfer",
      description:
        "A hardware-based communication system that uses light to transmit data instead of radio signals. It demonstrates high-speed and secure wireless communication using LEDs and photodiodes.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built using React and Vite. It showcases my projects, skills, and contact information with a clean modern UI.",
      link: "https://github.com/sindhavvirendrasinh25/portfolio",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="card-glass project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;