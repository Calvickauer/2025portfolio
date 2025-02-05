import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "@/src/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Chatbot from "@/src/components/Chatbot";

function MyApp({ Component, pageProps, router }: AppProps & { router: any }) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Chatbot />
    </>
  );
}

export default MyApp;
