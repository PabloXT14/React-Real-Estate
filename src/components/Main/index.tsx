import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import {
    Container,
    Wrapper,
    Slide,
    Slider,
    SliderImage,
    SliderContent,
    ArrowIcon,
    SliderButtons,
    PrevButton,
    NextButton
} from "./styles";

/* ===== TIPAGENS ===== */
interface MainProps {
    slides: Array<SliderType>;
}

interface SliderType {
    title: string;
    price: string;
    path: string;
    label: string;
    image: string;
    alt: string;
}


export function Main({ slides }: MainProps) {
    const [current, setCurrent] = useState(0);
    const lenght = slides.length;
    const timeout = useRef(0);

    // LOGIC AUTOMÁRTICA DE IMAGEM NO SLIDE
    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrent(current => (current === lenght - 1 ? 0 : current + 1))
    //     }

    //     timeout.current = setTimeout(nextSlide, 3000)

    //     return function () {
    //         if (timeout.current) {
    //             clearTimeout(timeout.current);
    //         }
    //     }

    // }, [current, lenght]);


    function handleNextSlide() {
        // interrompendo timeout para não passar 2 slides de umas vez
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === lenght - 1 ? 0 : current + 1);
        // console.log(current);
    }

    function handlePrevSlide() {
        // interrompendo timeout para não passar 2 slides de umas vez
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? lenght - 1 : current - 1);
        // console.log(current);
    }

    // TESTE EXTRA DO ARRAY DE SLIDES
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }


    return (
        <Container>
            <Wrapper>
                {slides.map((slide, index) => {
                    return (
                        <Slide key={index}>
                            {index === current && (
                                <Slider>
                                    <SliderImage src={slide.image} alt={slide.alt} />
                                    <SliderContent>
                                        <h2>{slide.title}</h2>
                                        <p>{slide.price}</p>
                                        <Button to={slide.path} primary={true}>
                                            {slide.label}
                                            <ArrowIcon />
                                        </Button>
                                    </SliderContent>
                                </Slider>
                            )}
                        </Slide>
                    );
                })}
                <SliderButtons>
                    <PrevButton onClick={handlePrevSlide} />
                    <NextButton onClick={handleNextSlide} />
                </SliderButtons>
            </Wrapper>
        </Container>
    );
}