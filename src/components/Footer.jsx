import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p>Built with React and JavaScript</p>
      </div>
    </footer>
  );
}
