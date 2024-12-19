import Image from "next/image";
import profileImg from "../../../public/my_pic.jpg";
import ContactBox from "@/components/Contactbox";

const About = () => {
  return (
    <>
      <section className="mx-[4vw]">
        <h2 className="text-4xl md:text-4xl my-12 font-bold text-[var(--pry)]">About Me &ndash; Exploring Tech, One Project at a Time</h2>
        <div className="inline-flex flex-col-reverse sm:flex-row items-center">
          <p className="text-[1.1rem] md:text-[1.4rem] opacity-75 flex-[1.5]">
            
            Hey there! I&#39;m currently studying Electronics and Computer Engineering at Lagos State University, but honestly, I&#39;ve always been more than just a student. Ever since I saw Honda&#39;s ASIMO robot at 12, I&#39;ve been hooked on the idea that machines/robots can do more than just exist—they can learn, adapt, and change lives.

That moment sparked my love for Machine Learning and Embedded Systems, and I&#39;ve been chasing that passion ever since. Whether I&#39;m designing hardware, writing code, or bringing the two together to solve real problems, I&#39;m always up for a challenge. I love the process of figuring things out—how systems work, how they can get better, and how we can use them to make life easier
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
          <h3 className="text-2xl md:text-4xl my-8 font-bold text-[var(--pry)]">Let&#39;s Build Cool Stuff That Matters</h3>
          <p className="text-[1.1rem] md:text-[1.4rem] opacity-75">When I&#39;m not busy with tech, you&#39;ll probably find me playing a game of chess, smashing out a round of table tennis, or getting lost in a great book. I&#39;m all about learning, tinkering, and exploring new ideas.

Looking ahead, I&#39;m excited to take what I know and use it to build impactful solutions in Robotics and AI—systems that automate tasks, improve efficiency, and help us all do more with less effort. If you&#39;re someone who&#39;s just as passionate about using tech to solve real-world problems, I&#39;d love to connect. Let&#39;s see how we can build something amazing together. 🚀</p></div>
      </section>
      <ContactBox />
    </>
  );
};

export default About;
