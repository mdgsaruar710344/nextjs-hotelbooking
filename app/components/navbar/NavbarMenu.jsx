"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavbarMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Menu Icon */}
      <button
        onClick={toggleMenu}
        className="p-2 bg-gray-200 rounded-md lg:hidden"
      >
        {/* Replace with your desired icon */}
        <span className="text-gray-800">☰</span>
      </button>

      {/* Menu */}
      <div
        className={`max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <ul>
          <Link href={'/login'} className="w-full">
            <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
              Login
            </li>
          </Link>

          <Link href={'/registration'} className="w-full">
            <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
              Signup
            </li>
          </Link>

          <Link href={'/help'} className="w-full">
            <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
              Help
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
