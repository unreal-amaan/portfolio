import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
            className="py-12"
        >
            <div className="container mx-auto h-full w-11/12 lg:w-3/4">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-[54%] order-2 lg:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="lg:text-4xl text-2xl text-primary ">
                                Let's Work together
                            </h3>
                            <p className="text-white/60 ">
                                Please fill out the form below to get in touch.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="firstname"
                                    placeholder="FirstName"
                                />
                                <Input type="lastname" placeholder="LastName" />
                                <Input type="email" placeholder="Email" />
                                <Input
                                    type="phone"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <Textarea
                                className="h-54"
                                placeholder="Type your message here"
                            />
                            <Button size={"lg"} className="max-w-40 rounded-full self-end">
                              Send message
                            </Button>
                        </form>
                    </div>
                    <div className="flex flex-1 items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0 ">
                        <ul className="flex flex-col gap-10">
                          {info.map((item , index) => {
                            return (
                              <li key={index} className="flex items-center gap-6">
                                <div className="w-11 h-11 lg:w-16 lg:h-16 bg-[#27272c] rounded-lg flex items-center justify-center text-primary">
                                  <div className="text-lg lg:text-2xl ">{item.icon}</div>
                                </div>
                                <div className="flex-1 ">
                                  <p className="text-white/60">{item.title}</p>
                                  <h3 className="text-lg lg:text-xl">{item.description}</h3>
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
