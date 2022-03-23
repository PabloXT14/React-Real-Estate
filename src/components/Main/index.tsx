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
    return (
        <Container>
            <Wrapper>
                {slides.map((slide, index) => {
                    return (
                        <Slide key={index}>
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
                        </Slide>
                    );
                })}
                <SliderButtons>
                    <PrevButton />
                    <NextButton />
                </SliderButtons>
            </Wrapper>
        </Container>
    );
}