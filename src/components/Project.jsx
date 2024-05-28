import Link from "next/link";

const Project = ({ title, type, desc }) => {
  return (
    <>
      <div className="max-w-[64rem] mx-auto bg-black bg-opacity-[0.5] rounded-md p-8 px-12 text-left mb-16 border-1 border-black">
        <h2 className="text-2xl md:text-4xl ">
          <Link href="./">{title}</Link>
        </h2>
        <p className="mt-10 mb-8">{desc}</p>
        <p className="bg-gray-700 w-fit rounded p-[0.1rem]">{type}</p>
      </div>
    </>
  );
};

export default Project;
