import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    const [mailSent, setMailSent] = useState<null | boolean>(null);

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    async function propCheck() {
        const name = nameRef.current?.value.trim() || "";
        const email = emailRef.current?.value.trim() || "";
        const phone = phoneRef.current?.value.trim() || "";
        const message = messageRef.current?.value.trim() || "";

        if (!name || !email || !message) {
            setMailSent(false);
            return;
        }

        try {
            const res = await sendEmail({
                name,
                email,
                phone,
                message,
            });

            setMailSent(res);
        } catch (error) {
            console.error(error);
            setMailSent(false);
        }
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-32"
        >
            <div className="mx-auto w-11/12 md:w-5/6 lg:w-3/4">
                <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
                    {/* Contact information */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
                                Get in touch
                            </p>

                            <h2 className="max-w-lg font-sans text-4xl font-bold tracking-tight md:text-6xl">
                                Let's build something.
                            </h2>

                            <p className="mt-8 max-w-md font-sans text-base leading-8 text-muted md:text-lg">
                                Have a project, opportunity, or just want to
                                talk about software and systems? Feel free to
                                reach out.
                            </p>
                        </div>

                        <div className="mt-12 space-y-7">
                            {info.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-center gap-5"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-primary">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <p className="font-mono text-xs uppercase tracking-wider text-subtle">
                                            {item.title}
                                        </p>

                                        <p className="mt-1 font-sans text-sm text-muted md:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact form */}
                    <form
                        className="border-t border-border pt-8"
                        onSubmit={(event) => {
                            event.preventDefault();
                            void propCheck();
                        }}
                    >
                        <div className="grid gap-6">
                            <Input
                                type="text"
                                placeholder="Name"
                                ref={nameRef}
                                required
                            />

                            <Input
                                type="email"
                                placeholder="Email"
                                ref={emailRef}
                                required
                            />

                            <Input
                                type="tel"
                                placeholder="Phone Number (optional)"
                                ref={phoneRef}
                            />
                            <Textarea
                                placeholder="Tell me about your project or opportunity..."
                                ref={messageRef}
                                className="min-h-28"
                                required
                            />

                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="rounded-full px-7"
                                >
                                    Send message
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Status message */}
                {mailSent !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`fixed bottom-6 right-6 z-50 flex items-center gap-4 rounded-full border px-5 py-3 font-mono text-sm ${
                            mailSent
                                ? "border-success bg-surface text-success"
                                : "border-danger bg-surface text-danger"
                        }`}
                    >
                        <span>
                            {mailSent
                                ? "Email sent successfully!"
                                : "Please fill all required fields."}
                        </span>

                        <button
                            type="button"
                            aria-label="Dismiss notification"
                            className="text-muted transition-colors hover:text-foreground"
                            onClick={() => setMailSent(null)}
                        >
                            &times;
                        </button>
                    </motion.div>
                )}
            </div>
        </motion.section>
    );
};

export default Contact;
