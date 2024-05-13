// import rick from "../../public/rick-pic.jpg";
import Link from "next/link"

const Navbar = () => {
    return (
      <>
        <nav className="flex justify-between py-4 px-[4vw] items-center">
            <div className="flex">
            {/* <div><img src={rick} alt="Image of rick" width={50}/></div> */}
                <div><p className="text-[#7192E6]">Samuel Ajala</p>
                <p className="text-white">Software Developer(ML)</p></div>
                
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
              <Link href="" className="text-white font-medium">Reach me</Link>
            </li>
          </ul>
          <div className="flex py-1 px-[2vw] bg-[#7192e6] rounded">Location: UK</div>
        </nav>
        
      </>
    );
  };

  export default Navbar;

