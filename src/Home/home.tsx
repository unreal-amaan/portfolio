import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full w-11/12 lg:w-3/4">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:pt-26 pt-10">
                    <div className="text-center lg:text-left">
                        <span className="text-xl">Software Developer</span>
                        <h1 className="h1 mb-6">
                            Hello I'm
                            <br />
                            <span className="text-primary">
                                Syed Amaanuddin
                            </span>
                        </h1>
                        <p className="max-w-[500px] text-white/80 mb-12">
                            Focused, precise, and always striving for
                            perfection—fluent in code, still figuring out life’s
                            syntax. If there’s a bug, I probably didn’t write
                            it, but I’ll fix it anyway.
                        </p>
                        <div>
                          <Button className="text-background rounded-full">
                            <span >Download CV</span>
                            <FiDownload className="text-2xl"/>
                          </Button>
                        </div>
                    </div>
                    <div>photo</div>
                </div>
            </div>
        </section>
    );
};

export default Home;
