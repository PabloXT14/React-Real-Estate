import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-primary: #8257E6;
        --color-secondy: #FFFFFF;

        --button-bg-1: #000d1a;
        --button-bg-2: #CD853F;

        --button-text-1: #FFFFFF; 
        --button-text-2: #000d1a;

        --header-background: #121214;
        --slider-background-gradient: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
        );
        --slider-text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        font-family: 'Roboto', sans-serif;

        a {
            text-decoration: none;
        }
    }

`;