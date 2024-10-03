"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

/* FONTS */
const RLMadena = localFont({
  src: [
    {
      path: "../../../public/fonts/rl-madena.otf",
    },
  ],
  variable: "--font-madena",
});

const manrope = localFont({
  src: [
    {
      path: "../../../public/fonts/Manrope-VariableFont_wght.ttf",
    },
  ],
  variable: "--font-manrope",
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center px-2 py-3 relative z-20">
      <div className="flex items-center">
        <div className={`${manrope.className} text-black text-2xl font-bold select-none`}>
          SPN
        </div>
        <Image
          src="/images/SPN_Logo_No_Text.png"
          alt="SPN Logo"
          className="ml-2 h-8"
          width={35}
          height={35}
        />
      </div>

      <div className="hidden z-50 md:flex gap-6">
        <Link
          href="/"
          className="text-sm uppercase text-zinc-500 select-none transition duration-300 hover:text-black"
        >
          HOME
        </Link>
        <Link
          href="/resources"
          className="text-sm uppercase text-zinc-500 select-none transition duration-300 hover:text-black"
        >
          RESOURCES
        </Link>
        <Link
          href="/register"
          className="text-sm uppercase text-zinc-500 select-none transition duration-300 hover:text-black"
        >
          REGISTER
        </Link>
        <Link
          href="/feedback"
          className="text-sm uppercase text-zinc-500 select-none transition duration-300 hover:text-black"
        >
          FEEDBACK
        </Link>
        <Link
          href="/about"
          className="text-sm uppercase text-zinc-500 select-none transition duration-300 hover:text-black"
        >
          ABOUT
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none mt-[9px]">
          {isOpen ? (
            <XIcon className="h-6 w-6 text-zinc-500" />
          ) : (
            <MenuIcon className="h-6 w-6 text-zinc-500" />
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "menu-open z-30" : "menu-closed"
        } md:hidden absolute top-16 left-0 w-full border-black`}
      >
        <div className="z-50 flex flex-col items-center bg-[#f3f3f3] gap-6 py-4">
          <Link
            href="/"
            className="text-sm uppercase text-zinc-500 select-none transition duration-300 hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/resources"
            className="text-sm uppercase text-zinc-500 select-none transition duration-300 hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            RESOURCES
          </Link>
          <Link
            href="/register"
            className="text-sm uppercase text-zinc-500 select-none transition duration-300 hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            REGISTER
          </Link>
          <Link
            href="/feedback"
            className="text-sm uppercase text-zinc-500 select-none transition duration-300 hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            FEEDBACK
          </Link>
          <Link
            href="/about"
            className="text-sm uppercase text-zinc-500 select-none transition duration-300 mb-2 hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
