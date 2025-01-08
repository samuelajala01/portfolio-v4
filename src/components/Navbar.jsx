"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import avatar from "../../public/avatar.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";

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
      <nav className="flex justify-between py-[1.5rem] px-[4vw] items-center relative z-50">
        <div className="flex">
          <div className="pr-2">
            <Image
              src={avatar}
              alt="Image of rick"
              width={50}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-[var(--pry)] font-bold">Samuel Ajala</p>
            <p className="text-white text-sm">Software Developer (ML)</p>
          </div>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <li className="mx-[2.5vw] group">
            <Link
              href="/"
              className="text-white font-medium relative overflow-hidden inline-block"
            >
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                Home
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li className="mx-[2.5vw] group">
            <Link
              href="/about"
              className="text-white font-medium relative overflow-hidden inline-block"
            >
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                About
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li className="mx-[2.5vw] group">
            <Link
              href="/projects"
              className="text-white font-medium relative overflow-hidden inline-block"
            >
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                Projects
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li className="mx-[2.5vw] group">
            <Link
              href="/blog"
              className="text-white font-medium relative overflow-hidden inline-block"
            >
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                Blog
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>
        {/* Location element (visible on desktop) */}
        <div className="hidden md:flex py-1 px-[2vw] bg-[var(--pry)] rounded">
          Location: NG
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none transition-transform duration-500 ease-in-out hover:scale-110 p-[0.2rem] bg-black/30"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <span className="text-4xl transition-transform duration-500 ease-in-out transform rotate-90 text-white">
              <RiCloseLargeLine />
            </span>
          ) : (
            <span className="text-4xl transition-transform duration-500 ease-in-out transform text-white">
              <RxHamburgerMenu />
            </span>
          )}
        </button>
      </nav>
      {/* Mobile Menu (rendered only after client-side) */}
      {isMounted && (
        <div
          className={`md:hidden fixed inset-0 z-40 transform transition-all duration-500 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          {/* Menu Content */}
          <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
            <ul className="flex flex-col items-center space-y-8 p-6">
              <li className="transform transition-all duration-500 ease-in-out group">
                <Link
                  href="/"
                  className="text-white font-medium text-2xl relative overflow-hidden inline-block p-[0.2rem]"
                  onClick={toggleMenu}
                >
                  <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300 inline-block transform group-hover:scale-110">
                    Home
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li className="transform transition-all duration-500 ease-in-out group">
                <Link
                  href="/about"
                  className="text-white font-medium text-2xl relative overflow-hidden inline-block p-[0.2rem]"
                  onClick={toggleMenu}
                >
                  <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300 inline-block transform group-hover:scale-110 ">
                    About
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li className="transform transition-all duration-500 ease-in-out group">
                <Link
                  href="/projects"
                  className="text-white font-medium text-2xl relative overflow-hidden inline-block p-[0.2rem]"
                  onClick={toggleMenu}
                >
                  <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300 inline-block transform group-hover:scale-110 ">
                    Projects
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li className="transform transition-all duration-500 ease-in-out group">
                <Link
                  href="/blog"
                  className="text-white font-medium text-2xl relative overflow-hidden inline-block p-[0.2rem]"
                  onClick={toggleMenu}
                >
                  <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300 inline-block transform group-hover:scale-110 ">
                    Blog
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
