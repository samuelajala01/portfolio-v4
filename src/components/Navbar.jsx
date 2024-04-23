// import { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();

//   return (
//     <nav className="bg-gray-800 py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo or any other branding */}
//         <div className="flex-shrink-0">
//           <a href="/" className="text-white font-bold">
//             Your Logo
//           </a>
//         </div>
//         {/* Hamburger menu for smaller screens */}
//         <div className="block md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none"
//             aria-expanded={isOpen}
//           >
//             <svg
//               className="h-6 w-6 fill-current"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//               />
//             </svg>
//           </button>
//         </div>
//         {/* Nav links */}
//         <div className={`md:flex md:items-center space-y-4 md:space-y-0 ${isOpen ? 'block' : 'hidden'}`}>
//           <NavLink href="/" title="Home" isActive={router.pathname === '/'} />
//           <NavLink href="/about" title="About" isActive={router.pathname === '/about'} />
//           <NavLink href="/projects" title="Projects" isActive={router.pathname === '/projects'} />
//           <NavLink href="/contact" title="Contact" isActive={router.pathname === '/contact'} />
//         </div>
//       </div>
//     </nav>
//   );
// };

// const NavLink = ({ href, title, isActive }) => (
//   <Link href={href}>
//     <a className={`text-white ${isActive && 'font-bold'}`}>{title}</a>
//   </Link>
// );

// export default Navbar;
