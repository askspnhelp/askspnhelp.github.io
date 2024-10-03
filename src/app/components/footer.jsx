import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-black">
      <div className="max-w-6xl mb-2 mt-2 m-auto p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xs select-none flex items-center mb-2 md:mb-0">
          {currentYear} © SPN. All rights reserved.
          {/* <GiTexas className="ml-1" size={18} /> */}
        </div>
        <div className="flex flex-wrap gap-6">
          <a
            href="/privacy"
            className="text-[13px] uppercase text-zinc-500 select-none transition duration-300 hover:text-black"
          >
            PRIVACY
          </a>
          <a
            href="/"
            className="text-[13px] uppercase text-zinc-500 select-none transition duration-300 hover:text-black"
          >
            LINKEDIN
          </a>
          <a
            href="/"
            className="text-[13px] uppercase text-zinc-500 select-none transition duration-300 hover:text-black"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;