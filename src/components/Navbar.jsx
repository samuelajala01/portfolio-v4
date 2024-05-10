const Navbar = () => {
    return (
      <>
        <nav className="flex justify-between py-4 px-[4vw] items-center">
            <div>
                <p className="text-[#7192E6]">Samuel Ajala</p>
                <p className="text-white">Software Developer(ML)</p>
            </div>
          <ul className="flex ">
            <li className="mx-[3vw]">
              <a href="/" className="text-white font-semibold">Home</a>
            </li>
            <li className="mx-[3vw]">
              <a href="/about" className="text-white font-semibold">About</a>
            </li>
            <li className="mx-[3vw]">
              <a href="/projects" className="text-white font-semibold">Projects</a>
            </li>
            <li className="mx-[3vw]">
              <a href="" className="text-white font-semibold">Reach me</a>
            </li>
          </ul>
          <div className="flex py-1 px-[2vw] bg-[#7192e6] rounded">Location: UK</div>
        </nav>
        
      </>
    );
  };

  export default Navbar;

