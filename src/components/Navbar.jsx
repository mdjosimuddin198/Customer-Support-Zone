import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 1, href: "/home", leble: "Home" },
    { id: 2, href: "/home", leble: "FAQ" },
    { id: 3, href: "/home", leble: "Changelog" },
    { id: 4, href: "/home", leble: "Blog" },
    { id: 5, href: "/home", leble: "Download" },
    { id: 6, href: "/home", leble: "Contact" },
  ];

  const navlinks = navItems.map((navItem) => {
    return (
      <li
        key={navItem.id}
        className="ml-4 cursor-pointer text-black/90 hover:text-black/70"
      >
        {navItem.leble}
      </li>
    );
  });

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="navbar">
        <div className="flex-1">
          <a className="text-[#130B2D] font-semibold text-xl">
            CS — Ticket System
          </a>
        </div>
        {isOpen ? (
          <div className="px-5">
            <MdClose
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl md:hidden"
            />
          </div>
        ) : (
          <div className="px-5">
            <MdMenu
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl md:hidden"
            />
          </div>
        )}
        {/* desktop menu  */}
        <div className="md:flex items-center hidden gap-4">
          <ul className=" flex items-center px-8">{navlinks}</ul>
          <button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn">
            <FaPlus /> New Ticket
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`absolute right-0 top-16 z-50 w-full bg-transparent backdrop-blur-xl  transition-all duration-300 ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center text-white py-6 space-y-4">
            {navlinks}
            <button className="bg-linear-to-r mx-auto  from-[#632EE3] to-[#9F62F2] btn">
              <FaPlus /> New Ticket
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
