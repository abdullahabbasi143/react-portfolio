import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="bg-gray-800 text-white p-6 fixed w-full z-50">
      <div className="nav-container mx-auto px-6 flex justify-between items-center">
        <a href="#intro" className="text-2xl font-bold" onClick={(e) => handleNavClick(e, 'intro')}>My Portfolio</a>
        <div className="hidden md:flex space-x-6">
          <a href="#intro" className="hover:text-gray-400" onClick={(e) => handleNavClick(e, 'intro')}>Intro</a>
          <a href="#about" className="hover:text-gray-400" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#projects" className="hover:text-gray-400" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a href="#contact" className="hover:text-gray-400" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#intro" className="block px-4 py-2 hover:bg-gray-700" onClick={(e) => handleNavClick(e, 'intro')}>Introduction</a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-700" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-700" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-700" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </div>
      )}
    </nav>
  );
};


export default Navbar;

