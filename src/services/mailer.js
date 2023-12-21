const nodemailer = require("nodemailer");
require("dotenv").config();

const email = process.env.USER1EMAIL;
const pass = process.env.SECUREPASSAPP;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: `${email}`,
        pass: `${pass}`,
    },
});

transporter.verify().then(() => {
    console.log("Ready to send e-mails");
});

module.exports = async (fullMail) => {
    try {
        console.log("ok");
        const info = await transporter.sendMail({
            from: `Contacto de ${fullMail.name} <${fullMail.mail}> - WebSite Form`,
            to: `${email}`,
            subject: `${fullMail.subject}`,
            text: `
                Solicitud recibida desde el formulario de www.dressedinblackband.com
                Nombre: ${fullMail.name}
                Email: ${fullMail.email}
                Telefono: ${fullMail.phone}
                Asunto: ${fullMail.subject}
                Contenido: 
                ${fullMail.text}
            `,
        });
        console.log("Message sent: %s", info.messageId);
    } catch (err) {
        console.log(err);
    }
};
