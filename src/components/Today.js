import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';


export default function Today() {
    const days = dayjs().locale('pt-br').format('dddd').replaceAll('-feira','');
    const daysatt = days.replace(days[0],days[0].toUpperCase())
    const date = dayjs().format('DD/MM')
    return (
            <Begin>
               <div>{daysatt}, {date}</div>
               <nav>Nenhum hábito concluído ainda</nav> 
               <main>
                <section>
                    <h1>Ler 1 capítulo de livro</h1>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </section>
               </main>
               <main>
                <section>
                    <h1>Ler 1 capítulo de livro</h1>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </section>
               </main>
               <main>
                <section>
                    <h1>Ler 1 capítulo de livro</h1>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </section>
               </main>
            </Begin>
    )
}

const Begin = styled.div`
    margin: 98px 0px 0px 17px;
    display: flex;
    flex-direction: column;
    width: 90%;

    div {
        font-family: 'Lexend Deca', sans-serif;
        color: var(--color-fixed-top);
        font-size: 23px;
        font-weight: 400;
        font-style: normal;
    }
    nav {
        font-family: 'Lexend Deca', sans-serif;
        color: var(--color-letter-gray);
        font-size: 18px;
        font-weight: 400;
        font-style: normal;
        margin-bottom: 28px;
    }
    main {
        width: 100%;
        height: 94px;
        display:flex;
        margin-bottom: 10px;
        background-color: var(--color-button-letter);
    }
    section {
        display:flex;
        flex-direction:column;
        margin: 13px 35px 17px 15px;
    }
    h1 {
        font-family: 'Lexend Deca', sans-serif;
        color: var(--color-letter-gray-black);
        font-size: 20px;
        font-weight: 400;
        font-style: normal;
        margin-bottom: 7px;
    }
    p {
        font-family: 'Lexend Deca', sans-serif;
        color: var(--color-letter-gray-black);
        font-size: 13px;
        font-weight: 400;
        font-style: normal;
    }

`