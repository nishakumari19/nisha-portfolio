import type { MouseEvent } from 'react';

export const Footer = () => {
  const scrollTo = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[#efe7dd] dark:border-[#3e3732] bg-[#fff8f5] dark:bg-[#1e1b18] py-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#554338] dark:text-[#a39b93]">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="text-[#e8833a] select-none text-base">🐾</span>
            <p>
              &quot;Built with care (and supervised by cats).&quot; &copy; 2026 Nisha Kumari.
            </p>
          </div>

          {/* Footer Nav Links */}
          <nav className="flex items-center gap-6 font-medium">
            <a
              href="#projects"
              onClick={scrollTo('#projects')}
              className="hover:text-[#e8833a] dark:hover:text-[#ffb689] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a] rounded py-0.5 px-1"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={scrollTo('#experience')}
              className="hover:text-[#e8833a] dark:hover:text-[#ffb689] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a] rounded py-0.5 px-1"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="hover:text-[#e8833a] dark:hover:text-[#ffb689] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a] rounded py-0.5 px-1"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
