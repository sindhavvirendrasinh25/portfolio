const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <div className="about-container card-glass">
        <div className="about-img">
        <img src="/portfolio/profile.png" alt="profile" className="about-img" />
        </div>

        <div className="about-text">
          <p>
  I am a Computer Engineering student passionate about building modern and
  user-friendly web applications. I work with technologies like React,
  JavaScript, PHP, and databases, and I enjoy creating clean and responsive
  interfaces. I am continuously learning and improving my skills to grow as a
  full-stack developer.
</p>
        </div>
      </div>
    </section>
  );
};

export default About;