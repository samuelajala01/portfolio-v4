import Image from "next/image";
import profileImg from "../../public/avatar.png";
import { FaRocket } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <section className="mx-[6vw] lg::mx-[4vw] font-sans">
        <div className=" block mt-[15vh] mb-20 sm:flex sm:justify-between my-auto">
          <div className="flex-[1.5] text-center sm:text-left">
            <h1 className="text-[9vw] sm:text-6xl lg:text-[5.5vw] text-white my-2 sm:my-8">
              Pushing Machines to
              <span className="text-[var(--pry)]">
                {" "}
                Brilliance
                <FaRocket
                  className="inline-block text-[var(--pry)]  ml-2"
                  size={"5vw"}
                />
              </span>
            </h1>
            <p className="text-white my-4 sm:my-[3vh] mb-12 text-2xl md:w-[40vw]">
              Machine Learning | Everything
              <span className="text-[var(--pry)]"> In </span>between |
              Engineering
            </p>
          </div>
          <div className="flex flex-1 justify-around">
            <div className="rounded-full h-[15rem] w-[15rem] shadow-[35px_5px_5px_rgba(0,0,0,0.3)]">
              <Image
                src={profileImg}
                alt="profile image"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
