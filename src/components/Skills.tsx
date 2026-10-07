import type { ComponentType } from 'react';
import { Layers, CheckCircle2, Compass, Cpu } from 'lucide-react';

interface SkillGroup {
  title: string;
  subtitle: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
  skills: string[];
}

export const Skills = () => {
  const skillGroups: SkillGroup[] = [
    {
      title: 'Web & Backend',
      subtitle: 'What I use every day',
      icon: Layers,
      description: 'Technologies I work with daily for full-stack apps and services.',
      skills: [
        'React.js',
        'Next.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JavaScript (ES6+)',
        'REST APIs',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Desktop & Systems',
      subtitle: "Tools I've used on real products",
      icon: CheckCircle2,
      description: "Libraries and protocols I've used on desktop software and internal tools.",
      skills: [
        'Electron.js',
        'WebRTC',
        'RxDB',
        'AWS S3',
        'Redis',
        'PostgreSQL',
        'Git & GitHub',
        'Postman',
      ],
    },
    {
      title: 'Currently Learning',
      subtitle: "What I'm learning next",
      icon: Compass,
      description: "Topics I'm exploring to broaden my backend and deployment knowledge.",
      skills: ['Docker', 'CI/CD', 'Kubernetes', 'System Design'],
    },
    {
      title: 'AI Tooling',
      subtitle: 'AI tools I work with',
      icon: Cpu,
      description: 'Tools and courses I use to move faster in my day-to-day work.',
      skills: [
        'Claude AI',
        'Prompt engineering',
        "Anthropic's Claude 101",
        "Anthropic's AI Fluency: Framework & Foundations (Jun 2026)",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-[#efe7dd] dark:border-[#3e3732]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#e8833a] mb-2 uppercase tracking-wide">
            <span>🐾 Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1f1b18] dark:text-[#f3efea] tracking-tight">
            Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#554338] dark:text-[#a39b93] max-w-2xl">
            Technologies and tools I use to build web apps and desktop software.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillGroups.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.title}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] shadow-sm hover:shadow-md transition-shadow space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] text-[#e8833a]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1f1b18] dark:text-[#f3efea]">
                        {group.title}
                      </h3>
                      <span className="text-xs font-mono text-[#7a9a8b] dark:text-[#a5d6be]">
                        {group.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#554338] dark:text-[#a39b93] leading-relaxed">
                  {group.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#fff8f5] dark:bg-[#1e1b18] text-[#1f1b18] dark:text-[#d5ccc4] border border-[#efe7dd] dark:border-[#3e3732] hover:border-[#e8833a]/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
