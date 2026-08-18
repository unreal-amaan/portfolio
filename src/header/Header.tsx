import { motion } from "framer-motion";

import Nav from "./Nav";
import Mobilenav from "./Mobilenav";

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="sticky top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-md"
        >
            <div className="mx-auto flex h-20 w-11/12 items-center justify-between md:w-5/6 lg:w-3/4">
                <a
                    href="#home"
                    className="font-sans text-2xl font-bold tracking-tight"
                >
                    Syed<span className="text-primary">.</span>
                </a>

                {/* Desktop navigation */}
                <div className="hidden lg:flex">
                    <Nav />
                </div>

                {/* Mobile navigation */}
                <div className="lg:hidden">
                    <Mobilenav />
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
