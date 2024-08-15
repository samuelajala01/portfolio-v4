import Image from "next/image";
import Link from "next/link";
const SocialBox = (props) => {
  return (
    <>
     <Link href={props.social_link}> <div className="bg-black bg-opacity-[0.5] rounded-md p-8 text-left border-1 border-black">
        <Image src={props.img_link} className="w-[5rem] m-auto" alt="Image of a social media icon"/>
        <p>{props.name}</p>
      </div></Link>
    </>
  );
};

export default SocialBox;
