// import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-[4vw]">
        <h1 className="text-5xl mt-[30vh] mb-4 text-white">
          Pushing Machines to <span className="text-blue-400">Brilliance</span>
        </h1>
        <p className="text-white text-2xl md:w-[40vw]">Great things from a small place, pushing codes that will change the world, one line at a time.</p>
      </div>
    </>
  );
}
