import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="mx-[4vw]">
        <h2 className="text-4xl md:text-6xl my-4">Meet me</h2>
        <p className="text-[1.1rem] md:text-[1.4rem] opacity-50">In case you didn't catch that, I'm Samuel Ajala, currently in my third year studying Electronics and Computer Engineering at the Lagos State University.</p>
      </section>
    </>
  );
};

export default About;
