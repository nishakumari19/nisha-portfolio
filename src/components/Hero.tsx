import type { MouseEvent } from 'react';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { CatMascot } from './CatMascot';

export const Hero = () => {
  const scrollToProjects = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Background warm ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#e8833a]/10 via-[#c5e7d6]/10 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#c5e7d6]/40 dark:bg-[#466557]/30 text-[#466557] dark:text-[#a5d6be] border border-[#7a9a8b]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#466557] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#466557]"></span>
              </span>
              <span>Open to full-stack roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#1f1b18] dark:text-[#f3efea] leading-[1.12] text-balance">
              Full-stack dev who ships <span className="text-[#e8833a]">unusual things</span> (and loves cats).
            </h1>

            {/* Subline */}
            <p className="text-lg sm:text-xl text-[#554338] dark:text-[#a39b93] leading-relaxed max-w-2xl">
              I build MERN web apps, offline sync features, and desktop tools, from employee trackers to e-commerce admin systems.
            </p>

            {/* Short Intro Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] shadow-sm text-sm sm:text-base text-[#554338] dark:text-[#d5ccc4] leading-relaxed relative">
              <div className="flex gap-3">
                <span className="text-xl shrink-0 select-none" aria-hidden="true">🐱</span>
                <p>
                  Hi! I&apos;m Nisha, a MERN developer. I started as a trainee at Azeosoft in Oct 2025 and now work here full-time, building things like a cross-platform desktop tracker. When I&apos;m not debugging sync queues, I&apos;m taking care of my cats.
                </p>
              </div>
            </div>

            {/* Actions & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* View my work */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-[#e8833a] hover:bg-[#d67228] transition-all shadow-sm hover:shadow-md active:scale-95 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#e8833a]"
              >
                <span>View my work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Download resume */}
              <a
                href="/Nisha_Kumari_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-[#1f1b18] dark:text-[#f3efea] bg-white dark:bg-[#2a2522] hover:bg-[#efe7dd]/50 dark:hover:bg-[#352f2c] border border-[#efe7dd] dark:border-[#3e3732] transition-all shadow-sm text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#e8833a]"
              >
                <Download className="w-4 h-4 text-[#e8833a]" />
                <span>Download resume</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/nishakumari19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-[#554338] dark:text-[#a39b93] hover:text-[#1f1b18] dark:hover:text-[#f3efea] hover:bg-white dark:hover:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                  aria-label="GitHub profile: nishakumari19"
                  title="GitHub profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nisha-kumari-930378226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-[#554338] dark:text-[#a39b93] hover:text-[#1f1b18] dark:hover:text-[#f3efea] hover:bg-white dark:hover:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                  aria-label="LinkedIn profile: nisha-kumari-930378226"
                  title="LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Cat Mascot Illustration & Floating Tech Chips */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
              {/* Soft decorative background circles */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-b from-[#ffdbc7]/50 to-[#fff8f5]/20 dark:from-[#352f2c] dark:to-[#1e1b18] -z-10 border border-[#efe7dd]/80 dark:border-[#3e3732]/60" />

              {/* Mascot */}
              <div className="w-11/12 h-11/12 flex items-center justify-center">
                <CatMascot className="w-full h-full max-h-[340px]" />
              </div>

              {/* Floating Tech Chip 1: Node.js / Express */}
              <div
                className="absolute -top-1 left-2 sm:-left-3 bg-white/95 dark:bg-[#2a2522]/95 backdrop-blur-sm border border-[#efe7dd] dark:border-[#3e3732] shadow-md rounded-xl px-3.5 py-1.5 flex items-center gap-2 transform -rotate-3 hover:rotate-0 transition-transform duration-200 select-none"
                style={{ animation: 'float 4s ease-in-out infinite' }}
              >
                <span className="w-2 h-2 rounded-full bg-[#7a9a8b]" />
                <span className="font-mono text-xs font-medium text-[#1f1b18] dark:text-[#f3efea]">
                  Node.js / Express
                </span>
              </div>

              {/* Floating Tech Chip 2: React.js */}
              <div
                className="absolute top-1/2 -right-3 sm:-right-6 bg-white/95 dark:bg-[#2a2522]/95 backdrop-blur-sm border border-[#efe7dd] dark:border-[#3e3732] shadow-md rounded-xl px-3.5 py-1.5 flex items-center gap-2 transform rotate-2 hover:rotate-0 transition-transform duration-200 select-none"
                style={{ animation: 'float 4.5s ease-in-out infinite 0.5s' }}
              >
                <span className="w-2 h-2 rounded-full bg-[#e8833a]" />
                <span className="font-mono text-xs font-medium text-[#1f1b18] dark:text-[#f3efea]">
                  React.js
                </span>
              </div>

              {/* Floating Tech Chip 3: Offline Sync */}
              <div
                className="absolute -bottom-2 left-6 sm:left-4 bg-white/95 dark:bg-[#2a2522]/95 backdrop-blur-sm border border-[#efe7dd] dark:border-[#3e3732] shadow-md rounded-xl px-3.5 py-1.5 flex items-center gap-2 transform -rotate-2 hover:rotate-0 transition-transform duration-200 select-none"
                style={{ animation: 'float 5s ease-in-out infinite 1s' }}
              >
                <span className="w-2 h-2 rounded-full bg-[#9a8eb8]" />
                <span className="font-mono text-xs font-medium text-[#1f1b18] dark:text-[#f3efea]">
                  Offline Sync
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
