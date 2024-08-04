// src/components/Navbar.jsx
import { useState } from 'react';

const Navbar = () => {
  // State to manage the dropdown menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background text-secondary fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Taleef Tamsal</div> 
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="relative font-bold text-secondary hover:text-white transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left">
            Home
          </a>
          <a href="#about" className="relative font-bold text-secondary hover:text-white transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left">
            About
          </a>
          {/* <a href="#resume" className="relative text-accent hover:text-secondary transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left">
            Resume
          </a> */}
          <a href="#projects" className="relative font-bold text-secondary hover:text-white transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left">
            Projects
          </a>
          <a href="#work" className="relative font-bold text-secondary hover:text-white transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left">
            Work
          </a>
          <a href="#contact" className="relative font-bold text-secondary hover:text-white transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left">
            Contact
          </a>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-1 rounded-md  hover:bg-white hover:text-white focus:bg-white transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            <svg className="w-7 h-7" fill="none" stroke="#2272FF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="miter" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          {/* Dropdown menu */}
          <div
            className={`absolute top-16 right-4 bg-background text-secondary border-2 border-radiu border-white rounded-md shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-0'}`}
          >
            <a href="#home" className="block border-white border px-4 py-2 hover:bg-secondary hover:text-white">Home</a>
            <a href="#about" className="block border-white  border px-4 py-2 hover:bg-secondary hover:text-white">About</a>
            {/* <a href="#resume" className="block border-accent  border px-4 py-2 hover:bg-secondary hover:text-background">Resume</a> */}
            <a href="#projects" className="block border-white  border px-4 py-2 hover:bg-secondary hover:text-white">Projects</a>
            <a href="#work" className="block border-white  border px-4 py-2 hover:bg-secondary hover:text-white">Work</a>
            <a href="#contact" className="block border-white  border px-4 py-2 hover:bg-secondary hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
