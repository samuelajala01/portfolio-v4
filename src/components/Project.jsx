import Link from "next/link";
import Image from "next/image";

const Project = ({
  title,
  type,
  desc,
  tags,
  tools,
  visit,
  image,
  imageAlt,
}) => {
  return (
    <div className="max-w-[64rem] mx-auto bg-black bg-opacity-[0.5] rounded-md p-8 px-12 text-left mb-16 border-1 border-black">
      <h2 className="text-2xl md:text-4xl font-semibold hover:text-blue-600">

        <Link href={visit}>{title}</Link>
      </h2>
      <p className="mt-10 mb-4">{desc}</p>
      <p className="mt-10 mb-8">{tags}</p>
      <p className="bg-gray-700 w-fit rounded p-[0.1rem]">{type}</p>
      <div className="flex flex-wrap gap-2 mt-6">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="bg-gray-900  p-[0.3rem] rounded-sm text-sm"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
