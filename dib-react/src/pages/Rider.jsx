import logo from "../assets/logo/logo-contact.jpg"
import ContactCard from "../components/Contact-Card";

function RiderPage() {

    return (
        <section className="rider-container">
            <article className="rider">
                {/* Página 1 */}
                <h2>Rider Técnico de Dressed In Black</h2>
                <img className="rider-logo" src={logo}></img>

                <section className="sub-rider dib-are">
                    <h3 className="rider-main-title">Dressed In Black son:</h3>
                    <ul>
                        <li>Javier Escribano - Voces</li>
                        <li>Juan León - Teclados / Programación / Coros</li>
                        <li>Luis Alcober - Guitarra / Teclados</li>
                        <li>Javier Redondo - Batería / Programación</li>
                        <li>Manuel Cuesta - Bajo</li>
                    </ul>
                </section>
                {/* Página 2 */}
                {/* ¿Indice? */}


                {/* Página 3 */}
                <section className="sub-rider backline">
                    <h3 className="rider-main-title">Nuestro Backline</h3>
                    <h4 className="rider-sub-title">Batería</h4>
                    <ul>
                        <li>Bombo</li>
                        <li>Caja</li>
                        <li>HiHat</li>
                        <li>Tom (x2)</li>
                        <li>Goliat</li>
                        <li>Cymbal (x2)</li>
                        <li>Alesis SamplePad</li>
                        <li>Mixer Interno / Claqueta</li>
                    </ul>
                    <h5>Elementos opcionales</h5>
                    <ul>
                        <li>Trigger</li>
                        <li>Toms Adicionales</li>
                    </ul>
                    <p className="additional-info">
                        Se utilizarán en algunos conciertos, dependiendo de la configuración y setlist.
                    </p>

                    <h4 className="rider-sub-title">Guitarra</h4>
                    <ul>
                        <li>Gibson Les Paul Classic</li>
                        <li>Amplificador Fender Blues Junior</li>
                        <li>Varios pedales de efectos </li>
                    </ul>
                    <p className="additional-info">
                        Los pedales variarán dependiendo de la configuración y setlist.
                    </p>

                    <h4 className="rider-sub-title">Voz</h4>
                    <ul>
                        <li>Shure SM58</li>
                        <li>Boss ve20 - Pedal de Efectos</li>
                    </ul>

                    <h4 className="rider-sub-title">Electrónica</h4>
                    <ul>
                        <li>M-Audio Oxygen 61 3rd Gen</li>
                        <li>Shure SM58</li>
                        <li>Software: Propellerheads Reason 10</li>
                        <li>Macbook Pro 13</li>
                        <li>Interfaz Audio Tascam Series 208i</li>
                    </ul>

                    <h4 className="rider-sub-title">Bajo</h4>
                    <ul>
                        <li>Ibanez SR300E</li>
                        <li>Amplificador EBS Session 120</li>
                    </ul>
                </section>

                {/* Página 4 */}
                <section className="sub-rider distribution">
                    <h3 className="rider-main-title">Distribución en el escenario</h3>
                    <p>
                        Dressed In Black son 5 miembros, pero durante el concierto se van adoptando varias posiciones sobre el escenario.
                    </p>
                    <p>
                        Es por este motivo por el que representamos varias distribuciones.
                    </p>

                    <h3 className="rider-main-title">Distribución Interna</h3>
                    <ul>
                        <li>
                            Batería: Zona trasera del escenario, ligeramente desplazada hacia la izquierda
                        </li>
                        <li>
                            Voz: Zona frontal del escenario, centrado, ligeramente desplazado a la derecha.
                        </li>
                        <li>
                            Teclado #1: Zona trasera del escenario, desplazado a la derecha.
                        </li>
                        <li>
                            Teclado #2: Ubicado a la derecha del Teclado #1
                        </li>
                        <li>
                            Guitarra: Zona frontal del escenario, desplazado a la izquierda.
                        </li>
                        <li>
                            Bajo: Zona media del escenario, desplazado ligeramente a la izquierda
                        </li>
                    </ul>
                </section>

                {/* Página 5 */}
                <section className="sub-rider requirements">
                    <h3 className="rider-main-title">Requerimientos de Audio, P.A. e Input List</h3>
                    <h4 className="rider-sub-title">Inputs</h4>
                    <ul>
                        <li>Voces: XLR x1</li>
                        <li>Coros: XLR x1</li>
                        <li>Electrónica: TSR x2 Balanceado</li>
                        <li>Efectos & Fx Voices: TSR x2 Balanceado</li>
                        <li>Guitarra: Microfoneo del Amplificador</li>
                        <li>Bajo: Microfoneo del Amplificador</li>
                        <li>Batería: Microfoneo del set completo</li>
                    </ul>
                    <p>Requerimos de D.I. para la electrónica y los efectos.</p>
                    <p>La microfonía de los amplificadores y del set de batería quedan a gusto del promotor</p>

                    <h4 className="rider-sub-title">Puntos de Luz</h4>
                    <p>Se solicitan puntos de luz en los siguientes puestos:</p>
                    <ul>
                        <li>Zona Batería: 4 entradas</li>
                        <li>Zona Teclado: 6 entradas</li>
                        <li>Zona Guitarra/Bajo: 6 entradas</li>
                        <li>Zona Voz: 2 entradas</li>
                    </ul>
                    <p>
                        Se ruega consultar con la banda si estas configuraciones pueden verse alteradas.
                    </p>

                    <h4 className="rider-sub-title">Configuración de Monitores</h4>
                    <ul>
                        <li>Zona Voz: IEM + Monitor. Se solicita salida de voz, coros y electrónica a nivel alto, instrumentacion general a nivel medio</li>
                        <li>Zona Batería: Se requiere una salida JACK o XLR a la zona. Se solicita una mezcla general de toda la instrumentación y voces mediante ese canal. No es necesario monitor.</li>
                        <li>Zona Teclados: Se solicita electrónica, voz y coros únicamente.</li>
                        <li>Zona Guitarra y Bajo: Se solicita mezcla general, potenciando los instrumentos de la zona</li>
                    </ul>
                    <p>NOTA: La claqueta se mandará de forma interna al mixer de la batería.</p>
                </section>

                {/* Página 5 */}
                <section className="sub-rider requests">
                    <h3 className="rider-main-title">Otros Requerimientos</h3>
                    <p>Esta lista de requerimientos nos ayudará mucho en todo el viaje del Show, desde que salimos
                    de nuestros locales hasta la vuelta.</p>
                    <p>Se ruega avisar al promotor con al menos 30 días de antelación si no se puede cumplir alguno
                    de estos requerimientos para organizar correctamente los desplazamientos y montajes del
                    grupo.</p>

                    <h4 className="rider-sub-title">Instrumentación y accesorios</h4>
                    <p>Agradecemos la facilitación de estos elementos para nuestros conciertos:</p>
                    <ul>
                        <li>Pie de micrófono principal</li>
                        <li>Pie de micrófono para coros</li>
                        <li>Micrófono para Voces</li>
                        <li>Micrófono para Coros</li>
                        <li>Soporte básico para teclado</li>
                    </ul>

                    <h4 className="rider-sub-title">Batería</h4>
                    <p>Para un óptimo desplazamiento, se solicita la estructura de una batería ya instalada en el escenario. De esta manera, sólo cargaremos con lo necesario.</p>
                    <p>En caso de no disponer de este servicio o de tener un coste, se ruega comunicación a la banda</p>


                    <h4 className="rider-sub-title">Vestuario/Almacén</h4>
                    <p>Solicitamos una habitación o zona donde poder ubicar nuestras mochilas y objetos personales durante la actuación</p>

                    <h4 className="rider-sub-title">Servicio de Taquillero</h4>
                    <p>Es necesario un taquillero con herramientas para cobrar las entradas de última hora, así como poder validar las entradas online vendidas con anterioridad.</p>
                    <p>Desde la banda, trabajamos con la plataforma “Entradium”, usando la aplicación de validación  “appcedo QR”, disponible en Android e iOS.</p>

                    <h4 className="rider-sub-title">Elevación para Amplificador de Guitarra.</h4>
                    <p>Solicitamos cualquier opción que pueda elevar el amplificador de guitarra a una altura de aproximadamente 1,5m.</p>

                    <h4 className="rider-sub-title">Funcionamiento pre concierto.</h4>
                    <p>Antes del comienzo del show, un integrante subirá al escenario para comprobar que todo funciona O.K.</p>
                    <p>Tras recibir el visto bueno del técnico, accionará un botón para reproducir una  secuencia de 2 minutos de silencio.</p>
                    <p>Durante ese tiempo, se reproducirá la música habitual del local.</p>
                    <p>Tras esos minutos, dos canciones empezarán a sonar desde nuestro equipo.</p>
                    <p>En ese momento se deberá, poco a poco, disminuir el hilo musical de la sala e ir dando paso al sonido del equipo de Dressed In Black.</p>
                    <p>Al terminar la segunda canción canción, comenzará nuestra “intro” y el show.</p>


                    <h4 className="rider-sub-title">Proyecciones</h4>
                    <p>Dressed In Black – Tributo a DEPECHE MODE, dispone de proyecciones propias, las cuales deben reproducirse sincronizadas con la música en directo.</p>
                    <p>Es necesario una salida HDMI en el punto de control de los teclados para su correcto lanzamiento.</p>


                    <h4 className="rider-sub-title">Iluminación</h4>
                    <p>Dressed In Black no tiene una iluminación concreta definida. Adaptados a la sala, y dentro de lo posible, proporcionaremos un SetList de las canciones que se interpreten durante el show, con anotación de colores dominantes</p>

                    <h4 className="rider-sub-title">Solicitud de grabación Audiovisual</h4>
                    <p>Se solicita desde la banda el permiso de grabar el concierto con algunas cámaras tipo GoPro, así como obtener el audio SoundBoard directo de la mesa de mezclas si esto fuese posible.</p>
                </section>



                {/* Página 6 */}
                <section className="sub-rider rider-contact">
                    <h3 className="rider-main-title">Contacto</h3>
                    <ContactCard />
                </section>
            </article>
        </section>
    )
}

export default RiderPage;