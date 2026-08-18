import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border">
            <div className="mx-auto flex w-11/12 flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between md:w-5/6 lg:w-3/4">
                <div>
                    <a href="#home" className="font-sans text-lg font-semibold">
                        Syed<span className="text-primary">.</span>
                    </a>

                    <p className="mt-2 font-mono text-xs text-subtle">
                        © {year} Syed Amaanuddin
                    </p>
                </div>

                <a
                    href="#home"
                    className="group flex items-center gap-2 font-mono text-xs text-muted transition-colors duration-300 hover:text-primary"
                >
                    Back to top
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
