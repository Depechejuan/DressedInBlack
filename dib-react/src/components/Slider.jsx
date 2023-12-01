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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 900) {
                setSlides(SliderIMG);
            } else {
                setSlides(SliderIMG2);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

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
                            key={slide.id}
                        >
                            {index === currentImage && (
                                <img src={slide.image} alt='Dressed In Black' className='image' />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Slider;
