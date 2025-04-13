import emailjs from "@emailjs/browser";
import dotenv from "dotenv";
interface emailProps {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default async function sendEmail(props: emailProps): Promise<boolean> {
    const template_params = {
        name: props.name,
        email: props.email,
        phone: props.phone,
        message: props.message,
    };
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID as string;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID as string;
    const PUBLIC_ID = import.meta.env.VITE_PUBLIC_ID as string;

    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, template_params, PUBLIC_ID);
        console.log("Email sent successfully");
        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
}
