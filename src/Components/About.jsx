import React from "react";
import Tilt from "react-parallax-tilt";
import { motion, useReducedMotion } from "framer-motion";
import avatarImage from "../assest/sunny_raj.jpeg";



const RESUME_URL = "https://drive.google.com/file/d/1tfYC_yxFegl5IDwFPinEmxOa1KAlTFgp/view";
const AVATAR_SRC = avatarImage;
const AVATAR_FALLBACK =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512'><rect width='100%' height='100%' fill='%23070b17'/><text x='50%' y='50%' fill='%23aaa' font-family='Arial' font-size='36' text-anchor='middle' dy='.3em'>No Image</text></svg>";

const SKILLS = ["React", "Node.js", "Express", "MongoDB", "Tailwind", "JavaScript"];


const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.09, when: "beforeChildren" },
  },
};
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-16 lg:px-28 font-sans overflow-visible"
      aria-labelledby="about-heading"
    >
     
      <style>{`
        /* Animated Gradient Border (conic + linear tweak) */
        .animated-border {
          position: relative;
          border-radius: 1rem;
        }
        .animated-border::before {
          content: "";
          position: absolute;
          inset: -2px;
          z-index: -2;
          border-radius: inherit;
          background: conic-gradient(from 180deg, #6d28d9, #ec4899, #06b6d4, #8b5cf6, #6d28d9);
          filter: blur(18px);
          opacity: 0.75;
          transform: rotate(0deg);
          animation: rotateGradient 8s linear infinite;
        }
        .animated-border::after {
          /* inner mask to keep the gradient as a border */
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: calc(1rem - 2px);
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          margin: 2px; /* makes the gradient show as border */
        }
        @keyframes rotateGradient {
          to { transform: rotate(360deg); }
        }

      
        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.7;
          filter: blur(6px);
          animation: floatUp 6s ease-in-out infinite;
        }
        .particle.slow { animation-duration: 12s; opacity: 0.55; filter: blur(10px); }
        .particle.fast { animation-duration: 4.8s; opacity: 0.85; filter: blur(4px); }
        @keyframes floatUp {
          0% { transform: translateY(8px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-18px) scale(1.05); opacity: 0.9; }
          100% { transform: translateY(8px) scale(1); opacity: 0.6; }
        }

        /* Signature underline animation */
        .sig-underline {
          display: inline-block;
          position: relative;
        }
        .sig-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 6px;
          width: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg,#a78bfa,#f472b6,#06b6d4);
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 600ms cubic-bezier(.2,.9,.2,1);
          box-shadow: 0 6px 22px rgba(99,102,241,0.18);
        }
        .sig-underline.hover-animate::after,
        .sig-underline.animate::after {
          transform: scaleX(1);
        }

        /* reduce motion fallback - stop animations */
        @media (prefers-reduced-motion: reduce) {
          .animated-border::before { animation: none; }
          .particle { animation: none; opacity: 0.55 !important; }
          .sig-underline::after { transition: none; transform: scaleX(1); opacity: 0.95; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative">
       
        <div aria-hidden className="pointer-events-none">
          <div
            className="particle slow"
            style={{
              width: 120,
              height: 120,
              background: "radial-gradient(circle at 30% 30%, rgba(130,69,236,0.18), rgba(130,69,236,0.06))",
              left: "6%",
              top: "6%",
            }}
          />
          <div
            className="particle fast"
            style={{
              width: 64,
              height: 64,
              background: "radial-gradient(circle at 30% 30%, rgba(236,72,153,0.18), rgba(236,72,153,0.03))",
              left: "82%",
              top: "10%",
            }}
          />
          <div
            className="particle"
            style={{
              width: 96,
              height: 96,
              background: "radial-gradient(circle at 40% 40%, rgba(6,182,212,0.12), rgba(6,182,212,0.02))",
              right: "12%",
              bottom: "8%",
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
         
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="animated-border rounded-2xl p-1"> 
              <div className="relative rounded-2xl bg-white/4 backdrop-blur-md border border-white/6 p-8 md:p-10">
                <motion.h2
                  variants={item}
                  id="about-heading"
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
                >
                  Hi, I’m{" "}
                  <span
                    className="sig-underline"
                  
                    onMouseEnter={(e) => e.currentTarget.classList.add("hover-animate")}
                    onMouseLeave={(e) => e.currentTarget.classList.remove("hover-animate")}
                    aria-hidden={false}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                     Sunny Raj
                    </span>
                  </span>
                </motion.h2>

                <motion.p
                  variants={item}
                  className="mt-6 text-gray-300 max-w-xl text-lg md:text-xl leading-relaxed"
                >
                  I build polished & performant web applications with a focus on
                  clean architecture, scalability, and intuitive user experiences.
                  I love creating digital experiences that feel modern, fast, and
                  meaningful — powered by React, Node.js, and strong frontend fundamentals.
                </motion.p>

                <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
                  {SKILLS.map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 rounded-full text-sm md:text-base bg-white/5 text-gray-100 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  variants={item}
                  className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href={RESUME_URL}
                    download
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-8 py-4 text-lg text-white font-semibold shadow-lg hover:scale-[1.03] transition"
                  >
                    Download CV
                  </a>

                  <button
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) {
                        const navHeight = 80;
                        const top =
                          el.getBoundingClientRect().top +
                          window.scrollY -
                          navHeight -
                          8;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-4 text-lg text-white font-semibold bg-white/5 hover:bg-white/10 transition"
                  >
                    Contact Me
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            className="order-1 md:order-2 flex justify-center md:justify-end relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            <div className="relative">
          
              <div
                aria-hidden
                className="absolute w-[26rem] h-[26rem] md:w-[32rem] md:h-[32rem] rounded-full bg-gradient-to-r from-purple-600/28 to-pink-400/12 blur-3xl -z-10 top-10 left-1/2 -translate-x-1/2"
              />

              <Tilt
                className="rounded-full p-1 shadow-2xl"
                tiltMaxAngleX={reduce ? 6 : 12}
                tiltMaxAngleY={reduce ? 6 : 12}
                perspective={1000}
                transitionSpeed={350}
                gyroscope={!reduce}
              >
                <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10 bg-neutral-900 shadow-[0_0_65px_rgba(130,69,236,0.45)]">
                  <img
                    src={AVATAR_SRC}
                    alt="Manu Awasthi"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.src = AVATAR_FALLBACK)}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Tilt>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
