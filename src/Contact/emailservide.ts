import emailjs from "@emailjs/browser";

interface sendEmailprops {
    name:string,
    phone:string,
    message:string
}

export default function sendEmail(props:sendEmailprops) {
    const name = props.name;
    const phone = props.phone;
    const message = props.message;

    


}