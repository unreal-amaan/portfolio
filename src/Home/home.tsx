import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
//components
import Socials from "./socials";
import Photo from "./photo";
import { TypingAnimation } from "@/components/magicui/typing-animation";

//resume pdf
import resumePdf from "../assets/SYED_AMAANUDDIN.pdf";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.2, ease: "easeInOut" }}
        >
            <section className="h-full">
                <div className="container mx-auto h-full w-11/12 lg:w-3/4">
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:pt-16 pt-10">
                        <div className="text-center lg:text-left order-2 lg:order-none mt-10">
                            <span className="text-xl">Web Developer</span>
                            <h1 className="h1 mb-10">
                                Hello I'm
                                <br />
                                <span className="text-primary">
                                    <TypingAnimation startOnView={true}>
                                        Syed Amaanuddin
                                    </TypingAnimation>
                                </span>
                            </h1>
                            <p className="max-w-[430px] text-white/80 mb-12">
                                Computer Science undergraduate skilled in
                                backend and full-stack development with hands-on
                                experience in building scalable platforms using
                                Node.js, TypeScript, React, and PostgreSQL.
                                Skilled in implementing secure authentication
                                systems, designing RESTful APIs, and creating
                                responsive user interfaces.
                            </p>
                            <div className="flex flex-col lg:flex-row gap-6 items-center">
                                <Button
                                    variant={"outline"}
                                    size={"lg"}
                                    className="rounded-full uppercase flex items-center hover:transition-all duration-500"
                                    onClick={() =>
                                        window.open(resumePdf, "_blank")
                                    }
                                >
                                    <span>Download CV</span>
                                    <FiDownload className="text-2xl" />
                                </Button>
                                <div className="mb-8 lg:mb-0">
                                    <Socials
                                        containerStyles="flex gap-4 lg:gap-6"
                                        iconStyles="h-9 w-9 hover:bg-primary hover:text-background hover:transition-all duration-500 rounded-full border border-primary flex justify-center items-center text-primary"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-none">
                            <Photo />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
