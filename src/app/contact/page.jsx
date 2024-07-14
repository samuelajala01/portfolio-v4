import SocialBox from "@/components/SocialBox";
import linkedin from "../../../public/linkedin-icon.png"
import github from "../../../public/github-icon.png"


const Contact = () => {
    return ( <section className="mx-[6vw] lg::mx-[4vw] text-center">
       <h1 className="text-4xl my-8">Reach Out</h1>
       <div className="block sm:flex sm:justify-around">
        
        <SocialBox name="Twitter" social_link="https://twitter.com/samuelajala01" img_link={linkedin}/>
        <SocialBox name="LinkedIn" social_link="https://linkedin.com/in/samuelajala01" img_link={linkedin}/>
        <SocialBox name="Github" social_link="https://github.com/samuelajala01" img_link={github}/>

        </div>
       </section>
       )
}
 
export default Contact;