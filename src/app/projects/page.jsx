import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

const projectList = [
  {
    title: "Object Classifier using CNN",
    desc: "In case you didn't catch that, I'm Samuel Ajala, currently in my third year studying Electronics and Computer Engineering at the Lagos State University. I have some experience in Frontend development, Additive Manufacturing, Internet of Things, and Embedded systems",
    type: "solo",
  },
  {
    title: "Language Identification Model",
    desc: "In case you didn't catch that, I'm Samuel Ajala, currently in my third year studying Electronics and Computer Engineering at the Lagos State University. I have some experience in Frontend development, Additive Manufacturing, Internet of Things, and Embedded systems",
    type: "solo",
  },{
    title: "SMS Spam Classifier",
    desc: "In case you didn't catch that, I'm Samuel Ajala, currently in my third year studying Electronics and Computer Engineering at the Lagos State University. I have some experience in Frontend development, Additive Manufacturing, Internet of Things, and Embedded systems",
    type: "team",
  },
];

const projects = () => {
  return (
    <>
      <Navbar />
      
      <section className="mx-[5vw] mt-8 text-center mb-32">
        <h1 className="text-2xl md:text-[4vw] text-center mb-16 font-semibold">
          See my projects
        </h1>
        <div className="m-auto">
          {" "}
          <input
            type="search"
            className="py-2 pl-[1rem] w-full text-[var(--pry)] bg-[#090f14] mb-4 text-2xl"
          />
          <button className="py-2 px-4 bg-blue-600 w-full block font-semibold btn transition duration-300 active:translate-y-1 active:scale-0">
            Search
          </button>
        </div>
      </section>

      <div className="mx-[5vw]">
      {projectList.map((item) => (
        <Project key={item.title} title={item.title} desc={item.desc} type={item.type} />
      ))}
      </div>
    </>
  );
};

export default projects;
