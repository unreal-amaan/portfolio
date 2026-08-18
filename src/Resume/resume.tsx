import { motion } from "framer-motion";

const skills = {
    Languages: ["C++", "C", "TypeScript", "JavaScript", "SQL"],
    Systems: ["TCP/IP", "BSD Sockets", "HTTP", "Multithreading"],
    Compilers: ["LLVM"],
    Backend: ["Node.js", "Express.js", "REST APIs"],
    Databases: ["PostgreSQL", "MongoDB", "Prisma ORM"],
    Frontend: ["React.js", "Recoil", "Tailwind CSS", "HTML/CSS"],
    Tools: ["Git", "GitHub", "CMake", "Postman"],
};

const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Compiler Design",
    "Software Engineering",
];

const Resume = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-20"
        >
            <div className="mx-auto w-11/12 md:w-5/6 lg:w-3/4">
                {/* About */}
                <div className="border-t border-border py-12 md:py-16">
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-[180px_1fr]">
                        <div>
                            <span className="font-mono text-sm text-primary">
                                01
                            </span>
                            <h2 className="mt-2 font-sans text-2xl font-semibold sm:text-3xl">
                                About
                            </h2>
                        </div>

                        <div className="max-w-3xl">
                            <p className="font-sans text-lg leading-8 text-muted md:text-xl">
                                Computer Science undergraduate with strong
                                foundations in software engineering, modern C++,
                                and backend development. Interested in low-level
                                systems, compilers, networking, and building
                                reliable software.
                            </p>

                            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                                <div>
                                    <span className="font-mono text-xs uppercase tracking-wider text-subtle">
                                        Name
                                    </span>
                                    <p className="mt-2 font-sans text-base">
                                        Syed Amaanuddin
                                    </p>
                                </div>

                                <div>
                                    <span className="font-mono text-xs uppercase tracking-wider text-subtle">
                                        Location
                                    </span>
                                    <p className="mt-2 font-sans text-base">
                                        Hyderabad, Telangana, India
                                    </p>
                                </div>

                                <div>
                                    <span className="font-mono text-xs uppercase tracking-wider text-subtle">
                                        Degree
                                    </span>
                                    <p className="mt-2 font-sans text-base">
                                        B.Tech in Computer Science
                                    </p>
                                </div>

                                <div>
                                    <span className="font-mono text-xs uppercase tracking-wider text-subtle">
                                        Graduation
                                    </span>
                                    <p className="mt-2 font-sans text-base">
                                        2027
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="border-t border-border py-12 md:py-16">
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-[180px_1fr]">
                        <div>
                            <span className="font-mono text-sm text-primary">
                                02
                            </span>
                            <h2 className="mt-2 font-sans text-2xl font-semibold sm:text-3xl">
                                Education
                            </h2>
                        </div>

                        <div className="max-w-3xl">
                            <article>
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                                    <h3 className="max-w-xl font-sans text-lg font-semibold sm:text-xl">
                                        Gokaraju Rangaraju Institute of
                                        Engineering and Technology
                                    </h3>

                                    <span className="shrink-0 font-mono text-sm text-primary">
                                        2023 — 2027
                                    </span>
                                </div>

                                <p className="mt-2 font-mono text-sm text-muted">
                                    B.Tech in Computer Science and Engineering
                                </p>

                                <p className="mt-4 font-sans text-sm text-subtle">
                                    CGPA: 8.54 / 10
                                </p>
                            </article>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="border-t border-border py-12 md:py-16">
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-[180px_1fr]">
                        <div>
                            <span className="font-mono text-sm text-primary">
                                03
                            </span>
                            <h2 className="mt-2 font-sans text-2xl font-semibold sm:text-3xl">
                                Skills
                            </h2>
                        </div>

                        <div className="grid gap-x-10 gap-y-10 grid-cols-2 lg:grid-cols-3">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category}>
                                    <h3 className="font-mono text-sm text-primary">
                                        {category}
                                    </h3>

                                    <ul className="mt-4 space-y-2">
                                        {items.map((skill) => (
                                            <li
                                                key={skill}
                                                className="font-sans text-sm text-muted"
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Coursework */}
                <div className="border-y border-border py-12 md:py-16">
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-[180px_1fr]">
                        <div>
                            <span className="font-mono text-sm text-primary">
                                04
                            </span>
                            <h2 className="mt-2 font-sans text-2xl font-semibold sm:text-3xl">
                                Coursework
                            </h2>
                        </div>

                        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                            {coursework.map((course) => (
                                <span
                                    key={course}
                                    className="font-mono text-xs leading-6 text-muted sm:text-sm"
                                >
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Resume;
