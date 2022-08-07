import styled from 'styled-components';


export default function History() {
    return (
        <Father>
            <div>Histórico</div>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Father>
    )
}
const Father = styled.div`
    margin-top: 98px;
    margin-left: 17px;

    div {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 23px;
        color: var(--color-fixed-top);
        font-style: normal;
        margin-bottom: 17px;
    }
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: var(--color-letter-gray-black);
        font-style: normal;
        
    }
`