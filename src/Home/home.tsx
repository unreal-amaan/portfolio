import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Socials from "./socials";

const resumeUrl = import.meta.env.VITE_RESUME_URL;


const Home = () => {
    return (
        <motion.section
            id="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center py-16 sm:py-20 lg:py-16"
        >
            <div className="mx-auto w-11/12 md:w-5/6 lg:w-3/4">
                <div className="max-w-5xl">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-primary"
                    >
                        Software Developer
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.6 }}
                        className="font-sans text-[clamp(3.5rem,11vw,9rem)] font-bold leading-[0.85] tracking-[-0.06em]"
                    >
                        <span className="block">Syed</span>
                        <span className="block text-primary">Amaanuddin</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.5 }}
                        className="mt-8 max-w-2xl sm:mt-10"
                    >
                        <p className="max-w-xl font-sans text-sm leading-7 text-muted sm:text-base">
                            Computer Science undergraduate focused on systems,
                            backend engineering, and compiler development.
                            Building software close to the OS, network stack,
                            and language runtime.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center"
                    >
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="group w-full rounded-full border-primary font-sans text-primary hover:bg-primary hover:text-background sm:w-fit"
                        >
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Resume</span>
                                <FiDownload className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                            </a>
                        </Button>

                        <a
                            href="#projects"
                            className="group flex w-fit items-center gap-2 font-mono text-sm text-muted transition-colors duration-300 hover:text-primary"
                        >
                            View projects
                            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="mt-12"
                    >
                        <Socials
                            containerStyles="flex gap-3"
                            iconStyles="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Home;
