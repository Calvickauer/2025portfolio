import type { NextPage } from "next";
import { motion } from "framer-motion";

const Projects: NextPage = () => {
  const projects = [
    { name: "Kandy’s Payback", description: "Canvas-based HTML game using JavaScript, CSS, and HTML." },
    { name: "Pet Adoption App", description: "Local pet adoption app built with Express, JavaScript, and Bootstrap." },
    { name: "Catch-A-Ride", description: "Rideshare app built with React, Mongoose, and CSS." },
    { name: "Face2Face", description: "Webcam chat service using Python and MongoDB." },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
