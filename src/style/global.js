import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background: #ffffff;
    }

    body, input, button, select {
        font-family: 'PT Serif', serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`;
