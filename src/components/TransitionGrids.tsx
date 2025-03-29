import { motion } from "framer-motion";

//variants

const animation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
};

const reverseAnimation = (index: number) => {
    const totalsteps = 6;
    return totalsteps - index - 1;
};

const TransitionGrids = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={animation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseAnimation(index) * 0.1,
                        }}
                        className="h-full w-full bg-white relative"
                    />
                );
            })}
        </>
    );
};

export default TransitionGrids;
