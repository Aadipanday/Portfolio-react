import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: 'GitHub Profile Finder',
    description: 'A modern React application with beautiful UI and smooth interactions',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: '#',
    github: 'https://github.com/Aadipanday/Github-Profile-Finder'
  },
  {
    id: 2,
    title: 'Currency Converter',
    description:  'A React app that converts global currencies in real time using API integration.',
    technologies: ['React','JavaScript', 'CSS'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'PostApp',
    description: ' A full‑stack MERN application for creating, managing, and interacting with user posts.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: 'https://github.com/Aadipanday/PostApp'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link">View Live</a>
                <a href={project.github} className="project-link github">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
