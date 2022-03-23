import styled, { css } from "styled-components";
import { IoMdArrowRoundForward, IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';


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

export const Slide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

export const Slider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SliderImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

export const SliderContent = styled.div`

    a {
        max-width: 10rem;
    }
`;

export const ArrowIcon = styled(IoMdArrowRoundForward)``;


/* Button Prev and Next Styling */
export const SliderButtons = styled.div`
    position: absolute;
    bottom: 3.12rem;
    right: 3.12rem;
    display: flex;
    z-index: 10;
`;

const arrowButtons = css`
    width: 3.12rem;
    height: 3.12rem;
    border-radius: 50%;
    color: var(--color-secondy);
    background: var(--button-bg-1);

    padding: 0.6rem;
    margin-right: 1rem;
    user-select: none;
    
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        background: var(--button-bg-2);
        transform: scale(1.05);
    }
`;

export const PrevButton = styled(IoMdArrowBack)`
    ${arrowButtons}
`;

export const NextButton = styled(IoMdArrowForward)`
    ${arrowButtons}
`;