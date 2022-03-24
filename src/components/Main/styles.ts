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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        /* background: var(--slider-background-gradient); */
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
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
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 100rem;
    width: calc(100% - 6.25rem);
    color: var(--color-secondy);

    h2 {
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: var(--slider-text-shadow);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p {
        margin-bottom: 1.2rem;
        text-shadow: var(--slider-text-shadow);
    }


    a { /* Button */
        max-width: 10rem;
    }
`;

export const ArrowIcon = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;


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