import { useState } from "react";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

const links = [
    {
        name: "Home",
        href: "#home",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Resume",
        href: "#resume",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];

const Mobilenav = () => {
    const [open, setOpen] = useState(false);

    const handleNavigation = () => {
        setOpen(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        >
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger
                    aria-label="Open navigation"
                    className="flex items-center justify-center text-primary"
                >
                    <CiMenuFries className="text-3xl" />
                </SheetTrigger>

                <SheetContent
                    side="right"
                    className="w-[85%] border-l border-border bg-surface sm:max-w-sm"
                >
                    <div className="flex h-full flex-col">
                        <div className="mt-16 px-6">
                            <a
                                href="#home"
                                onClick={handleNavigation}
                                className="font-sans text-3xl font-bold tracking-tight"
                            >
                                Syed<span className="text-primary">.</span>
                            </a>
                        </div>

                        <nav className="mt-20 flex flex-col">
                            {links.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleNavigation}
                                    className="group flex items-center gap-5 border-b border-border px-6 py-5 transition-colors duration-300 hover:bg-surface-alt"
                                >
                                    <span className="font-mono text-xs text-subtle">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="font-sans text-xl text-foreground transition-colors duration-300 group-hover:text-primary">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </nav>

                        <div className="mt-auto px-6 pb-10">
                            <p className="font-mono text-xs uppercase tracking-wider text-subtle">
                                Software Developer
                            </p>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </motion.div>
    );
};

export default Mobilenav;
