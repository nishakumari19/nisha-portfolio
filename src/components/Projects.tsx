import { useState } from 'react';
import { ExternalLink, ArrowRight, BookOpen, Sparkles, CheckCircle2, Github } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { CaseStudyModal } from './CaseStudyModal';

export const Projects = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const scrollToDemo = () => {
    const el = document.querySelector('#live-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const standardProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-[#efe7dd] dark:border-[#3e3732]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#e8833a] mb-2 uppercase tracking-wide">
            <span>🐾 Things I&apos;ve built</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1f1b18] dark:text-[#f3efea] tracking-tight">
            Things I&apos;ve built
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#554338] dark:text-[#a39b93] max-w-2xl">
            Real products from my work at Azeosoft and personal projects I built for fun or family.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-10 sm:space-y-12">
          {/* FEATURED PROJECT: Workforce Tracker */}
          {featuredProject && (
            <article className="rounded-2xl bg-white dark:bg-[#2a2522] border-2 border-[#e8833a]/30 dark:border-[#e8833a]/40 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden relative">
              <div className="h-1.5 bg-gradient-to-r from-[#e8833a] via-[#f59e0b] to-[#7a9a8b]" />

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#e8833a]/15 text-[#974800] dark:text-[#ffb689]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{featuredProject.category}</span>
                  </div>
                  {featuredProject.subtitle && (
                    <div className="text-xs font-mono text-[#554338] dark:text-[#a39b93]">
                      {featuredProject.subtitle}
                    </div>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#1f1b18] dark:text-[#f3efea] tracking-tight">
                  {featuredProject.title}
                </h3>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 my-4">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded-lg bg-[#fff8f5] dark:bg-[#1e1b18] text-[#554338] dark:text-[#d5ccc4] border border-[#efe7dd] dark:border-[#3e3732]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
                  <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#554338] dark:text-[#d5ccc4] leading-relaxed">
                    <p>
                      <strong className="text-[#1f1b18] dark:text-[#f3efea]">What I built:</strong>{' '}
                      {featuredProject.builtDetails}
                    </p>
                    {featuredProject.additionalModules && (
                      <p>
                        <strong className="text-[#1f1b18] dark:text-[#f3efea]">Other parts:</strong>{' '}
                        {featuredProject.additionalModules}
                      </p>
                    )}
                  </div>

                  {/* Highlights Box */}
                  {featuredProject.engineeringHighlights && (
                    <div className="lg:col-span-5 p-5 rounded-xl bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] space-y-3">
                      <div className="text-xs font-mono font-semibold text-[#1f1b18] dark:text-[#f3efea]">
                        Key work
                      </div>
                      <ul className="text-xs font-mono text-[#554338] dark:text-[#a39b93] space-y-2">
                        {featuredProject.engineeringHighlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#7a9a8b] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#efe7dd] dark:border-[#3e3732]">
                  {featuredProject.caseStudy && (
                    <button
                      onClick={() => setSelectedCaseStudy(featuredProject)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-[#e8833a] hover:bg-[#d67228] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Read case study</span>
                    </button>
                  )}

                  <button
                    onClick={scrollToDemo}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-[#1f1b18] dark:text-[#f3efea] bg-white dark:bg-[#2a2522] hover:bg-[#efe7dd]/50 dark:hover:bg-[#352f2c] border border-[#efe7dd] dark:border-[#3e3732] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                  >
                    <span>Try the offline queue</span>
                    <ArrowRight className="w-4 h-4 text-[#e8833a]" />
                  </button>

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-[#1f1b18] dark:text-[#f3efea] bg-white dark:bg-[#2a2522] hover:bg-[#efe7dd]/50 dark:hover:bg-[#352f2c] border border-[#efe7dd] dark:border-[#3e3732] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                    >
                      <ExternalLink className="w-4 h-4 text-[#e8833a]" />
                      <span>Live site</span>
                    </a>
                  )}

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-[#1f1b18] dark:text-[#f3efea] bg-white dark:bg-[#2a2522] hover:bg-[#efe7dd]/50 dark:hover:bg-[#352f2c] border border-[#efe7dd] dark:border-[#3e3732] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                    >
                      <Github className="w-4 h-4 text-[#e8833a]" />
                      <span>Source code</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          )}

          {/* STANDARD PROJECTS */}
          {standardProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl bg-white dark:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <span className="text-xs font-mono font-medium text-[#7a9a8b]">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#1f1b18] dark:text-[#f3efea] tracking-tight">
                {project.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 my-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2.5 py-1 rounded-lg bg-[#fff8f5] dark:bg-[#1e1b18] text-[#554338] dark:text-[#d5ccc4] border border-[#efe7dd] dark:border-[#3e3732]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="space-y-3 text-sm sm:text-base text-[#554338] dark:text-[#d5ccc4] leading-relaxed">
                <p>{project.description}</p>

                {project.note && (
                  <p className="text-xs font-mono text-[#974800] dark:text-[#ffb689] bg-[#e8833a]/10 p-2.5 rounded-lg border border-[#e8833a]/30">
                    {project.note}
                  </p>
                )}

                {project.bullets && project.bullets.length > 0 && (
                  <ul className="space-y-1.5 list-disc list-inside text-sm text-[#554338] dark:text-[#a39b93]">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Only render links if liveUrl or githubUrl is present */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="pt-5 mt-4 border-t border-[#efe7dd] dark:border-[#3e3732] flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono text-[#1f1b18] dark:text-[#f3efea] bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] hover:border-[#e8833a]/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#e8833a]" />
                      <span>Live site</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono text-[#1f1b18] dark:text-[#f3efea] bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] hover:border-[#e8833a]/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
                    >
                      <Github className="w-3.5 h-3.5 text-[#e8833a]" />
                      <span>Source code</span>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
        onScrollToDemo={scrollToDemo}
        project={selectedCaseStudy || undefined}
      />
    </section>
  );
};
