import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 p-4 text-white flex justify-between items-center shadow-md"
    >
      <h1 className="text-xl font-bold">Calvin Moldenhauer</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link>
        <Link href="/about" className="hover:text-blue-400 transition-colors duration-300">About</Link>
        <Link href="/projects" className="hover:text-blue-400 transition-colors duration-300">Projects</Link>
        <Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
