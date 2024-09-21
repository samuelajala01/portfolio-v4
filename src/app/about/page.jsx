import Image from "next/image";
import profileImg from "../../../public/my_pic.jpg";
import ContactBox from "@/components/Contactbox";

const About = () => {
  return (
    <>
      <section className="mx-[4vw]">
        <h2 className="text-4xl md:text-6xl my-8 font-bold text-[var(--pry)]">Get to know me</h2>
        <div className="inline-flex flex-col-reverse sm:flex-row items-center">
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
          <h3 className="text-2xl md:text-4xl my-8 font-bold text-[var(--pry)]">...a little bit more</h3>
          <p className="text-[1.1rem] md:text-[1.4rem] opacity-75">I&#39;m someone who loves exploring new ways to build interesting tech. I&#39;m driven by curiosity and passion whether I&#39;m coding, diving into robotics, or simply getting lost in a good book. Outside of tech, you&#39;sll probably find me tinkering with DIY projects, playing Chess, or table-tennis. I thrive on challenges and believe in using my skills to make things better.</p></div>
      </section>
      <ContactBox />
    </>
  );
};

export default About;
