import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { habitsgettoday, habitspostdone, habitspostundone } from '../services/Services';
import { ThreeDots } from 'react-loader-spinner';
import { useContext, useState, useEffect } from 'react';
import UserContext from './Context';
import { IconContext } from 'react-icons';
import { BsCheckSquare } from 'react-icons/bs';
import {BsCheckSquareFill} from 'react-icons/bs'

export default function Today() {
    const days = dayjs().locale('pt-br').format('dddd').replaceAll('-feira','');
    const daysatt = days.replace(days[0],days[0].toUpperCase());
    const date = dayjs().format('DD/MM');
    const {prog, setProg, today, setToday} = useContext(UserContext);
    const [able,setAble] = useState(false);
    const [text, setText] = useState('');
    const [testundone, setTestundone] = useState([]);
    const [testdone, setTestdone] = useState([]);
    const [screen, setScreen] = useState(false);

    useEffect(() => {
        habitsgettoday()
        .catch((res) => {
            console.log(res.response.data)
        })
        .then((res) => {
            setToday(res.data);
            const doneHab = res.data.filter(value => value.done);
            const perc = Math.round((doneHab.length / res.data.length) * 100);
            if (doneHab.length === 0) {
                setAble(false);
                setText('Nenhum habito concluido.')
            } else {
                setAble(true);
                setText(`${perc}% dos habitos concluidos.`)
            }
            setProg(perc);
        })
    },[prog, screen])


    
    function check(todayId) {
        const values = today.filter(value => todayId === value.id)[0];
        if (values.done) {
            habitspostundone(todayId)
            .catch((res) => {
                setTestundone(res);
            })
            .then(() => {
                setScreen(!screen);
            });
        } else {
            habitspostdone(todayId)
            .catch((res) => {
                setTestdone(res);
            })
            .then(() => {
                setScreen(!screen);
            })
        }
    }

    return (
        <Begin able={able}>
            <div>{daysatt}, {date}</div>
            <nav>{text}</nav> 
            {today.map((value,index) => (<Todays  key={index} id={value.id} name={value.name} check={check} done={value.done} currentSequence = {value.currentSequence} highestSequence = {value.highestSequence} />))}
        </Begin>
    )
}

function Todays({id,name,done,currentSequence,highestSequence, check}) {

    const comparation = (highestSequence !== 0 && (currentSequence === highestSequence))

    return (
            <>
               <main>
                <section>
                    <h1>{name}</h1>
                    <p done={done}>Sequência atual: {currentSequence} dias</p>
                    <p done={comparation}> Seu recorde: {highestSequence} dias</p>
                </section>
                    <IconContext.Provider value={{color: done ? ('var(--color-selected)') : ('var(--color-unselected)'), size: '74px'}}>
                        <BsCheckSquareFill onClick={() => check(id)}/>
                    </IconContext.Provider>
               </main>
            </>   
    )
}

const Begin = styled.div`
    margin: 98px 0px 91px 17px;
    display: flex;
    flex-direction: column;
    width: 90%;
    position: relative;

    div {
        font-family: 'Lexend Deca', sans-serif;
        color: var(--color-fixed-top);
        font-size: 23px;
        font-weight: 400;
        font-style: normal;
    }
    nav {
        font-family: 'Lexend Deca', sans-serif;
        color:${(props) => props.able ? ('--color-selected'):('var(--color-letter-gray)')} ;
        font-size: 18px;
        font-weight: 400;
        font-style: normal;
        margin-bottom: 28px;
        margin-top: 10px;
    }
    main {
        width: 100%;
        height: 94px;
        display:flex;
        margin-bottom: 10px;
        background-color: var(--color-button-letter);
        align-items: center;
        justify-content: space-evenly;
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
    footer {
        position: absolute;
        top: 8px;
        right: 8px;
    }
`
