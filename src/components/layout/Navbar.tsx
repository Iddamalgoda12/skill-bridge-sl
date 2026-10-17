"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-5">
      
      <div className="flex justify-between items-center">
        
        <h1 className="text-2xl font-bold">
          SkillBridgeSL
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li className="hover:text-blue-400 transition">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:text-blue-400 transition">
            <Link href="/about">About</Link>
          </li>

          <li className="hover:text-blue-400 transition">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
