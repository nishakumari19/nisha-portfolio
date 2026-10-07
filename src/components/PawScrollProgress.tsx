import { useEffect, useState } from 'react';

export const PawScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScrollPercentage(0);
        return;
      }
      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max((currentScroll / totalScroll) * 100, 0), 100);
      setScrollPercentage(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-50 bg-[#efe7dd]/40 dark:bg-[#3e3732]/40 pointer-events-none"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scrollPercentage)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-[#e8833a]/80 via-[#e8833a] to-[#d67228] transition-[width] duration-150 relative"
        style={{ width: `${scrollPercentage}%` }}
      >
        {/* Floating Paw Print at head of progress bar */}
        <div
          className="absolute -right-2.5 -top-2 transform transition-transform duration-150"
          style={{ opacity: scrollPercentage > 1 ? 1 : 0 }}
          aria-hidden="true"
        >
          <svg
            className="w-5 h-5 text-[#974800] dark:text-[#ffb689] drop-shadow-sm rotate-45"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            {/* Paw pad */}
            <ellipse cx="12" cy="15" rx="5" ry="4" />
            {/* Toe 1 */}
            <circle cx="6" cy="9" r="2" />
            {/* Toe 2 */}
            <circle cx="10" cy="6.5" r="2.2" />
            {/* Toe 3 */}
            <circle cx="14" cy="6.5" r="2.2" />
            {/* Toe 4 */}
            <circle cx="18" cy="9" r="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};
