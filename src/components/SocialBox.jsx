import Image from "next/image";
import Link from "next/link";
const SocialBox = (props) => {
  return (
    <>
     <Link href={props.social_link} className="inline-block ml-4"> 
     <span className="bg-black bg-opacity-[0.5] rounded-md border-1 border-black">
        <Image src={props.img_link} className="" alt="Image of a social media icon"/>
        {/* <p>{props.name}</p> */}
      </span>
      </Link>
    </>
  );
};

export default SocialBox;
