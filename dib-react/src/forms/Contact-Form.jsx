import { useState } from "react"



const ContactForm = () => {
    const [data, setData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        texto: '',
    })

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // logica envío email
    }

    return (
        <section className="form" >
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

                <label htmlFor="texto">Mensaje:</label>
                <textarea
                    name="texto"
                    value={data.texto}
                    onChange={handleChange}
                    required
                ></textarea>

                <input type="submit" value="Enviar" />
            </form>
        </section>
    )
}

export default ContactForm