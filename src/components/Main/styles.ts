import styled from "styled-components";
import { IoMdArrowRoundForward } from 'react-icons/io';


export const Container = styled.div`
    height: 100vh;
    max-height: 68.75rem;
    position: relative;
    overflow: hidden;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
`;

export const Slide = styled.div``;

export const Slider = styled.div``;

export const SliderImage = styled.img``;

export const SliderContent = styled.div`

    a {
        max-width: 10rem;
    }
`;

export const ArrowIcon = styled(IoMdArrowRoundForward)``;