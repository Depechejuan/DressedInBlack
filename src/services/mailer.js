const nodemailer = require("nodemailer");
require("dotenv").config();

const email = process.env.BANDMAIL;
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

const contactForm = async (fullMail) => {
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

const suscribe = async (mail) => {
    try {
        console.log("ok");
        const info = await transporter.sendMail({
            from: `${email}`,
            to: `${mail.email}`,
            subject: `¡Gracias por unirte a la Newsletter de Dressed In Black!`,
            text: `
                Gracias por unirte a la Newsletter de www.dressedinblackband.com
                Te recordamos que sólo enviaremos correos electrónicos anunciando nuestros conciertos en tu ciudad.
                Se enviarán 2 correos:
                - Un mes antes del evento.
                - Dos o Tres días antes del evento.

                Si no has elegido tu ciudad, te llegarán avisos de todos los conciertos de la banda.
                Si quieres añadir tu ciudad, contacta con dressedinblackdm@gmail.com.

                ¡Gracias Devotee!
            `,
        });
        console.log("Message sent: %s", info.messageId);
    } catch (err) {
        console.error(err);
    }
};

const dibMail = async (mail, suscribers) => {
    try {
        const info = await transporter.sendMail({
            from: `${email}`,
            to: `${suscribers}`,
            subject: `${mail.subject}`,
            text: `
                ${mail.text}
        `,
        });
        console.log("Message sent");
    } catch (err) {
        console.error(err);
    }
};

module.exports = { contactForm, suscribe, dibMail };
