import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//components
import Nav from "./Nav";
import Mobilenav from "./Mobilenav";

const Header = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
        >
            <header className="py-8">
                <div className="flex justify-between items-center mx-auto w-11/12 md:w-5/6 lg:w-3/4">
                    <Link to="/">
                        <h1 className="text-4xl font-semibold">
                            Syed<span className="text-primary">.</span>
                        </h1>
                    </Link>
                    {/* large screen nav */}
                    <div className="hidden lg:flex">
                        <Nav />
                    </div>

                    {/* small screen nav */}
                    <div className="lg:hidden">
                        <Mobilenav />
                    </div>
                </div>
            </header>
        </motion.div>
    );
};

export default Header;
