import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 border-t border-[#efe7dd] dark:border-[#3e3732] bg-[#fff8f5] dark:bg-[#1e1b18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#e8833a] mb-2 uppercase tracking-wide">
            <span>🐾 Where I&apos;ve worked</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1f1b18] dark:text-[#f3efea] tracking-tight">
            Where I&apos;ve worked
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#554338] dark:text-[#a39b93] max-w-2xl">
            My work experience and education so far.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:w-0.5 before:bg-[#efe7dd] dark:before:bg-[#3e3732]">
          {/* Milestone 1: Full-Time Role */}
          <div className="relative pl-10 sm:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute left-1.5 sm:left-2 top-1.5 w-5 h-5 rounded-full bg-[#e8833a] border-4 border-[#fff8f5] dark:border-[#1e1b18] shadow-sm" />

            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#466557] dark:text-[#a5d6be] bg-[#c5e7d6]/40 dark:bg-[#466557]/30 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#466557] dark:bg-[#a5d6be]" />
                  FULL-TIME
                </span>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#554338] dark:text-[#a39b93]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Jul 2026 to Present</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1f1b18] dark:text-[#f3efea]">
                  MERN Full-Stack Developer
                </h3>
                <div className="text-sm font-medium text-[#e8833a] mt-0.5">
                  Azeosoft Web Technologies Pvt. Ltd.
                </div>
              </div>

              <ul className="text-sm sm:text-base text-[#554338] dark:text-[#d5ccc4] space-y-2 list-disc list-inside leading-relaxed pt-1">
                <li>
                  Building and maintaining production apps, including our desktop workforce tracker and internal e-commerce tools.
                </li>
                <li>
                  Transitioned into a full-time developer role after my traineeship.
                </li>
              </ul>
            </div>
          </div>

          {/* Milestone 2: Trainee Role */}
          <div className="relative pl-10 sm:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute left-1.5 sm:left-2 top-1.5 w-5 h-5 rounded-full bg-[#7a9a8b] border-4 border-[#fff8f5] dark:border-[#1e1b18] shadow-sm" />

            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#554338] dark:text-[#a39b93] bg-[#efe7dd]/60 dark:bg-[#352f2c] px-2.5 py-0.5 rounded-full">
                  <Briefcase className="w-3 h-3 text-[#7a9a8b]" />
                  TRAINEE
                </span>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#554338] dark:text-[#a39b93]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Oct 2025 to Jun 2026</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1f1b18] dark:text-[#f3efea]">
                  MERN Full-Stack Developer Trainee
                </h3>
                <div className="text-sm font-medium text-[#e8833a] mt-0.5">
                  Azeosoft Web Technologies Pvt. Ltd.
                </div>
              </div>

              <ul className="text-sm sm:text-base text-[#554338] dark:text-[#d5ccc4] space-y-2 list-disc list-inside leading-relaxed pt-1">
                <li>
                  Built the offline sync layer and S3 upload pipeline for the workforce tracker.
                </li>
                <li>
                  Built Excel bulk product uploads, seller management flows, and invoice generation for the admin panel.
                </li>
              </ul>
            </div>
          </div>

          {/* Milestone 3: Education */}
          <div className="relative pl-10 sm:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute left-1.5 sm:left-2 top-1.5 w-5 h-5 rounded-full bg-[#9a8eb8] border-4 border-[#fff8f5] dark:border-[#1e1b18] shadow-sm" />

            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#2a2522] border border-[#efe7dd] dark:border-[#3e3732] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#fff8f5] dark:bg-[#1e1b18] border border-[#efe7dd] dark:border-[#3e3732] text-[#9a8eb8]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#1f1b18] dark:text-[#f3efea]">
                    B.Com (Bachelor of Commerce)
                  </h4>
                  <div className="text-xs sm:text-sm text-[#554338] dark:text-[#a39b93]">
                    DAV PG College (HNBGU)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#554338] dark:text-[#a39b93] sm:text-right">
                <Calendar className="w-3.5 h-3.5" />
                <span>2017 to 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
