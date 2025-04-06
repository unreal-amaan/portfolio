import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const links = [
    {
        name: "Home",
        path: "/home",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const hovereffect = "text-lg hover:text-primary hover:transition-all duration-500"


const Nav = () => {
    const pathname = useLocation().pathname
    return (
        <nav className="flex gap-10">
            {links.map((link) => (
                <Link to={link.path} className={`${hovereffect} ${link.path === pathname && "text-primary border-b-2"}`}>
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
