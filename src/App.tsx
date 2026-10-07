import { useState, useEffect } from 'react';
import { PawScrollProgress } from './components/PawScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { LiveDemo } from './components/LiveDemo';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Theme state initialized from localStorage or system preference with try/catch
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('nisha_portfolio_theme');
      if (stored !== null) {
        return stored === 'dark';
      }
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } catch {
      // Fallback if localStorage is restricted
    }
    return false;
  });

  // Apply dark mode class to documentElement whenever state changes
  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('nisha_portfolio_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('nisha_portfolio_theme', 'light');
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f5] dark:bg-[#1e1b18] text-[#1f1b18] dark:text-[#f3efea] transition-colors duration-200">
      {/* Paw scroll progress bar */}
      <PawScrollProgress />

      {/* Navigation Bar */}
      <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Projects />
        <div id="offline-demo">
          <LiveDemo />
        </div>
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
