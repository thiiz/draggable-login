'use client'

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
    font-size: 62.5%;
    }

    html{
        font-size: 100%;
    }
    body{
        font-size: 1.6rem;
    }
`;

export default GlobalStyle
