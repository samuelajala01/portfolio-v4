import Image from "next/image";
import Navbar from "@/components/Navbar";
import profileImg from "../../public/rick-pic.jpg";
import SocialBox from "@/components/SocialBox";

import linkedin from "../../public/linkedin-icon.png"
import github from "../../public/github-icon.png"

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="mx-[6vw] lg::mx-[4vw] font-sans">
        <div className=" block h-[85vh] sm:flex sm:justify-between">
          <div className="flex-[1.5] my-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white my-8">
              Pushing Machines to 
              <span className="text-[var(--pry)]"> Brilliance</span>
            </h1>
            <p className="text-white my-4 sm:my-0 md:text-2xl md:w-[40vw]">
              Great things from a small place, pushing codes that will change
              the world, one line at a time.
            </p>
          </div>
          <div className="flex flex-1">
            <Image
              src={profileImg}
              alt="profile image"
              className="mx-auto border-4 rounded-lg border-dashed border-blue-600 h-[15rem] w-[15rem] sm:h-[15rem] sm:w-[15rem] sm:mt-16 md:mt-24 lg:mt-24"

            />
          </div>
        </div>
        <div>
        <SocialBox name="Twitter" social_link="https://twitter.com/samuelajala01" img_link={linkedin}/>
        <SocialBox name="LinkedIn" social_link="https://linkedin.com/in/samuelajala01" img_link={linkedin}/>
        <SocialBox name="Github" social_link="https://github.com/samuelajala01" img_link={github}/>

        </div>
      </section>
    </>
  );
}
