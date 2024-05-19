import Navbar from "@/components/Navbar";
import Image from "next/image";
import profileImg from "../../../public/rick-pic.jpg"

const About = () => {
  return (
    <>
      <Navbar />
      <section className="mx-[4vw]">
        <h2 className="text-4xl md:text-6xl my-4">Meet me</h2>
       <div className="block md:flex"><p className="text-[1.1rem] md:text-[1.4rem] opacity-75 flex-[1.5]">In case you didn't catch that, I'm Samuel Ajala, currently in my third year studying Electronics and Computer Engineering at the Lagos State University. I have some experience in Frontend development, Additive Manufacturing, Internet of Things, and Embedded systems</p><div className="hidden md:flex flex-[1] items-center justify-center"><Image src={profileImg} className="border-8 rounded-lg border-dotted w-3/4"/></div></div>
        
      </section>
    </>
  );
};

export default About;
