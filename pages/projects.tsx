import { NextPage } from "next";

const Projects: NextPage = () => {
  const projects = [
    {
      name: "Dog Walk & Train",
      description: "An intelligent scheduling and management app for dog walkers & trainers.",
      link: "https://dog-walk-train.vercel.app/",
    },
    {
      name: "SV Med Aesthetics",
      description: "A professional medical aesthetics website built using WordPress.",
      link: "https://svmedaesthetics.com/",
    },
    {
      name: "Kandy’s Payback",
      description: "Canvas-based HTML game using JavaScript, CSS, and HTML.",
    },
    {
      name: "Pet Adoption App",
      description: "Local pet adoption app built with Express, JavaScript, and Bootstrap.",
      link: "https://local-adoptions.herokuapp.com/",
    },
    {
      name: "Catch-A-Ride",
      description: "Rideshare app built with React, Mongoose, and CSS.",
      link:"https://catch-a-ride-us.herokuapp.com/",
    },
    {
      name: "Face2Face",
      description: "Webcam chat service using Python and MongoDB.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#111] text-white px-6 pt-24">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:scale-105 transition-transform text-center"
          >
            <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
