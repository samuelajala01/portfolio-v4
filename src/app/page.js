// import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
     <section className="mx-[6vw] lg::mx-[4vw] flex">
     <div className="flex-[1.5] md:mt-[25vh]">
        <h1 className="text-[5vw]  mb-4 text-white">
          Pushing Machines to <span className="text-[var(--pry)]">Brilliance</span> &#128640;
        </h1>
        <p className="text-white md:text-2xl md:w-[40vw]">Great things from a small place, pushing codes that will change the world, one line at a time.</p>
      </div>
      <div className=" flex flex-1 md:text-[20vw] p-0 justify-center ml-16  md:top-[20rem] mt-2 lg:mt-8 hidden md:block">🐱‍👤</div>
     </section>
    </>
  );
}
