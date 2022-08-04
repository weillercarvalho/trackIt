import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    *{
        box-sizing: border-box;
        --color-background-login-route: #FFFFFF;
        --color-background-habits-route: #F2F2F2;
        --color-button-login: #52B6FF;
        --color-fixed-top: #126BA5;
        --color-fixed-botton: #FFFFFF;
        --color-button-letter: #FFFFFF;
        --color-letter-text: #666666;
        --color-unselected: #EBEBEB;
        --color-unselected-stroke: #E7E7E7;
        --color-selected: #8FC549;
        --color-porcent-text: #8FC549;
        --color-placeholder: #DBDBDB;
        --color-placeholder-border: #D5D5D5;
    }

    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Lexend Deca', sans-serif;
        background-color: var(--color-background-habits-route);
    }

    @media (max-width: 375px) {
        width: 100%;
        height: 100%;
    }
`

export {Global};