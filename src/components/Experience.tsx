"use client";
import { experienceItems } from "@/data";
import { Download } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-8">
          {/* Experience List */}
          <div className="w-full max-w-3xl flex flex-col">
            <h2 className="font-mono text-[#9DFFB8] text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
              Experience
            </h2>
            <hr className="h-px bg-white flex-1" />
            {experienceItems.map((item, i) => (
              <div
                key={i}
                className={`py-10 ${
                  i !== experienceItems.length - 1
                    ? "border-b border-[#1f1f1f]"
                    : ""
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-mono text-xs text-[#666] mb-2">
                      {item.period}
                    </p>

                    <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-white mb-1">
                      {item.company}
                    </h3>

                    <p className="text-sm text-[#9a9a9a]">{item.role}</p>
                  </div>

                  {/* Tag */}
                  <span className="font-mono text-xs text-[#777] px-3 py-1 border border-[#2a2a2a] rounded-md">
                    {item.type}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="mt-5 space-y-3">
                  {item.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-[#9a9a9a] leading-relaxed"
                    >
                      <span className="text-green-400 mt-[3px]">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Download CV */}
            <div className="pt-4">
              <a
                href="/ruth-james-cv.pdf"
                download
                className="font-mono inline-flex items-center gap-2 px-5 py-2.5 text-xl bg-white border border-[#2a2a2a] text-black rounded-md hover:border-green-400 transition"
              >
                Download CV 
                <Download size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
