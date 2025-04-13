import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import sendEmail from "./emailservice";

const info = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "amaanuddinsyed2005@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: "Hyderabad, Telangana, India",
    },
];

const Contact = () => {
    const [mailsent, setmailsent] = useState<null | boolean>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    async function propCheck(event: React.MouseEvent<HTMLButtonElement>) {
        const name = nameRef.current?.value.trim() || "";
        const email = emailRef.current?.value.trim() || "";
        const phone = phoneRef.current?.value.trim() || "";
        const message = messageRef.current?.value.trim() || "";

        if (!name || !email || !phone || !message) {
            setmailsent(false); // show error toast
            return;
        }

        try {
            const res = await sendEmail({ name, email, phone, message });
            if (res === true) {
                setmailsent(true); // show success toast
            } else {
                setmailsent(false); // show error toast
            }
        } catch (err) {
            console.log(err);
            setmailsent(false); // show error toast
        }
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
            className="py-12"
        >
            <div className="container mx-auto h-full w-11/12 lg:w-3/4">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:min-w-[54%] order-2 lg:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="lg:text-4xl text-2xl text-primary">
                                Let's Work together
                            </h3>
                            <p className="text-white/60">
                                Please fill out the form below to get in touch.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    placeholder="Name"
                                    ref={nameRef}
                                    className="md:col-span-2"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    ref={emailRef}
                                    className="md:col-span-2"
                                />
                                <Input
                                    type="tel"
                                    placeholder="Phone Number"
                                    ref={phoneRef}
                                    className="md:col-span-2"
                                />
                            </div>
                            <Textarea
                                placeholder="Type your message here"
                                ref={messageRef}
                                className="h-46"
                            />
                            <Button
                                type="button"
                                size={"lg"}
                                className="max-w-40 rounded-full self-end"
                                onClick={propCheck}
                            >
                                Send message
                            </Button>
                        </form>
                    </div>
                    <div className="flex flex-1 items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-6"
                                >
                                    <div className="w-11 h-11 lg:w-16 lg:h-16 bg-[#27272c] rounded-lg flex items-center justify-center text-primary">
                                        <div className="text-lg lg:text-2xl">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">
                                            {item.title}
                                        </p>
                                        <h3 className="text-lg lg:text-xl">
                                            {item.description}
                                        </h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {mailsent !== null && (
                <motion.div
                    className={`group fixed bottom-6 right-6 px-4 pr-6 py-2 lg:px-6 lg:py-4 rounded-full text-sm font-medium shadow-lg z-50 border flex items-center justify-between gap-4
        ${
            mailsent
                ? "bg-[#27272c] text-[#00ff9c] border-primary"
                : "bg-[#27272c] text-red-500 border-red-500"
        }`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                    exit={{ opacity: 0, y: 50 }}
                >
                    <span>
                        {mailsent
                            ? "Email sent successfully!"
                            : "Please fill all the fields!"}
                    </span>
                    <button
                        className="text-white hover:text-red-500 text-xl"
                        onClick={() => setmailsent(null)}
                    >
                        &times;
                    </button>
                </motion.div>
            )}
        </motion.section>
    );
};

export default Contact;
