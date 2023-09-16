// Here we will set all memeber cards and info about the bandimport UserDetailJuan from "../components/User-Detail-Juan";

import UserDetail from "../components/User-Detail";



function AboutPage() {

    return (
    <>
        <h2>¿Quienes Somos?</h2>
        <p>Dressed In Black es un grupo tributo a Depeche Mode formado en 2011 en el corazón de Valencia</p>

        <UserDetail />


        <p className="thanks">
            Special thanks to: Laura Saint-Claire, Emi Wilder, Carlos Maroto, Luis Botella, José Payá, Juan Luis Manosalbas, Julio César 
        </p>
    </>
    )
}

export default AboutPage;