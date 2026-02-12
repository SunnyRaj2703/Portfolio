import React from "react";
import { motion } from "framer-motion";


import kccLogo from "../assest/education_logo/kcc-logo.jpg";
import bdpsLogo from "../assest/education_logo/school.png";
import stLogo from "../assest/education_logo/school2.png";


const educationData = [
  {
    id: "btech",
    degree: "Bachelor of Technology – B.Tech (Computer Science Engineering)",
    college: "KCC Institute of Technology & Management, Greater Noida",
    year: "2022 – 2026",
    grade: "Pursuing",
    description:
      "Currently pursuing B.Tech in CSE. Building MERN projects (MaxMuscles, BroZaika, PastPortals) and learning AI integrations, system design and modern best practices.",
    icon: kccLogo,
  },
  {
    id: "12th",
    degree: "Senior Secondary (12th Grade – PCM)",
    college: "St Xavier`s High School Patna, Bihar",
    year: "2022",
    grade: "PCM",
    description:
      "Completed 12th focused on Physics, Chemistry and Mathematics — developed strong analytical and logical skills.",
    icon: stLogo,
  },
  {
    id: "10th",
    degree: "High School (10th Grade)",
    college: "B.D. Public School, Bihar",
    year: "2020",
    grade: "High School",
    description:
      "Completed 10th with a solid academic foundation and an early interest in computers and programming.",
    icon: bdpsLogo,
  },
];


const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const lineVariant = {
  hidden: { scaleY: 0, originY: 0 },
  show: { scaleY: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariant = {
  hidden: (isLeft) => ({
    opacity: 0,
    x: isLeft ? -40 : 40,
    y: 10,
    scale: 0.985,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconVariant = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    rotate: [0, 8, -6, 0],
    transition: { duration: 0.6, ease: "backOut" },
  },
};

export default function EducationTimelineProImproved() {
  return (
    <section id="education" className="w-full bg-gradient-to-b from-[#070815] via-[#0d1020] to-[#070814] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
          Education
        </h2>

        <div className="relative">
          
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full rounded-full bg-gradient-to-b from-[#60a5fa] via-[#7c3aed] to-[#6ee7b7] opacity-30"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={lineVariant}
            aria-hidden="true"
          />

     
          <motion.div
            className="space-y-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariant}
          >
            {educationData.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="
                    relative
                    grid grid-cols-1 gap-6
                    md:grid-cols-[minmax(0,1.1fr)_auto_minmax(0,1.1fr)]
                    md:items-center
                  "
                >
                 
                  <div className={isLeft ? "md:col-start-1" : "md:col-start-3"}>
                    <motion.article
                      custom={isLeft}
                      variants={cardVariant}
                      className="
                        bg-white/4 backdrop-blur-sm border border-white/6 rounded-3xl
                        p-6 md:p-8
                        shadow-[0_16px_40px_rgba(2,6,23,0.6)]
                        hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.8)]
                        transition-transform transition-shadow duration-300
                      "
                    >
                      <div className="flex items-start gap-4">
                      
                        <div className="md:hidden mt-1">
                          <img
                            src={item.icon}
                            alt={`${item.college} logo`}
                            className="w-10 h-10 rounded-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-white">
                            {item.degree}
                          </h3>
                          <p className="text-sm text-slate-300 mt-1">
                            {item.college}
                          </p>

                          <div className="flex flex-wrap items-center gap-2 mt-2">
                            <span className="px-2 py-1 text-xs bg-white/8 text-slate-200 rounded">
                              {item.year}
                            </span>
                            {item.grade && (
                              <span className="px-2 py-1 text-xs bg-white/8 text-slate-200 rounded">
                                {item.grade}
                              </span>
                            )}
                          </div>

                          <p className="text-slate-300 mt-4 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  </div>

           
                  <div className="hidden md:flex md:col-start-2 flex-col items-center">
                    <motion.div
                      className="relative flex items-center justify-center mb-2"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={iconVariant}
                    >
                      <div
                        className="
                          w-16 h-16 rounded-full flex items-center justify-center
                          border border-white/10
                          bg-gradient-to-br from-white/10 to-white/0
                          shadow-[0_8px_25px_rgba(15,23,42,0.9)]
                        "
                        aria-hidden="true"
                      >
                        <img
                          src={item.icon}
                          alt={`${item.college} logo`}
                          className="w-11 h-11 rounded-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <span
                        className="absolute w-24 h-24 rounded-full opacity-30 blur-3xl"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(96,165,250,0.35), transparent 45%)",
                          mixBlendMode: "screen",
                        }}
                        aria-hidden="true"
                      />
                    </motion.div>

                    <span className="text-[10px] px-2 py-1 rounded-full bg-black/60 border border-white/10 text-slate-200">
                      {item.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
