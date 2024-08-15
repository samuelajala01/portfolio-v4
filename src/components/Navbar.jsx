import Link from "next/link"
import Image from "next/image";
import rick from "../../public/rick-pic.jpg"

const Navbar = () => {
    return (
      <>
        <nav className="flex justify-between py-[1.5rem] px-[4vw] items-center">
            <div className="flex">
            <div className="pr-2"><Image src={rick} alt="Image of rick" width={50} className="rounded-full"/></div>
                <div><p className="text-[var(--pry)] font-bold">Samuel Ajala</p>
                <p className="text-white text-sm">Software Developer (ML)</p></div>
                
            </div>
          <ul className="hidden md:flex">
            <li className="mx-[2.5vw]">
              <Link href="/" className="text-white font-medium">Home</Link>
            </li>
            <li className="mx-[2.5vw]">
              <Link href="/about" className="text-white font-medium">About</Link>
            </li>
            <li className="mx-[2.5vw]">
              <Link href="/projects" className="text-white font-medium">Projects</Link>
            </li>
            <li className="mx-[2.5vw]">
              <Link href="/contact" className="text-white font-medium">Reach me</Link>
            </li>
          </ul>
          <div className="flex py-1 px-[2vw] bg-[var(--pry)] rounded">Location: NG</div>
        </nav>
        
      </>
    );
  };

  export default Navbar;

