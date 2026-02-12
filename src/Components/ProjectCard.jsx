import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, desc, tags, img, live, repo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="rounded-xl p-5 bg-[#100e27]/80 backdrop-blur-md 
                 border border-white/10 shadow-xl 
                 hover:shadow-purple-700/40 hover:border-purple-500/40 
                 transition duration-300"
    >
     
      <div className="rounded-lg overflow-hidden mb-4">
        <img
          src={img}
          alt={title}
          className="w-full h-44 object-cover rounded-lg hover:scale-105 transition-all duration-500"
        />
      </div>

     
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>

     
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{desc}</p>

    
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs bg-purple-600/20 text-purple-300 
                       border border-purple-500/40 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {live && (
          <a
            href={live}
            target="_blank"
            className="flex-1 text-center bg-purple-600/30 border border-purple-500/40 
                       text-purple-300 py-2 rounded-md hover:bg-purple-600/40 transition"
          >
            Live Demo
          </a>
        )}

        {repo && (
          <a
            href={repo}
            target="_blank"
            className="flex-1 text-center bg-white/10 border border-white/20 
                       text-white py-2 rounded-md hover:bg-white/20 transition"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
