import { useState, MouseEvent } from 'react';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar = ({ darkMode, onToggleTheme }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Live Demo', href: '#live-demo' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#fff8f5]/90 dark:bg-[#1e1b18]/90 border-b border-[#efe7dd] dark:border-[#3e3732] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-[#1f1b18] dark:text-[#f3efea] focus-visible:ring-2 focus-visible:ring-[#e8833a] rounded-lg px-1 py-0.5"
        >
          <span className="text-[#e8833a] group-hover:rotate-12 transition-transform inline-block">🐾</span>
          <span>Nisha Kumari</span>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#554338] dark:text-[#a39b93]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#e8833a] dark:hover:text-[#ffb689] transition-colors duration-150 py-1 focus-visible:ring-2 focus-visible:ring-[#e8833a] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Theme Toggle & Resume CTA) */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl text-[#554338] dark:text-[#a39b93] hover:text-[#1f1b18] dark:hover:text-[#f3efea] hover:bg-[#efe7dd]/50 dark:hover:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-[#e8833a]" />
            ) : (
              <Moon className="w-4 h-4 text-[#554338]" />
            )}
          </button>

          {/* Resume Button */}
          <a
            href="/Nisha_Kumari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl text-white bg-[#e8833a] hover:bg-[#d67228] transition-all shadow-sm hover:shadow active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e8833a]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#554338] dark:text-[#a39b93] hover:bg-[#efe7dd]/50 dark:hover:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] focus-visible:ring-2 focus-visible:ring-[#e8833a]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#efe7dd] dark:border-[#3e3732] bg-[#fff8f5] dark:bg-[#1e1b18] px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-[#1f1b18] dark:text-[#f3efea] hover:bg-[#efe7dd]/60 dark:hover:bg-[#2a2522]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#efe7dd]/60 dark:border-[#3e3732]/60">
            <a
              href="/Nisha_Kumari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-xl text-white bg-[#e8833a] hover:bg-[#d67228]"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
