import { NextPage } from "next";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // ✅ Fixed Import

const About: NextPage = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  // Scroll function for skills list
  const scroll = (direction: "left" | "right") => {
    if (skillsRef.current) {
      skillsRef.current.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React & Next.js", "Node.js & Express",
    "MongoDB & PostgreSQL", "AI & Large Language Models", "Tailwind CSS", "API Development",
    "WordPress & CMS", "GraphQL", "REST APIs", "Firebase", "Docker & Kubernetes",
    "Linux Server Management", "AWS (S3, Lambda, EC2)", "CI/CD Pipelines", "Redux & State Management",
    "Python", "Machine Learning", "Web Scraping", "OAuth & Authentication",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#111] text-white px-6 pt-24">
      {/* Animated Title */}
      <motion.h1 
        className="text-5xl font-extrabold text-blue-400 mb-6 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      {/* Main Content Box */}
      <motion.div 
        className="max-w-4xl bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-700 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Intro Section */}
        <p className="text-lg text-gray-300 mb-6">
          Hey, I’m <span className="text-blue-400 font-bold text-2xl">Calvin Moldenhauer</span> — a full-stack developer 
          specializing in **JavaScript, TypeScript, React, and Node.js**. I thrive in **AI, automation, and cutting-edge web development**,  
          pushing the boundaries of what technology can do.
        </p>

        <p className="text-lg text-gray-300 mb-6">
          My focus? **Building high-performance, scalable applications** with **Next.js, Tailwind CSS, and backend automation** 
          to streamline workflows and create seamless user experiences.
        </p>

        {/* Skills Section */}
        <motion.div 
          className="text-lg text-blue-400 font-semibold mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          🚀 **Key Skills & Technologies**
        </motion.div>

        {/* Scrollable Skills List - 3 Rows Grid */}
        <div className="relative mt-4 flex items-center">
          <button onClick={() => scroll("left")} className="absolute left-0 p-2 bg-gray-700 hover:bg-gray-600 rounded-full">
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          <div
            ref={skillsRef}
            className="flex overflow-x-auto scrollbar-hide mx-10 p-2"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="grid grid-rows-2 grid-flow-col gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 px-4 py-2 rounded-md shadow hover:scale-105 transition-transform text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
          <button onClick={() => scroll("right")} className="absolute right-0 p-2 bg-gray-700 hover:bg-gray-600 rounded-full">
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Notable Projects Section */}
        <motion.div 
          className="text-lg text-blue-400 font-semibold mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          📂 **Notable Projects**
        </motion.div>
        <div className="mt-6 space-y-5">
          {[
            {
              name: "SV Med Aesthetics",
              description: "A professional medical aesthetics website built using WordPress.",
              link: "https://svmedaesthetics.com/",
            },
            {
              name: "Dog Walk & Train",
              description: "A Next.js scheduling app for dog trainers and walkers.",
              link: "https://dog-walk-train.vercel.app/",
            },
            {
              name: "Kandy’s Payback",
              description: "HTML Canvas Game with JavaScript & CSS.",
            },
            {
              name: "Pet Adoption App",
              description: "A Node.js & Express-powered pet adoption platform.",
              link: "https://local-adoptions.herokuapp.com/",
            },
            {
              name: "Catch-A-Ride",
              description: "MERN stack rideshare app with MongoDB & React.",
              link: "https://catch-a-ride-us.herokuapp.com/",
            },
            {
              name: "Face2Face",
              description: "Webcam chat service using Python & MongoDB.",
            }
          ].map((project, index) => (
            <motion.div 
              key={index} 
              className={`bg-gray-800 p-4 rounded-lg shadow-md border ${project.highlight ? "border-blue-400" : "border-gray-700"} text-left`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white">
                {project.name} {project.highlight && <span className="text-blue-400">(⭐ Featured)</span>}
              </h3>
              <p className="text-gray-300">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mt-1">
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Closing Section */}
        <p className="text-lg text-gray-300 mt-8">
          When I’m not coding, I’m **exploring AI trends, optimizing automation workflows**, 
          and keeping up with the **latest in auto-tech**.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
