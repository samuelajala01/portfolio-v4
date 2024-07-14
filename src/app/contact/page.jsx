import SocialBox from "@/components/SocialBox";

import linkedin from "../../../public/rick-pic.jpg"

const Contact = () => {
    return ( <section className="mx-[6vw] lg::mx-[4vw] text-center">
       <h1>Reach Out</h1>
       <div className="block sm:flex sm:justify-around">
        <SocialBox name="LinkedIn" link="/" img_link={linkedin}/>
        <SocialBox name="Twitter" link="/" img_link={linkedin}/>
        <SocialBox name="Github" link="/" img_link={linkedin}/>
        </div>
       </section>
       )
}
 
export default Contact;