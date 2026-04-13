/*
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="px-4 relative">
      <nav className="flex justify-between items-center max-w-7xl mx-auto mb-6">


        <div className="text-base sm:text-xl font-bold tracking-tight whitespace-nowrap">
          BHAVESH |{" "}
          <span className="text-blue-500 text-[10px] sm:text-sm">
            BACKEND ARCHITECT
          </span>
        </div>


        <div
          className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="/" className="hover:text-white">HOME</a>
          <a href="/project" className="hover:text-white">PROJECTS</a>
          <a href="/contact" className="hover:text-white">CONTACT</a>
          <a href="/about" className="hover:text-white">ABOUT</a>
        </div>


        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border border-yellow-500/50 text-yellow-500 px-3 py-1 rounded-md text-xs hover:bg-yellow-500/10 transition"
        >
          MENU
        </button>


        <button
          onClick={() => setOpen(!open)}
          className="hidden md:block border border-yellow-500/50 text-yellow-500 px-5 py-1.5 rounded-md text-sm hover:bg-yellow-500/10 transition">
          MENU
        </button>
      </nav>


      {open && (
        <div className="absolute right-4 top-16 w-48 bg-black border border-gray-700 rounded-lg shadow-lg p-4 z-50">
          <div className="flex flex-col gap-4 text-sm font-medium text-gray-400">
            <a href="/" className="hover:text-white">HOME</a>
            <a href="/project" className="hover:text-white">PROJECTS</a>
            <a href="/contact" className="hover:text-white">CONTACT</a>
            <a href="/about" className="hover:text-white">ABOUT</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

*/


import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // outside click close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full flex items-center justify-between py-4 px-1 bg-[#0a0a0b] text-white relative">

      <div className="text-base sm:text-xl font-bold tracking-tight whitespace-nowrap">
        BHAVESH |{" "}
        <span className="text-blue-500 text-[10px] sm:text-sm">
          BACKEND ARCHITECT
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <a href="/" className="hover:text-blue-400 transition">Home</a>
        <a href="/about" className="hover:text-blue-400 transition">About</a>
        <a href="/project" className="hover:text-blue-400 transition">Projects</a>
        <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden border border-yellow-500/50 text-yellow-500 px-3 py-1 rounded-md text-xs hover:bg-yellow-500/10 transition"
      >
        MENU
      </button>

      <button
        onClick={() => setOpen(!open)}
        className="hidden md:block border border-yellow-500/50 text-yellow-500 px-5 py-1.5 rounded-md text-sm hover:bg-yellow-500/10 transition">
        MENU
      </button>


      {/* Dropdown */}
      <div
        ref={menuRef}
        className={`
          absolute top-16 right-4 w-48 bg-[#111113] border border-gray-800 rounded-xl
          flex flex-col p-3 gap-3 md:hidden
          transform transition-all duration-200 origin-top-right
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
        `}
      >
        <a href="/" onClick={() => setOpen(false)} className="hover:text-blue-400 transition">Home</a>
        <a href="/about" onClick={() => setOpen(false)} className="hover:text-blue-400 transition">About</a>
        <a href="/project" onClick={() => setOpen(false)} className="hover:text-blue-400 transition">Projects</a>
        <a href="/contact" onClick={() => setOpen(false)} className="hover:text-blue-400 transition">Contact</a>
      </div>

    </nav >
  );
};

export default Navbar;