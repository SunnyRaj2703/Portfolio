import React from "react";



const accent = "from-violet-600 to-indigo-500";
const SECTIONS = [
  {
    title: "Frontend",
    skills: [
      "HTML", "CSS",  "JavaScript", "React.js",
       "Tailwind CSS",  "Bootstrap", 
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js",  "MySQL", "MongoDB"],
  },
  {
    title: "Languages",
    skills: ["JavaScript",  "Python",  "C++","JAVA"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman",  "Vercel", "Netlify"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-8 lg:px-24 bg-gradient-to-b from-[#07050f] to-[#0f0820]">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Skills</h2>
          <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use — grouped by domain. Clean, concise and ready for production.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SECTIONS.map((sec) => (
            <article
              key={sec.title}
              className="relative rounded-2xl border border-white/6 bg-gradient-to-b from-white/3 to-transparent p-6 shadow-lg backdrop-blur-sm hover:scale-[1.005] transition-transform"
              aria-labelledby={`skills-${sec.title.toLowerCase()}`}
            >
              <h3 id={`skills-${sec.title.toLowerCase()}`} className="text-xl font-semibold text-white mb-4">
                {sec.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {sec.skills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    className="group relative flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-gray-100 bg-white/3 border border-white/5 hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
                    title={skill}
                    aria-pressed="false"
                  >
                    
                    <span
                      className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${accent} mr-2 opacity-90`}
                      aria-hidden="true"
                    />
                    <span className="truncate max-w-[10rem]">{skill}</span>
                  </button>
                ))}
              </div>

              
              <div className="mt-6 text-xs text-gray-400">
                {sec.skills.length} {sec.skills.length === 1 ? "item" : "items"}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
