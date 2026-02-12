import React from "react";
import ProjectCard from "./ProjectCard";



const projects = [
  {
    title: "BroZaika",
    img: "/projects/p7.png",
    desc: "Online food delivery website which contain differnt variety of food which can be orderd ",
    tags: ["MongoDB", "Express.js", "Node.js", "React","JWT","Tailwind"],
    live: "https://brozaika-frontend.onrender.com/",
    repo: "https://github.com/SunnyRaj2703/BroZaika",
  },
  {
    title: "Max Muscles",
    img: "/projects/p2.png",
    desc: "A online platform where we can store our workout ,find near by gyms, gets membership,give feedback.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT","Tailwind"],
    live: "#",
    repo: "#",
  },
  {
    title: "Pixabay Clone",
    img: "/projects/p1.png",
    desc: "A fast and responsive frontend clone of Pixabay, built using Vite + JavaScript.This project lets users search for high-quality stock images through a clean UI without any backend requirement",
    tags: ["React", "CSS","Js"],
    live: "#",
    repo: "https://github.com/SunnyRaj2703/Pixabay_Clone",
  },
 
  {
    title: "Snake Game",
    img: "/projects/p3.png",
    desc: "A simple Snake Game built using Python and Pygame.The snake grows longer when it eats apples, and the game ends when it hits the wall or collides with itself.",
    tags: ["Python", "PyGame", "Maths"],
    live: "#",
    repo: "https://github.com/SunnyRaj2703/Snake-Game",
  },
  {
    title: "MealDB Project",
    img: "/projects/p4.png",
    desc: "A simple and responsive Food Ordering Website built using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://food-website-tp4d.onrender.com/",
    repo: "https://github.com/SunnyRaj2703/Food-Website",
  },
  {
    title: "Weather App",
    img: "/projects/p6.png",
    desc: "A simple and responsive Weather App built using HTML, CSS, and JavaScript. It shows real-time weather information for any city and automatically changes background to day or night based on India’s current time.",
    tags: ["Html", "OpenWeather API", "CSS","JavaScript"],
    live: "https://weatherapp-v6cn.onrender.com/",
    repo: "https://github.com/SunnyRaj2703/WeatherApp",
  },

  {
    title: "Smart Calculator",
    img: "/projects/p8.png",
    desc: "A modern Smart Calculator built using HTML, CSS, and JavaScript. It supports real-time calculation, keyboard input, delete and clear functions, and includes a full calculation history with show/hide options",
    tags: ["JavaScript", "HTML", "CSS"],
    live: "https://smart-calculator-e2cp.onrender.com/",
    repo: "https://github.com/SunnyRaj2703/Smart-Calculator",
  },
  {
    title: "To-Do App",
    img: "/projects/p9.png",
    desc: "This project is a modern, animated Todo App built using React + custom hooks.",
    tags: ["React", "LocalStorage", "UI"],
    live: "https://todo-app-58ie.onrender.com/",
    repo: "https://github.com/SunnyRaj2703/Todo-App",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-28 pb-20 px-[10vw] text-white bg-[#07050f]">
      <h2 className="text-center text-4xl font-extrabold mb-3">PROJECTS</h2>
      <div className="h-1 w-24 bg-purple-500 mx-auto mb-8"></div>

      <p className="text-center text-gray-400 mb-14 text-sm md:text-base max-w-3xl mx-auto">
        A showcase of the projects I have worked on, highlighting my skills and experience.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            desc={p.desc}
            tags={p.tags}
            img={p.img}
            live={p.live}
            repo={p.repo}
          />
        ))}
      </div>
    </section>
  );
}
