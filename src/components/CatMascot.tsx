import { useState } from 'react';

interface CatMascotProps {
  className?: string;
  isPurring?: boolean;
}

export const CatMascot = ({ className = '' }: CatMascotProps) => {
  const [purrText, setPurrText] = useState<string | null>(null);

  const handlePet = () => {
    const purrs = [
      'purr... 🐾',
      'offline queue verified ✓',
      'meow! happy coding ✨',
      'purrr... sync running clean',
      'salmon crunchies accepted 🐟',
    ];
    const pick = purrs[Math.floor(Math.random() * purrs.length)];
    setPurrText(pick);
    setTimeout(() => setPurrText(null), 2400);
  };

  return (
    <div
      className={`relative group inline-block select-none cursor-pointer ${className}`}
      onClick={handlePet}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handlePet();
        }
      }}
      aria-label="Cat developer mascot. Click to pet."
    >
      {/* Speech bubble on pet (Click reaction) */}
      {purrText ? (
        <div
          className="absolute -top-11 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-[#2a2522]/95 backdrop-blur-md text-[#974800] dark:text-[#ffb689] border border-[#e8833a]/40 shadow-lg rounded-full px-4 py-1.5 text-xs font-mono font-semibold z-30 animate-bounce whitespace-nowrap"
          role="status"
        >
          {purrText}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-[#2a2522] border-r border-b border-[#e8833a]/40 rotate-45" />
        </div>
      ) : (
        /* Custom hover tooltip popup */
        <div
          className="absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-200 pointer-events-none transform translate-y-1 group-hover:translate-y-0 z-30"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#2a2522]/95 backdrop-blur-md border border-[#e8833a]/30 dark:border-[#e8833a]/40 shadow-md text-xs font-mono font-medium text-[#974800] dark:text-[#ffb689] whitespace-nowrap">
            <svg
              className="w-3.5 h-3.5 text-[#e8833a] shrink-0 transform group-hover:rotate-12 transition-transform duration-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <ellipse cx="12" cy="15" rx="5" ry="4" />
              <circle cx="6" cy="9" r="2" />
              <circle cx="10" cy="6.5" r="2.2" />
              <circle cx="14" cy="6.5" r="2.2" />
              <circle cx="18" cy="9" r="2" />
            </svg>
            <span>Click to pet me!</span>
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-[#2a2522] border-r border-b border-[#e8833a]/30 dark:border-[#e8833a]/40 rotate-45" />
        </div>
      )}

      {/* Mascot SVG */}
      <svg
        viewBox="0 0 340 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="catFur" x1="170" y1="40" x2="170" y2="230" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" />
            <stop offset="0.5" stopColor="#E8833A" />
            <stop offset="1" stopColor="#D97706" />
          </linearGradient>

          <linearGradient id="catBelly" x1="170" y1="140" x2="170" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF7ED" />
            <stop offset="1" stopColor="#FED7AA" />
          </linearGradient>

          <linearGradient id="laptopGrad" x1="110" y1="180" x2="230" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#334155" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>

          <linearGradient id="screenGlow" x1="120" y1="150" x2="220" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0F172A" />
            <stop offset="1" stopColor="#020617" />
          </linearGradient>

          <radialGradient id="deskShadow" cx="170" cy="275" r="110" gradientUnits="userSpaceOnUse">
            <stop stopColor="#974800" stopOpacity="0.18" />
            <stop offset="1" stopColor="#974800" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Shadow base on table */}
        <ellipse cx="170" cy="285" rx="120" ry="16" fill="url(#deskShadow)" />

        {/* Tail (curled gracefully behind) */}
        <path
          d="M230 240 C260 250 295 240 290 205 C285 175 255 185 258 200 C260 210 275 212 270 225 C265 235 240 240 230 240 Z"
          fill="#D97706"
          stroke="#B45309"
          strokeWidth="2.5"
          className="transition-all duration-300 group-hover:rotate-3 origin-bottom-left"
        />

        {/* Cat Body */}
        <path
          d="M105 255 C100 190 120 145 140 140 C155 136 185 136 200 140 C220 145 240 190 235 255 C235 268 105 268 105 255 Z"
          fill="url(#catFur)"
          stroke="#B45309"
          strokeWidth="2.5"
        />

        {/* Warm Cream Chest & Belly */}
        <path
          d="M135 170 C145 155 195 155 205 170 C215 190 215 245 200 255 C185 262 155 262 140 255 C125 245 125 190 135 170 Z"
          fill="url(#catBelly)"
        />

        {/* Cat Head */}
        <ellipse cx="170" cy="115" rx="62" ry="52" fill="url(#catFur)" stroke="#B45309" strokeWidth="2.5" />

        {/* Left Ear */}
        <path
          d="M115 95 L125 40 C128 35 138 38 145 50 L152 75 Z"
          fill="#E8833A"
          stroke="#B45309"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M124 80 L130 50 L142 70 Z" fill="#FCA5A5" opacity="0.8" />

        {/* Right Ear */}
        <path
          d="M225 95 L215 40 C212 35 202 38 195 50 L188 75 Z"
          fill="#E8833A"
          stroke="#B45309"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M216 80 L210 50 L198 70 Z" fill="#FCA5A5" opacity="0.8" />

        {/* Tabby Head Stripes */}
        <path d="M170 66 L170 82" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
        <path d="M158 70 L160 84" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M182 70 L180 84" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />

        {/* Cheeks Fur Tufts */}
        <path d="M108 120 L96 122 L106 130 L98 135 L112 140" fill="#E8833A" stroke="#B45309" strokeWidth="2" strokeLinejoin="round" />
        <path d="M232 120 L244 122 L234 130 L242 135 L228 140" fill="#E8833A" stroke="#B45309" strokeWidth="2" strokeLinejoin="round" />

        {/* Glasses (Scholar coder cat look!) */}
        {/* Left Lens */}
        <circle cx="145" cy="115" r="15" fill="#FFFFFF" fillOpacity="0.25" stroke="#475569" strokeWidth="2.5" />
        {/* Right Lens */}
        <circle cx="195" cy="115" r="15" fill="#FFFFFF" fillOpacity="0.25" stroke="#475569" strokeWidth="2.5" />
        {/* Bridge */}
        <path d="M160 115 C165 112 175 112 180 115" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        {/* Temple arms */}
        <path d="M130 115 L112 110" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <path d="M210 115 L228 110" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

        {/* Eyes (focused & cute with reflections) */}
        <ellipse cx="145" cy="115" rx="5" ry="6.5" fill="#1E293B" />
        <circle cx="143.5" cy="113" r="2" fill="#FFFFFF" />
        <ellipse cx="195" cy="115" rx="5" ry="6.5" fill="#1E293B" />
        <circle cx="193.5" cy="113" r="2" fill="#FFFFFF" />

        {/* Pink Nose */}
        <polygon points="167,126 173,126 170,130" fill="#F87171" />

        {/* Whiskers */}
        <path d="M156 132 C140 133 125 130 110 126" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M156 135 C138 138 122 140 108 141" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M184 132 C200 133 215 130 230 126" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M184 135 C202 138 218 140 232 141" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />

        {/* Mouth */}
        <path d="M170 130 C168 135 163 137 158 135" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M170 130 C172 135 177 137 182 135" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />

        {/* Modern Laptop - Open on Desk */}
        {/* Laptop Screen Lid */}
        <path
          d="M102 178 L122 130 C123 128 126 126 129 126 L211 126 C214 126 217 128 218 130 L238 178 Z"
          fill="url(#screenGlow)"
          stroke="#475569"
          strokeWidth="2.5"
        />

        {/* Laptop Screen Inner Display */}
        <path
          d="M109 175 L126 133 L214 133 L231 175 Z"
          fill="#0B132B"
        />

        {/* Code Lines on Screen */}
        {/* Line 1: Orange/Sage keyword */}
        <rect x="133" y="140" width="18" height="2.5" rx="1" fill="#E8833A" />
        <rect x="154" y="140" width="36" height="2.5" rx="1" fill="#7A9A8B" />
        {/* Line 2: Blue/Lavender */}
        <rect x="138" y="147" width="28" height="2.5" rx="1" fill="#9A8EB8" />
        <rect x="169" y="147" width="22" height="2.5" rx="1" fill="#38BDF8" />
        {/* Line 3: Success green */}
        <rect x="142" y="154" width="40" height="2.5" rx="1" fill="#34D399" />
        {/* Line 4: Small prompt symbol */}
        <path d="M132 162 L136 164 L132 166" stroke="#E8833A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="140" y="163" width="20" height="2" rx="1" fill="#F8FAFC" />

        {/* Tiny Cat Apple/Paw Logo on back of laptop (if visible) or front bezel */}
        <circle cx="170" cy="172" r="2.5" fill="#E8833A" />

        {/* Laptop Keyboard Base */}
        <path
          d="M75 220 L102 178 L238 178 L265 220 C267 223 264 227 260 227 L80 227 C76 227 73 223 75 220 Z"
          fill="url(#laptopGrad)"
          stroke="#64748B"
          strokeWidth="2"
        />

        {/* Keyboard keys subtle grid */}
        <rect x="98" y="186" width="144" height="24" rx="2" fill="#0F172A" opacity="0.6" />
        <rect x="145" y="213" width="50" height="6" rx="2" fill="#334155" />

        {/* Paws Resting & Typing on Laptop Edge */}
        {/* Left Paw */}
        <ellipse cx="112" cy="192" rx="14" ry="11" fill="#FED7AA" stroke="#D97706" strokeWidth="2" />
        <path d="M106 189 C106 195 109 198 111 200" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M116 189 C116 195 115 198 114 200" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />

        {/* Right Paw */}
        <ellipse cx="228" cy="192" rx="14" ry="11" fill="#FED7AA" stroke="#D97706" strokeWidth="2" />
        <path d="M224 189 C224 195 225 198 226 200" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M232 189 C232 195 231 198 230 200" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />

        {/* Warm cozy steam / coffee mug beside laptop */}
        <rect x="52" y="214" width="16" height="18" rx="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
        {/* Mug handle */}
        <path d="M52 218 C47 218 47 226 52 226" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
        {/* Mug paw print */}
        <circle cx="60" cy="223" r="2" fill="#E8833A" />
        {/* Steam */}
        <path d="M57 210 C55 206 61 204 59 200" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      </svg>
    </div>
  );
};
