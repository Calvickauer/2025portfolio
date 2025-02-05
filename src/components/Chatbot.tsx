import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ChatBubbleLeftEllipsisIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Chatbot = () => {
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const MODEL = process.env.NEXT_PUBLIC_HUGGINGFACE_MODEL || "calvickauer/portfolio-chatbot";
  const API_KEY = process.env.NEXT_PUBLIC_HUGGINGFACE_API;

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);

    console.log("📡 Debugging Chatbot API Call:");
    console.log("➡️ Model:", MODEL);
    console.log("➡️ API Key:", API_KEY ? "✅ Loaded" : "❌ MISSING");
    console.log("➡️ Sending Input:", input);

    try {
      const response = await axios.post(
        `https://api-inference.huggingface.co/models/${MODEL}`,
        { inputs: input },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("📩 API Response:", response.data);

      if (!response.data || typeof response.data !== "object") {
        throw new Error("Invalid response format from API");
      }

      const botReply = response.data.generated_text || response.data[0]?.generated_text || "🤖 No response from AI";
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("❌ Chatbot Error:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: "AI is unavailable. Try again later!" }]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
        </button>
      ) : (
        <motion.div
          className="w-80 bg-gray-900 text-white rounded-lg shadow-lg p-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-bold">AI Chatbot</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-300">
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="h-64 overflow-y-auto scrollbar-hide p-2 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-700 text-white"}`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-gray-400">Thinking...</p>}
          </div>

          <div className="flex items-center mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 bg-gray-800 rounded-l-md text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="Ask me anything..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md text-white"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
