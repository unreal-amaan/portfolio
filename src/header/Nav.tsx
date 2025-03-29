import { Link } from "react-router-dom";

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

const hovereffect =
    "transition duration-400 ease-in-out hover:text-primary hover:underline hover:underline-offset-6";

const Nav = () => {
    return (
        <nav className="flex gap-10">
            {links.map((link) => (
                <Link to={link.path} className={`${hovereffect}`}>
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
