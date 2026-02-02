import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Publications />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
        <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <p>© {new Date().getFullYear()} Portfolio. Built with React.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
