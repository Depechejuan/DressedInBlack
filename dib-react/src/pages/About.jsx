import UserDetail from "../components/User-Detail";

function AboutPage() {
    return (
    <section className="quienes-somos">
        <h3 className="about">¿Quienes Somos?</h3>
        <p>
            Dressed In Black es una banda Tributo a Depeche Mode fundada en 2010 por cuatro Devotos de la banda en la ciudad de Valencia.
            <br />
            Compartiendo amistad más allá de la banda, el escenario es otro motivo de celebración.
        </p>
        <p>
            Desde pequeños bares a grandes salas, estos más de 10 años rindiendo Tributo han hecho que la banda se conozca a nivel nacional por los fans más fieles y casuales, mostrando su propuesta por todo el Levante y las principales ciudades de España.
        </p>

        <p>
        Somos una banda fiel al sonido original de Depeche Mode, con tintes algo más rockeros y algunas reinterpretaciones personales, lo que provoca en los asistentes una sensación de fidelidad hacia la banda, mezclada con sorpresas y sensación de estar viendo una versión mejorada de la banda original.
        <br />
        Cada concierto al que se asiste es diferente. Nunca repetimos Setlist debido a los más de 70 temas disponible para interpretar con una producción muy cuidada.
        </p>
        <div className="bar"></div>
        <h3 className="about">Dressed In Black son: </h3>
        <UserDetail />

        <p className="thanks">
            Special thanks to: Laura Saint-Claire, Emi Wilder, Carlos Maroto, Luis Botella, José Payá, Juan Luis Manosalbas, Julio César 
        </p>
    </section>
    )
}

export default AboutPage;