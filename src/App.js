import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Objective from './components/Objective';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const lightTheme = {
  background: '#f4f6fa',
  color: '#222',
  card: '#fff',
  accent: '#1a2434',
};

const darkTheme = {
  background: '#181920',
  color: '#fafafa',
  card: '#22232a',
  accent: '#6f9df7',
};

const spaceTheme = {
  background: 'radial-gradient(ellipse at top, #1B2735 0%, #090A0F 100%)',
  color: '#fff',
  card: 'rgba(30,50,100,0.18)',
  accent: '#ffd700',
};

function App() {
  const [theme, setTheme] = useState('light');
  const [surprise, setSurprise] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setSurprise(false);
    } else if (theme === 'dark') {
      setTheme('space');
      setSurprise(true);
    } else {
      setTheme('light');
      setSurprise(false);
    }
  };

  const themeObj = theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : spaceTheme;

  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyle />
      <Header />
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      {surprise && (
        <div className="surprise">
          🚀 Welcome to Space Mode!<br/>
          <span role="img" aria-label="stars">✨🌌</span>
        </div>
      )}
      <Objective />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
