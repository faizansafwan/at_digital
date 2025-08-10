import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // icons
import logo from '../assets/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-white hover:text-gray-300">SERVICES</a>
          <a href="#about" className="text-white hover:text-gray-300">ABOUT US</a>
          <a href="#contact" className="text-white hover:text-gray-300">CONTACT US</a>
          <a href="#careers" className="text-white hover:text-gray-300">CAREERS</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-full bg-white text-black transform transition-transform duration-300 ease-in-out z-50 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4">
          <button 
            className="text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <HiX />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <a 
            href="#services" 
            className="hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            SERVICES
          </a>
          <a 
            href="#about" 
            className="hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT US
          </a>
          <a 
            href="#contact" 
            className="hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT US
          </a>
          <a 
            href="#careers" 
            className="hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            CAREERS
          </a>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
