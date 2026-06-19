import { motion } from "framer-motion";
import { LuGithub, LuArrowUpRight } from "react-icons/lu";

const projects = [
    {
        id: "01",
        title: "Multithreaded HTTP Server",
        description:
            "Developed a multithreaded HTTP server in modern C++ using POSIX sockets. Implemented HTTP request parsing, route handling, static file serving, and persistent connections. Added thread-per-connection concurrency to support multiple simultaneous clients.",
        techstack: [
            "C++20",
            "POSIX Socket API",
            "CMake",
            "Linux",
        ],
        image: "/cpp-http-server.png",
        link: "https://github.com/<your-username>/cpp-http-server",
        github: "https://github.com/<your-username>/cpp-http-server",
    },
    {
        id: "02",
        title: "LaterBox",
        description:
            "Save and organize content from across the web into smart categories for later. Fast, minimal, and synced across devices.",
        techstack: [
            "React.js",
            "Tanstack Query",
            "TailwindCSS",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "PrismaORM",
        ],
        image: "/LaterBox.png",
        link: "https://laterbox-fe.netlify.app/",
        github: "https://github.com/unreal-amaan/LaterBox-FE",
    },
    {
        id: "03",
        title: "OpenSoccer",
        description:
            "Search and discover open-source GitHub projects with filters for language, stars, forks and more — quickly find projects to explore and contribute to.",
        techstack: [
            "React.js",
            "TailwindCSS",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "PrismaORM",
        ],
        image: "/opensoccer.png",
        link: "https://opensoccer.vercel.app/",
        github: "https://github.com/unreal-amaan/opensoccer_fe",
    },
];

const Projects = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3, ease: "easeInOut" }}
            className="py-20"
        >
            <div className="mx-auto w-11/12 md:w-5/6 lg:w-3/4 space-y-32">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`flex flex-col-reverse lg:flex-row justify-between items-center gap-12`}
                    >
                        <div className="flex-1 space-y-6 group">
                            <h2
                                className="text-7xl md:text-9xl font-semibold text-transparent stroke-2 stroke-white transition-all duration-300"
                                style={{
                                    WebkitTextStroke: "2px white",
                                    color: "transparent",
                                }}
                            >
                                {project.id}
                            </h2>

                            <h3 className="text-2xl md:text-4xl font-semibold text-white">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 max-w-md">
                                {project.description ||
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et."}
                            </p>

                            <div className="flex flex-wrap gap-6 text-primary text-lg">
                                {project.techstack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="hover:text-white transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-6 text-2xl">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full border border-gray-600 hover:border-primary hover:text-primary transition"
                                >
                                    <LuArrowUpRight size={27} />
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full border border-gray-600 hover:border-primary hover:text-primary transition"
                                >
                                    <LuGithub size={27} />
                                </a>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="rounded-2xl w-full border border-gray-700 shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 120 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
