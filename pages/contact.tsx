import { NextPage } from "next";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact: NextPage = () => {
  const [state, handleSubmit] = useForm("myzkjrza"); // Replace with your Formspree Form ID
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">Contact Me</h1>
      <p className="text-lg text-gray-300">Send me a message and I'll get back to you!</p>

      {submitted ? (
        <motion.p className="text-green-400 mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          ✅ Message sent successfully!
        </motion.p>
      ) : (
        <form 
          onSubmit={(e) => {
            handleSubmit(e);
            setSubmitted(true);
          }} 
          className="mt-6 w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-left text-white">Name</label>
            <input 
              id="name"
              type="text"
              name="name"
              required
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="mb-4">
            <label className="block text-left text-white">Email</label>
            <input 
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="mb-4">
            <label className="block text-left text-white">Message</label>
            <textarea 
              id="message"
              name="message"
              required
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}

      <div className="mt-6 flex space-x-6">
        <a href="https://www.linkedin.com/in/calvin-moldenhauer/" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a>
        <a href="https://github.com/Calvickauer" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
        <a href="mailto:calvickauer@outlook.com" className="text-blue-400 hover:underline">Email</a>
      </div>
    </div>
  );
};

export default Contact;
