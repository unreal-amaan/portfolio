import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";
interface ChildrenProps {
    children?: React.ReactNode;
}

const PageTransition = ({ children }: ChildrenProps) => {
    const pathname = useLocation().pathname
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 1,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                    className="h-screen w-screen fixed bg-background top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;
