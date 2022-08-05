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
    const [tokens,setTokens] = useState('')
    const auth = JSON.parse(localStorage.getItem('trackit'))
    if (auth && tokens === '') {
        setTokens(JSON.parse(localStorage.getItem('trackit')))
    }
    return (
        <>
            <Reset/>
            <Global/>
            <UserContext.Provider value={{drilling, setDrilling, tokens, setTokens}}>
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