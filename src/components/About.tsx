"use client";
import Experience from "./Experience";
import TechStack from "./Techstack";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-24 overflow-hidden"
    >
      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#1C1C1C] via-[#1C1C1C]/70 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-8">
          {/* Title + Line */}
          <div className="flex items-center gap-4 sm:gap-6 w-full lg:min-w-[250px]">
            <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              About
            </h2>

            {/* Line */}
            <div className="h-px bg-white flex-1 sm:max-w-none" />
          </div>

          {/* Paragraph */}
          <div className="space-y-5 sm:space-y-6 max-w-3xl">
            <div className="font-nunito space-y-5 sm:space-y-6">
              <p className="text-white leading-relaxed text-sm sm:text-[0.95rem]">
                I&apos;m a Full-Stack Developer with over 4 years of experience
                building production-ready web applications across fintech and
                SaaS industries.
              </p>

              <p className="text-white leading-relaxed text-sm sm:text-[0.95rem]">
                I specialize in Laravel, Express.js, GraphQL, and modern
                frontend frameworks like Next.js and Vue. My experience spans
                API architecture, payment integrations, authentication systems,
                and scalable backend design.
              </p>

              <p className="text-white leading-relaxed text-sm sm:text-[0.95rem]">
                I&apos;ve worked with both Nigerian and international teams,
                contributing to applications used by real customers globally.
              </p>
            </div>
            <Experience />
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
}
