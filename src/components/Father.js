import styled from 'styled-components';

const Father = styled.main`
    display:flex;
    flex-direction:column;
    background-color: var(--color-background-login-route);
    height:100vh;
    img {
        width: 180px;
        margin: 68px 97px 32px 97px;
    }
    form {
        display:flex;
        flex-direction:column;
    }
    input {
        width: 90%;
        height: 45px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        margin: 0px auto 6px auto;
        border: 1px solid var(--color-placeholder-border);
        border-radius: 5px;

        ::placeholder, 
        ::-webkit-input-placeholder {
            font-family: 'Lexend Deca', sans-serif;
            color: var(--color-placeholder);
            padding-left:5px;
            font-weight: 400;
            font-size: 20px;
        }
        :-ms-input-placeholder {
            font-family: 'Lexend Deca', sans-serif;
            color: var(--color-placeholder);
            padding-left:5px;
            font-weight: 400;
            font-size: 20px;
        }
    }
    button {
        display:flex;
        justify-content:center;
        align-items:center;
        width: 90%;
        height: 45px;
        background-color: var(--color-button-login);
        border-radius: 4.64px;
        margin: 0px auto 0px auto;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 21px;
        color: var(--color-button-letter);
        &:hover {
            cursor: pointer;
        }
    }
    nav {
        display:flex;
        opacity: 0.7;
        justify-content:center;
        align-items:center;
        width: 90%;
        height: 45px;
        background-color: var(--color-button-login);
        border-radius: 4.64px;
        margin: 0px auto 0px auto;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 21px;
        color: var(--color-button-letter);
        &:hover {
            cursor: pointer;
        }
    }
    footer {
        display:flex;
        margin: 25px auto 0px 72px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: var(--color-button-login);
        font-style: normal;
        text-decoration-line: underline;
    }
`

export {Father};