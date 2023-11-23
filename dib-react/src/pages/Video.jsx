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
        <section>
            <h2>Videos</h2>
            <p>Videos de Dressed In Black:</p>
            <div>
                {/* Sección de vídeos*/}
            <iframe
                src={`https://www.youtube.com/embed/${getVideoId('https://www.youtube.com/watch?v=r7_vPDvveWM')}`}
                title="Dressed In Black - Tributo a DEPECHE MODE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
            </div>
        </section>
    )
}

export default Video