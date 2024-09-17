'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState for toggle functionality
import avatar from "../../public/avatar.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between py-[1.5rem] px-[4vw] items-center">
        <div className="flex">
          <div className="pr-2">
            <Image src={avatar} alt="Image of rick" width={50} className="rounded-full" />
          </div>
          <div>
            <p className="text-[var(--pry)] font-bold">Samuel Ajala</p>
            <p className="text-white text-sm">Software Developer (ML)</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <li className="mx-[2.5vw]">
            <Link href="/" className="text-white font-medium hover:text-blue-600">
              Home
            </Link>
          </li>
          <li className="mx-[2.5vw]">
            <Link href="/about" className="text-white font-medium hover:text-blue-600">
              About
            </Link>
          </li>
          <li className="mx-[2.5vw]">
            <Link href="/projects" className="text-white font-medium hover:text-blue-600">
              Projects
            </Link>
          </li>
          <li className="mx-[2.5vw]">
            <Link href="/contact" className="text-white font-medium hover:text-blue-600">
              Reach me
            </Link>
          </li>
        </ul>

        {/* Location element (visible on desktop) */}
        <div className="hidden md:flex py-1 px-[2vw] bg-[var(--pry)] rounded">
          Location: NG
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Icon for the button */}
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-800 p-4">
          <li className="mb-4">
            <Link href="/" className="text-white font-medium hover:text-blue-600" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/about" className="text-white font-medium hover:text-blue-600" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/projects" className="text-white font-medium hover:text-blue-600" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/contact" className="text-white font-medium hover:text-blue-600" onClick={toggleMenu}>
              Reach me
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
