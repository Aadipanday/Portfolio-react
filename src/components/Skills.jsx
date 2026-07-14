import '../styles/Skills.css';

const skillsData = {
  'Frontend': ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
  'Backend': ['Node.js', 'Express', 'REST APIs', 'Database Design'],
  'Tools': ['Git', 'Webpack', 'Vite', 'npm', 'VS Code']
};

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-list">
                {skills.map((skill, idx) => (
                  <span key={idx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
