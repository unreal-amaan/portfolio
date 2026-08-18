import { motion } from "framer-motion";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";

const projects = [
    {
        id: "01",
        title: "Lox Interpreter",
        description:
            "A tree-walk interpreter for the Lox programming language, implemented in modern C++ based on Crafting Interpreters. Includes lexical analysis, recursive descent parsing, AST generation, static scope resolution, and object-oriented language features.",
        techstack: ["C++20", "CMake"],
        github: "https://github.com/unreal-amaan/lox",
    },
    {
        id: "02",
        title: "Multi-Threaded HTTP Server",
        description:
            "A multithreaded HTTP server built in modern C++ using low-level BSD socket APIs. Implements connection management, HTTP request parsing, response generation, and concurrent client handling through a modular networking architecture.",
        techstack: ["C++20", "TCP/IP", "BSD Sockets", "CMake"],
        github: "https://github.com/unreal-amaan/cpp-http-server",
    },
    {
        id: "03",
        title: "LaterBox",
        description:
            "A full-stack platform for organizing, searching, and sharing categorized links. Built with React, TypeScript, Node.js, PostgreSQL, and Prisma, with authentication and React Query for efficient client-server synchronization.",
        techstack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
        link: "https://laterbox-fe.netlify.app/",
        github: "https://github.com/unreal-amaan/LaterBox-FE",
    },
];

const Projects = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-32"
        >
            <div className="mx-auto w-11/12 md:w-5/6 lg:w-3/4">
                <div className="mb-20">
                    <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
                        Selected work
                    </p>

                    <h2 className="font-sans text-4xl font-bold tracking-tight md:text-6xl">
                        Projects
                    </h2>
                </div>

                <div className="divide-y divide-border">
                    {projects.map((project) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="grid gap-5 py-10 sm:gap-8 sm:py-12 md:grid-cols-[100px_1fr] md:py-16"
                        >
                            <span className="font-mono text-sm text-subtle">
                                {project.id}
                            </span>

                            <div className="max-w-4xl">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                                    {" "}
                                    <h3 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                                        {project.title}
                                    </h3>
                                    <div className="flex shrink-0 items-center gap-3">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.title} live project`}
                                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background"
                                            >
                                                <LuArrowUpRight size={20} />
                                            </a>
                                        )}

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} GitHub repository`}
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background"
                                        >
                                            <LuGithub size={19} />
                                        </a>
                                    </div>
                                </div>

                                <p className="mt-5 max-w-2xl font-sans text-sm leading-7 text-muted sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                                    {project.description}
                                </p>

                                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                                    {project.techstack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="font-mono text-sm text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
