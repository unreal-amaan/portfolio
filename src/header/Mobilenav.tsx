import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

//components
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

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

const hovereffect = "text-xl hover:text-primary hover:transition-all duration-500";

const Mobilenav = () => {
  const pathname = useLocation().pathname;
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-3xl text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link to="/" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Syed <span className="text-primary">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-8 place-items-center text-xl">
          {links.map((link) => (
            <Link
              onClick={() => setOpen(false)}
              to={link.path}
              key={link.name}
              className={`${hovereffect} ${link.path === pathname ? "text-primary border-b-2" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Mobilenav;