import Image from "next/image";
import Link from "next/link";
const SocialBox = (props) => {
  return (
    <>
     <Link href={props.social_link}> <div className="border-blue-600 rounded-md text-center p-8 bg-black bg-opacity-[0.5] w-[10rem] mb-8 m-auto">
        <Image src={props.img_link} className="w-[5rem] mb-8 m-auto" alt="Image of a social media icon"/>
        <p>{props.name}</p>
      </div></Link>
    </>
  );
};

export default SocialBox;
