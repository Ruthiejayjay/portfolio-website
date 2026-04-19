"use client";
import { techStack } from "@/data";

export default function TechStack() {
  return (
    <section id="tech" className="relative">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="font-mono text-[#9DFFB8] text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
          My Tech Stack
        </h2>
        <hr className="h-px bg-white flex-1" />

        <div className="bg-[#161616] border border-[#2a2a2a] rounded-xl overflow-hidden max-w-md">
          {/* Terminal dots */}
          <div className="flex gap-1.5 px-4 py-3 border-b border-[#222]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Code lines */}
          <div className="px-6 py-5">
            {techStack.map((tech) => (
              <div
                key={tech.line}
                className="flex gap-6 font-mono text-sm leading-loose"
              >
                <span className="text-[#555] select-none w-6 text-right shrink-0">
                  {String(tech.line).padStart(2, "0")}.
                </span>
                <span style={{ color: tech.color }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
