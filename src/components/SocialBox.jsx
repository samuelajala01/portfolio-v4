import Image from "next/image";
const SocialBox = (props) => {
  return (
    <>
      <div className="border-blue-600 rounded-md text-center p-8 bg-black bg-opacity-[0.5]">
        <Image src={props.img_link} className="w-[5rem] mb-8 m-auto" />
        <p>{props.name}</p>
      </div>
    </>
  );
};

export default SocialBox;
