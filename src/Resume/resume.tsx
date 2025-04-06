//icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPostman,
    SiTypescript,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const about = {
    title: "About Me",
    description:
        "This is Amaan, B.Tech Undergrad from Hyderabad. I love to code scalable backend systems",
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
        "Currently in 2nd year of B.Tech in Computer Science and Engineering at GRIET Hyderabad.",
    items: [
        {
            institution: "GRIET Hyderabad",
            degree: "B.Tech in Computer Science and Engineering",
            period: "2023 - Present",
        },
        {
            institution: "Shree Akshaya Junior College",
            degree: "Intermediate in PCM",
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
            icon: <FaHtml5 />,
            title: "HTML",
        },
        {
            icon: <FaCss3Alt />,
            title: "CSS",
        },
        {
            icon: <FaJs />,
            title: "JavaScript",
        },
        {
            icon: <SiTypescript />,
            title: "TypeScript",
        },
        {
            icon: <TbBrandCpp />,
            title: "C++",
        },
        {
            icon: <FaReact />,
            title: "React.js",
        },
        {
            icon: <FaNodeJs />,
            title: "Node.js",
        },
        {
            icon: <SiExpress />,
            title: "express.js",
        },
        {
            icon: <SiTailwindcss />,
            title: "tailwindcss",
        },
        {
            icon: <SiMongodb />,
            title: "MongoDB",
        },
        {
            icon: <SiPostgresql />,
            title: "PostgreSQL",
        },
        {
            icon: <SiPostman />,
            title: "Postman",
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

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
    return <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto mx-auto w-11/12 md:w-5/6 lg:w-3/4">
        <Tabs>
          <TabsList>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>;
};

export default Resume;
