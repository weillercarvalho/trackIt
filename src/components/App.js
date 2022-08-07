import { Reset } from 'styled-reset';
import {Global} from './Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './Context';
import Login from './Login';
import SingUp from './SingUp';
import Today from './Today';
import PrivatePage from '../services/PrivatePage';
import { useState } from 'react';
import Habits from './Habits';
import History from './History';

export default function App() {
    const [drilling, setDrilling] = useState('');
    const [tokens,setTokens] = useState('');
    const [hab,setHab] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [habt, setHabt] = useState('');
    const [today,setToday] = useState([])
    const [prog,setProg] = useState(0);
    const [habits, setHabits] = useState([]);
    const [days,setDays] = useState([        
        {day: 'D', number: 0, isAvailable: false}, 
        {day: 'S', number: 1, isAvailable: false}, 
        {day: 'T', number: 2, isAvailable: false}, 
        {day: 'Q', number: 3, isAvailable: false}, 
        {day: 'Q', number: 4, isAvailable: false}, 
        {day: 'S', number: 5, isAvailable: false}, 
        {day: 'S', number: 6, isAvailable: false}, 
        ])
    

    const auth = JSON.parse(localStorage.getItem('trackit'));
    if (auth && tokens === '') {
        setTokens(JSON.parse(localStorage.getItem('trackit')));
    }
    return (
        <>
            <Reset/>
            <Global/>
            <UserContext.Provider value={{drilling, setDrilling, tokens, setTokens, hab, setHab, clicked, setClicked, habt, setHabt, prog, setProg, days, setDays, habits, setHabits, today, setToday}}>
                <BrowserRouter>
                        <Routes>              
                            <Route path='/' element={<Login />}/>
                            <Route path='/cadastro' element={<SingUp />}/>
                            <Route path='/hoje' element={<PrivatePage><Today /></PrivatePage>}/>
                            <Route path='habitos' element={<PrivatePage><Habits /></PrivatePage>}/>
                            <Route path='historico' element={<PrivatePage><History /></PrivatePage>}/>
                        </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}