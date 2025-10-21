//icons
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPostman,
    SiTypescript,
    SiPrisma,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const about = {
    title: "About Me",
    description: "This is Amaan, B.Tech Undergrad from Hyderabad.",
    fields: [
        {
            title: "Name",
            value: "Syed Amaanuddin",
        },
        {
            title: "Experience",
            value: "Fresher",
        },
        {
            title: "Nationality",
            value: "Indian",
        },
        {
            title: "Email",
            value: "amaanuddinsyed2005@gmail.com",
        },
        {
            title: "Languages",
            value: "English, Urdu",
        },
    ],
};

const education = {
    title: "My Education",
    description:
        "Currently in 3rd year of B.Tech in Computer Science and Engineering at GRIET Hyderabad.",
    items: [
        {
            institution: "GRIET Hyderabad",
            degree: 'B.Tech(CSE)',
            period: "2023 - Present",
        },
        {
            institution: "Shree Akshaya Junior College",
            degree: "Intermediate(MPC)",
            period: "2021 - 2023",
        },
        {
            institution: "Kothwal high school",
            degree: "High School",
            period: "2008 - 2021",
        },
    ],
};

const skills = {
    title: "My Skills",
    description: "I have knowledge of the following technologies",
    items: [
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiExpress />,
            name: "express.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwindcss",
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB",
        },
        {
            icon: <SiPostgresql />,
            name: "PostgreSQL",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript",
        },
        {
            icon: <TbBrandCpp />,
            name: "C++",
        },
        {
            icon: <FaGitAlt />,
            name: "Git",
        },
        {
            icon: <FaGithub />,
            name: "GitHub",
        },
        {
            icon: <SiPostman />,
            name: "Postman",
        },
        {
            icon: <SiPrisma />,
            name: "PrismaORM",
        },
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <FaCss3Alt />,
            name: "CSS",
        },
    ],

};

//components
import {
    Tabs,
    TabsContent,
    TabsTrigger,
    TabsList,
} from "../components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.2, ease: "easeInOut" }}
            className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
        >
            <div className="container mx-auto w-11/12 md:w-5/6 lg:w-3/4">
                <Tabs
                    defaultValue="about"
                    className="flex flex-col lg:flex-row gap-12"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto gap-6">
                        <TabsTrigger
                            value="about"
                            className="hover:cursor-pointer"
                        >
                            About me
                        </TabsTrigger>
                        <TabsTrigger
                            value="education"
                            className="hover:cursor-pointer"
                        >
                            Education
                        </TabsTrigger>
                        <TabsTrigger
                            value="skills"
                            className="hover:cursor-pointer"
                        >
                            Skills
                        </TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        {/* About Section */}
                        <TabsContent
                            value="about"
                            className="w-full text-center lg:text-left"
                        >
                            <div className="flex flex-col gap-8 text-center lg:text-left">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="text-white/60 mx-auto max-w-[600px] lg:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 max-w-[600px] mx-auto lg:mx-0">
                                    {about.fields.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center lg:justify-start gap-4">
                                                <span className="text-white/60">{item.title}</span>
                                                <span className="text-lg">{item.value}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* Education Section */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-8 text-center lg:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="text-white/60 mx-auto max-w-[600px] lg:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 pr-3">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col gap-1 items-center justify-center lg:items-start"
                                                >
                                                    <span className="text-primary">
                                                        {item.period}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[50px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-primary mr-2"></span>{" "}
                                                        <p className="text-white/60">
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Skills Section */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-8 text-center lg:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 ">
                                        {skills.description}
                                    </p>
                                </div>

                                <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {skills.items.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider
                                                    delayDuration={100}
                                                    >
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex items-center justify-center group">
                                                            <div className="hover:cursor-pointer text-6xl group-hover:text-primary transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
