'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import avatar from "../../public/avatar.png";

const Navbar = () => {  
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    setIsMounted(true);
  }, []);

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
            <Link href="/research" className="text-white font-medium hover:text-blue-600">
              Research
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
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu (rendered only after client-side) */}
      {isMounted && isOpen && (
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
            <Link href="/research" className="text-white font-medium hover:text-blue-600" onClick={toggleMenu}>
              Research
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
