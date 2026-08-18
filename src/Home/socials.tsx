import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/unreal-amaan",
        label: "GitHub",
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/syed-amaanuddin-71106b281",
        label: "LinkedIn",
    },
    {
        icon: <FaXTwitter />,
        path: "https://x.com/Syed_twt",
        label: "X",
    },
    {
        icon: <SiSubstack />,
        path: "https://substack.com/@syedamaanuddin",
        label: "Substack",
    },
];

interface Styles {
    containerStyles?: string;
    iconStyles?: string;
}

const Socials = ({ containerStyles, iconStyles }: Styles) => {
    return (
        <div className={containerStyles}>
            {socials.map((item) => (
                <a
                    key={item.label}
                    href={item.path}
                    aria-label={item.label}
                    className={iconStyles}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {item.icon}
                </a>
            ))}
        </div>
    );
};

export default Socials;
