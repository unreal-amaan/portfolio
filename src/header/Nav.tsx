import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

const Nav = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = links
                .map((link) => document.getElementById(link.href.slice(1)))
                .filter((section): section is HTMLElement => section !== null);

            const referencePoint = window.innerHeight * 0.3;

            let currentSection = sections[0]?.id ?? "home";

            for (const section of sections) {
                const { top } = section.getBoundingClientRect();

                if (top <= referencePoint) {
                    currentSection = section.id;
                }
            }

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-8"
        >
            {links.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;

                return (
                    <a
                        key={link.name}
                        href={link.href}
                        className={`relative py-2 font-mono text-sm transition-colors duration-300 ${
                            isActive
                                ? "text-primary"
                                : "text-muted hover:text-foreground"
                        }`}
                    >
                        {link.name}

                        {isActive && (
                            <motion.span
                                layoutId="active-nav"
                                className="absolute -bottom-0.5 left-0 h-px w-full bg-primary"
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                }}
                            />
                        )}
                    </a>
                );
            })}
        </motion.nav>
    );
};

export default Nav;
