import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">About Me</h1>
      <p className="text-lg max-w-2xl">
        I'm Calvin, a Full-Stack Engineer with a passion for AI, automation, and solving real-world problems.
        With a background in automotive repair, I bring a unique approach to problem-solving, blending hands-on
        technical skills with cutting-edge software development.
      </p>
    </div>
  );
};

export default About;
