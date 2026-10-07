import { useEffect, useRef } from 'react';
import { X, Layers, ShieldCheck, Zap } from 'lucide-react';
import { Project } from '../data/projects';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToDemo: () => void;
  project?: Project;
}

export const CaseStudyModal = ({
  isOpen,
  onClose,
  onScrollToDemo,
  project,
}: CaseStudyModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    closeBtnRef.current?.focus();

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white dark:bg-[#2a2522] rounded-2xl border border-[#efe7dd] dark:border-[#3e3732] shadow-2xl overflow-hidden my-8"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#efe7dd] dark:border-[#3e3732] bg-[#fff8f5] dark:bg-[#1e1b18]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#e8833a] font-semibold mb-1">
              <span>{caseStudy.category}</span>
            </div>
            <h2
              id="case-study-title"
              className="text-2xl font-bold text-[#1f1b18] dark:text-[#f3efea]"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="p-2 rounded-xl text-[#554338] dark:text-[#a39b93] hover:text-[#1f1b18] dark:hover:text-[#f3efea] hover:bg-[#efe7dd]/50 dark:hover:bg-[#352f2c] focus-visible:ring-2 focus-visible:ring-[#e8833a] transition-colors"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-[#fff8f5] dark:bg-[#1e1b18] text-[#554338] dark:text-[#d5ccc4] border border-[#efe7dd] dark:border-[#3e3732]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Section 1: Problem */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1f1b18] dark:text-[#f3efea]">
              <Layers className="w-4 h-4 text-[#e8833a]" />
              <h3>The challenge</h3>
            </div>
            <p className="text-sm sm:text-base text-[#554338] dark:text-[#a39b93] leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          {/* Section 2: What I built */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1f1b18] dark:text-[#f3efea]">
              <ShieldCheck className="w-4 h-4 text-[#7a9a8b]" />
              <h3>What I built</h3>
            </div>
            <ul className="text-sm sm:text-base text-[#554338] dark:text-[#a39b93] leading-relaxed space-y-2 list-disc list-inside">
              {caseStudy.builtItems.map((item) => (
                <li key={item.label}>
                  <strong className="text-[#1f1b18] dark:text-[#f3efea]">{item.label}:</strong>{' '}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Hardest Challenge (only rendered if non-empty) */}
          {caseStudy.hardestChallenge && caseStudy.hardestChallenge.trim().length > 0 && (
            <div className="space-y-3 p-4 rounded-xl bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732]">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1f1b18] dark:text-[#f3efea]">
                <Zap className="w-4 h-4 text-[#9a8eb8]" />
                <h3>Hardest challenge</h3>
              </div>
              <p className="text-sm sm:text-base text-[#554338] dark:text-[#a39b93] leading-relaxed">
                {caseStudy.hardestChallenge}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-[#efe7dd] dark:border-[#3e3732] bg-[#fff8f5] dark:bg-[#1e1b18] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onScrollToDemo();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#e8833a] hover:bg-[#d67228] transition-colors focus-visible:ring-2 focus-visible:ring-[#e8833a]"
          >
            <span>Try the offline queue</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-[#554338] dark:text-[#a39b93] hover:text-[#1f1b18] dark:hover:text-[#f3efea] border border-[#efe7dd] dark:border-[#3e3732] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
