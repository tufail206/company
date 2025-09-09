"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ToggleBtn from "../toggleBtn";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="dark:bg-black shadow-md py-4 sticky top-0 z-50 bg-[#ffffffe0]">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          <Link href={'/'}>Company</Link>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 dark:text-gray-200 font-medium">
          <li>
            <Link href="/about" className="hover:text-primary transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-primary transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-primary transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary transition">
              Contact
            </Link>
          </li>
          <li>
            <ToggleBtn />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white dark:bg-black transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-primary">Company</h1>
          <button onClick={() => setIsOpen(false)} className="text-primary">
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col gap-6 text-lg px-6 py-8 dark:text-gray-200 font-medium">
          <li>
            <Link
              href="/about"
              className="hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <ToggleBtn />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
