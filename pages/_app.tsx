import type { AppProps } from "next/app";
import "../styles/globals.css"; // Ensure correct import path
import Navbar from "../src/components/Navbar"; // Fix incorrect path
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router"; // Import useRouter

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter(); // Fix router issue

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
    </>
  );
}

export default MyApp;
