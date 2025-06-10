import React, { useState, useEffect } from 'react';

export default function Navbar({ onHome, onAbout, onServices, onContact, onBook }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg' 
        : 'bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
            Automaani
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-300"></span>
          </span>
        </div>
        <div className="hidden md:flex space-x-8 text-base font-medium items-center">
          <button 
            onClick={onHome} 
            className="relative px-3 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
          >
            Home
          </button>
          <button 
            onClick={onAbout} 
            className="relative px-3 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={onServices} 
            className="relative px-3 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
          >
            Our Services
          </button>
          <button 
            onClick={onContact} 
            className="relative px-3 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
          >
            Contact Us
          </button>
          <button 
            onClick={onBook} 
            className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:from-blue-400 hover:to-blue-300 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
          >
            Book a Meeting
          </button>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
