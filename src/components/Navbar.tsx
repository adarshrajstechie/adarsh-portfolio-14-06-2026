"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f19]/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-wider bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          ADARSH RAJ S
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0f19] border-b border-gray-800 px-6 py-4 flex flex-col space-y-4 animate-fadeIn">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Contact</a>
        </div>
      )}
    </nav>
  );
}