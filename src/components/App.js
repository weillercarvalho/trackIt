import { Reset } from 'styled-reset';
import {Global} from './Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './Context';
import Login from './Login';
import SingUp from './SingUp';
import Today from './Today';
import PrivatePage from '../services/PrivatePage';
import { useState } from 'react';

export default function App() {
    const [drilling, setDrilling] = useState('');

    return (
        <>
            <Reset/>
            <Global/>
            <UserContext.Provider value={{drilling, setDrilling}}>
                <BrowserRouter>
                        <Routes>              
                            <Route path='/' element={<Login />}/>
                            <Route path='/cadastro' element={<SingUp />}/>
                            <Route path='/hoje' element={<PrivatePage><Today /></PrivatePage>}/>
                        </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}