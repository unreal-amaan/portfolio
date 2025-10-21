import { motion } from "framer-motion";
const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
        >
            <div className=" h-full text-2xl lg:text-4xl font-semibold flex justify-center items-center">
                WILL BE UPDATED SOON...
            </div>
        </motion.div>
    );
};

export default Work;
