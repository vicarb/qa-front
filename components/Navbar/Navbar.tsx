'use client'
// Navbar.tsx
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
  <div className="flex items-center justify-between flex-wrap">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">Tech Prep</span>
    </div>
    <div className="block lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-400 hover:bg-blue-500 text-white rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      >
        <span className="sr-only">Open menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div
      className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } lg:max-h-full lg:opacity-100`}
    >
      <div className="text-sm lg:flex-grow">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
          Home
        </a>
        
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
          Contact
        </a>
        <a href="#responsive-header" className="block ml-4 mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
          Agregar Pregunta
        </a>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
