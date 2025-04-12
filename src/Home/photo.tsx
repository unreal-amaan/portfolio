import { motion } from "framer-motion";
import myimage from "../assets/2.png";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.8, duration: 1, ease: "easeInOut" },
                }}
            >
                <div className="w-[290px] h-[290px] lg:w-[500px] lg:h-[500px] absolute ml-2">
                    <img
                        loading="lazy"
                        src={myimage}
                        alt="No image found"
                        className="object-contain rounded-full"
                    />
                </div>
                <motion.svg
                    className="w-[300px] h-[300px] lg:w-[506px] lg:h-[506px]"
                    fill={"transparent"}
                    viewBox={"0 0 506 506"}
                    xmlns={"http://www.w3.org/2000/svg"}
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00FF9C"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 120 25 25",
                                "16 25 92 72",
                                "4 250 22 22",
                            ],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
