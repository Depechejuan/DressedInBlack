import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderIMG } from "./Images-slider"

import "../styles/slider.css"

function Slider({slides}) {
    const [currentImage, setCurrentImage] = useState(0);
    

    
    const length = slides.length

    const nextSlide = () => {
        setCurrentImage(currentImage === length -1 ? 0 : currentImage + 1);
    };

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length -1 : currentImage - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            <div className="slider-content">
                {SliderIMG.map((slide, index) => {
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



    // const images = [
    //     "../../public/slider/dib01-black.png",
    //     "../../public/slider/dib02-photo.jpg",
    //     "../../public/slider/dib03-endshow.jpg",
    //     "../../public/slider/dib04-band.jpg",
    //     "../../public/slider/dib05-escri.jpg",
    //     "../../public/slider/dib06-dpj.jpg",
    //     "../../public/slider/dib07-javi.jpg",
    //     "../../public/slider/dib08-luis.jpg",
    //     "../../public/slider/dib09-murcia.jpg",
    //     "../../public/slider/dib10-white.png"
    // ];