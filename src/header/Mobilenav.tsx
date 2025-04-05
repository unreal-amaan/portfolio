import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";


//components
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

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

const hovereffect = "text-xl hover:text-primary transition-all"


const Mobilenav = () => {
    const pathname = useLocation().pathname;

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-3xl text-primary" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link to="/">
                        <h1 className="text-4xl font-semibold">
                            Syed <span className="text-primary">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col gap-8 place-items-center text-xl">
                    {links.map((link) => (
                        <Link to={link.path} className={`${hovereffect} ${link.path === pathname && "text-primary border-b-2"}`}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default Mobilenav;
