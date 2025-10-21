import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const links = [
    {
        name: "Home",
        path: "/",
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
    "text-lg hover:text-primary hover:transition-all duration-500";

const Nav = () => {
    const pathname = useLocation().pathname;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.2, ease: "easeInOut" }}
        >
            <nav className="flex gap-10">
                {links.map((link) => (
                    <Link
                        to={link.path}
                        className={`${hovereffect} ${
                            link.path === pathname && "text-primary border-b-2"
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </motion.div>
    );
};

export default Nav;
