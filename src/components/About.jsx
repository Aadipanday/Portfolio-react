import '../styles/About.css';
import aboutImage from '../assets/Aadi.jpg'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with experience in building modern, responsive applications
              using React and JavaScript. I love creating user-friendly interfaces and solving complex
              problems with elegant solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open source,
              or enjoying the outdoors. I'm always eager to learn and take on new challenges.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">your.email@example.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Your City, Country</span>
              </div>
              <div className="info-item">
                <span className="info-label">Availability:</span>
                <span className="info-value">Open to opportunities</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
