import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen width is small
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav className="bg-gray-900 text-white shadow-md p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Calvin Moldenhauer
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" />
          <NavLink href="/projects" text="Projects" />
          <NavLink href="/contact" text="Contact" />
        </div>

        {/* Mobile Menu Button (Only visible on small screens) */}
        {isMobile && (
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </div>

      {/* Mobile Menu - Only Shows on Small Screens */}
      {isOpen && isMobile && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" />
          <NavLink href="/projects" text="Projects" />
          <NavLink href="/contact" text="Contact" />
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ href, text }: { href: string; text: string }) => (
  <Link 
    href={href} 
    className="hover:text-blue-400 transition duration-300 text-lg"
  >
    {text}
  </Link>
);

export default Navbar;
