// import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
     <section className="mx-[4vw] flex">
     <div className="flex-[1.5] mt-[25vh]">
        <h1 className="text-[5vw]  mb-4 text-white">
          Pushing Machines to <span className="text-blue-400">Brilliance</span>🚀
        </h1>
        <p className="text-white md:text-2xl md:w-[40vw]">Great things from a small place, pushing codes that will change the world, one line at a time.</p>
      </div>
      <div className=" flex flex-1 text-[20vw] p-0 justify-center ml-16 top-[30rem]">🐱‍👤</div>
     </section>
    </>
  );
}
