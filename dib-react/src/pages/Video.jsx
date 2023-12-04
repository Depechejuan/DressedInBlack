import Divider from "../components/Divider";

function Video() {

    function getVideoId(url) {
        if (url && typeof url === 'string') {
            const parts = url.split("v=");
            if (parts.length === 2) {
                return parts[1];
            }
        }
        return null;
    }


    return(
        <section className="video-page">
            <h3>Videos</h3>
            <p>¿Quieres saber cómo sonamo?</p>
            <p>¡Aquí tienes la respuesta!</p>

            <div className="videos">
                <h4>Never Let Me Down Again</h4>
                <h5>(Live @ Summer Village PM2, Alicante)</h5>
                <iframe
                    src={`https://www.youtube.com/embed/${getVideoId('https://www.youtube.com/watch?v=LQLwuLQoJZU')}`}
                    title="Dressed In Black - Tributo a DEPECHE MODE"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />

            <Divider />

                <h4>Behind The Wheel</h4>
                <h5>(Live @ Black Note Club, Valencia)</h5>
                <iframe
                    src={`https://www.youtube.com/embed/${getVideoId('https://www.youtube.com/watch?v=r7_vPDvveWM')}`}
                    title="Dressed In Black - Tributo a DEPECHE MODE"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />

            <Divider />

                <h4>Walking In My Shoes</h4>
                <h5>(Live @ Sala Rockstar, Benidorm)</h5>
                <iframe
                    src={`https://www.youtube.com/embed/${getVideoId('https://www.youtube.com/watch?v=b83TdsGbG24')}`}
                    title="Dressed In Black - Tributo a DEPECHE MODE"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />

            <Divider />
            
                <h4>Rush</h4>
                <h5>(Live @ Maravillas Club, Madrid)</h5>
                <iframe
                    src={`https://www.youtube.com/embed/${getVideoId('https://www.youtube.com/watch?v=uf6ZtzweZeY')}`}
                    title="Dressed In Black - Tributo a DEPECHE MODE"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>


        </section>
    )
}

export default Video