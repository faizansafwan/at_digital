import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger and close icons
import logo from '../assets/logo.png';

export default function Header() {
  // State to control mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop nav - visible only on md+ */}
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-white hover:text-gray-300">SERVICES</a>
          <a href="#about" className="text-white hover:text-gray-300">ABOUT US</a>
          <a href="#contact" className="text-white hover:text-gray-300">CONTACT US</a>
          <a href="#careers" className="text-white hover:text-gray-300">CAREERS</a>
        </nav>

        {/* Mobile menu toggle button - visible only below md */}
        <button  className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <HiMenu />
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div  className={`fixed top-0 right-0 h-full w-full bg-white text-black transform transition-transform duration-300 ease-in-out z-50 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`} role="dialog" aria-modal="true">
        <div className="flex justify-between items-center p-4">
          {/* Close button */}
          <button  className="text-2xl" onClick={() => setMenuOpen(false)} aria-label="Close menu"  >
            <HiX />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {/* Nav links close menu on click */}
          {["services", "about", "contact", "careers"].map((item) => (
            <a key={item}  href={`#${item}`}  className="hover:text-primary" onClick={() => setMenuOpen(false)} >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>
      </div>

      {/* Semi-transparent overlay behind mobile menu */}
      {menuOpen && (
        <div  className="fixed inset-0 bg-opacity-50 z-40" onClick={() => setMenuOpen(false)} aria-hidden="true"></div>
      )}
    </header>
  );
}
