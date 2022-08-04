import { Reset } from 'styled-reset';
import {Global} from './Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './Context';
import Login from './Login';
import SingUp from './SingUp';
import Today from './Today';
import PrivatePage from '../services/PrivatePage';

export default function App() {
    return (
        <>
            <Reset/>
            <Global/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path='/cadastro' element={<SingUp />}/>
                    <Route path='/hoje' element={<PrivatePage><Today /></PrivatePage>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}