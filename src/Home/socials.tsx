
import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path:"https://github.com/unreal-amaan"},
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/syed-amaanuddin-71106b281"},
    {icon: <FaTwitter/>, path:"https://x.com/Syed_twt"},
]

interface styles {
    containerStyles ?: string,
    iconStyles ?: string
}

const Socials = (props:styles) => {
    return <div className={props.containerStyles}>
        {socials.map((item, index)=> {
            return (
                <a key={index} href={item.path} className={props.iconStyles} target="_blank">{item.icon}</a>
            )
        })}
    </div>;
};

export default Socials;
