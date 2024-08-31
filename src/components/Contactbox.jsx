import SocialBox from "./SocialBox";
import linkedin from "../../public/linkedin-icon.png"
import github from "../../public/github-icon.png"

const Contactbox = () => {
    return ( <>
    <div>
        <SocialBox name="Twitter" social_link="https://twitter.com/samuelajala01" img_link={linkedin}/>
        <SocialBox name="LinkedIn" social_link="https://linkedin.com/in/samuelajala01" img_link={linkedin}/>
        <SocialBox name="Github" social_link="https://github.com/samuelajala01" img_link={github}/>

        </div></> );
}
 
export default Contactbox;