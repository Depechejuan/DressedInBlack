import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderIMG, SliderIMG2 } from "./Images-slider";

function Slider() {
    const [currentImage, setCurrentImage] = useState(0);
    const [slides, setSlides] = useState(SliderIMG);

    const length = slides.length;

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    };

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    };

    // Detecta el cambio en el ancho de la pantalla usando useEffect
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 900) {
                setSlides(SliderIMG); // Cambia a SliderIMG2 si el ancho es menor o igual a 900px
            } else {
                setSlides(SliderIMG2); // Vuelve a SliderIMG si el ancho es mayor que 900px
            }
        };

        // Agrega un event listener para escuchar el cambio de tamaño de la pantalla
        window.addEventListener("resize", handleResize);

        // Llama a handleResize al cargar la página
        handleResize();

        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            <div className="slider-content">
                {slides.map((slide, index) => {
                    return (
                        <div
                            className={index === currentImage ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === currentImage && (
                                <img src={slide.image} alt='travel image' className='image' />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Slider;
