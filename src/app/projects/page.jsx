import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

const projects = () => {
  return (
    <><Navbar />
      <section className="mx-[4vw] mt-8 text-center mb-32">
      <h1 className="text-2xl md:text-[4vw] text-center mb-16">See my projects</h1>
     <div className="m-auto"> <input type="search" className="py-2 pl-[1rem] w-full text-[var(--pry)] bg-[#090f14] mb-4"/>
      <button className="py-2 px-4 bg-blue-600 w-full block font-semibold">Search</button></div></section>

      <div className="mx-[4vw]">
        <Project title="Project 1" desc="In case you didn't catch that, I'm Samuel Ajala, currently in my third year studying Electronics and Computer Engineering at the Lagos State University. I have some experience in Frontend development, Additive Manufacturing, Internet of Things, and Embedded systems" type="solo"/>
        <Project title="Project 2" desc="In case you didn't catch that, I'm Samuel Ajala, currently in my third year studying Electronics and Computer Engineering at the Lagos State University. I have some experience in Frontend development, Additive Manufacturing, Internet of Things, and Embedded systems" type="solo"/>
        <Project title="Project 3" desc="In case you didn't catch that, I'm Samuel Ajala, currently in my third year studying Electronics and Computer Engineering at the Lagos State University. I have some experience in Frontend development, Additive Manufacturing, Internet of Things, and Embedded systems" type="solo"/>
        <Project title="Project 4" desc="In case you didn't catch that, I'm Samuel Ajala, currently in my third year studying Electronics and Computer Engineering at the Lagos State University. I have some experience in Frontend development, Additive Manufacturing, Internet of Things, and Embedded systems" type="solo"/>
      </div>
    </>
  );
};

export default projects;
