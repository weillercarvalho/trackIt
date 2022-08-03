import { Reset } from 'styled-reset';
import {Global} from './Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './Context';
import Login from './Login';
import SingUp from './SingUp';

export default function App() {
    return (
        <>
            <Reset/>
            <Global/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path='/cadastro' element={<SingUp />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}