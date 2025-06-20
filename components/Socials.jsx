import Link from "next/link";
import { FaGithub, FaLinkedin, FaResearchgate, FaOrcid} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: ""},
    {icon: <FaLinkedin />, path: ""},
    {icon: <FaResearchgate />, path: ""},
    {icon: <FaOrcid />, path: ""},
];


const Socials = ({containerStyles, iconStyles}) => {
    return(
        <div className={containerStyles}> 
            {socials.map((item, index) =>{
                return <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                    </Link>
            })}
        </div>
    )
};

export default Socials;