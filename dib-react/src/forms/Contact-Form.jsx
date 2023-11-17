import { useState } from "react"
import sendMail from "../services/send-email"



const ContactForm = () => {
    const [sendForm, setSendForm] = useState(false);
    const [data, setData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        subject: '',
        text: '',
    })

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMail(data).then((response) => {
            if (response.success) {
            setSendForm(true);
            }
        });
    }

    return (
        <section className="form" >

        {sendForm ? ( // Si el formulario se ha enviado, muestra el mensaje de confirmación
            <h5>Se ha enviado el formulario correctamente. Responderemos en la mayor brevedad posible.</h5>
            ) : (
            //else 
            <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Formulario de Contacto</h3>
                <label htmlFor="nombre">Nombre: </label>
                <input
                    type="text"
                    name="nombre"
                    value={data.nombre}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="telefono">Teléfono:</label>
                <input
                    type="tel"
                    name="telefono"
                    value={data.telefono}
                    onChange={handleChange}
                />

                <label htmlFor="nombre">Asunto: </label>
                <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="texto">Mensaje:</label>
                <textarea
                    name="text"
                    value={data.text}
                    onChange={handleChange}
                    required
                ></textarea>

                <input type="submit" value="Enviar" />
            </form>
            )}
        </section>
    )
}

export default ContactForm