import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-blue-400 mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg max-w-2xl">
        I'm Calvin, a Full-Stack Engineer specializing in JavaScript, Node.js, and AI-powered applications.
      </p>
    </div>
  );
};

export default Home;
