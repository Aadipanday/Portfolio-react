import '../styles/Hero.css';
import heroImage from '../assets/Aadi.jpg';

export default function Hero() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm a Developer</h1>
        <p className="hero-subtitle">
          Building beautiful and functional web experiences with React and JavaScript
        </p>
        <button onClick={() => scrollToSection('contact')} className="cta-button">Get In Touch</button>
      </div>
      <div className="hero-animation">
        <div className="floating-shape">
          <img src={heroImage} alt="Aditya's Image" className='hero-image'/>
        </div>
      </div>
    </section>
  );
}
