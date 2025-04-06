import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Socials from "./socials";
import Photo from "./photo";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full w-11/12 lg:w-3/4">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:pt-16 pt-10">
                    <div className="text-center lg:text-left order-2 lg:order-none mt-10">
                        <span className="text-xl">Software Developer</span>
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
                            Focused, precise, and always striving for
                            perfection—fluent in code, still figuring out life’s
                            syntax. If there’s a bug, I probably didn’t write
                            it, but I’ll fix it anyway.
                        </p>
                        <div className="flex flex-col lg:flex-row gap-6 items-center">
                            <Button
                                variant={"outline"}
                                size={"lg"}
                                className="rounded-full uppercase flex items-center hover:transition-all duration-500"
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
    );
};

export default Home;
