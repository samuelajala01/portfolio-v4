import Image from "next/image";
import profileImg from "../../../public/my_pic.jpg";

const About = () => {
  return (
    <>
      <section className="mx-[4vw]">
        <h2 className="text-4xl md:text-6xl my-8 font-bold text-[var(--pry)]">Get to know me</h2>
        <div className="inline-flex flex flex-col-reverse sm:flex-row items-center">
          <p className="text-[1.1rem] md:text-[1.4rem] opacity-75 flex-[1.5]">
            In case you didn&#39;t catch that, I&#39;m Samuel Ajala, currently
            in my third year studying Electronics and Computer Engineering at
            the Lagos State University. I have some experience in Frontend
            development, Additive Manufacturing, Internet of Things, and
            Embedded systems.
          </p>
          <div className=" flex justify-center md:flex flex-[1] mb-8 sm:mb-0">
            <Image
              src={profileImg}
              alt="profile image"
              className="border-2 rounded-lg border-dotted w-3/5 h-1/2"
            />
          </div>
        </div>
        <div className="my-24">
          <h3 className="text-2xl md:text-4xl my-8 font-bold text-[var(--pry)]">Here&#39;s what I do</h3>
        <p className="text-[1.1rem] md:text-[1.4rem] opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus laudantium amet voluptates exercitationem alias culpa voluptas et, repellendus quas consequatur impedit at error eos aperiam? Sit autem consectetur hic?</p></div>
      </section>
    </>
  );
};

export default About;
