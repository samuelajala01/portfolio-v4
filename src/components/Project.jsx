import Link from "next/link";

const Project = ({ title, type, desc }) => {
  return (
    <>
      <div className="max-w-[64rem] mx-auto bg-black bg-opacity-[0.7] rounded-md p-6 text-left mb-16">
        <h2 className="text-2xl md:text-4xl ">
          <Link href="./">{title}</Link>
        </h2>
        <p className="my-4">{desc}</p>
        <p className="">{type}</p>
      </div>
    </>
  );
};

export default Project;
