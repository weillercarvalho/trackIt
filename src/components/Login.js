import { logins } from '../services/Services';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate, Link } from 'react-router-dom';
import { Father } from './Father';

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [information, setInformation] = useState([]);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    
    function handleForm(e) {
        if (loading === false) {
            setLoading(true);
            e.preventDefault();
            const body = {
                email: email,
                password: password
            }
            console.log(body)
            logins(body).then((res) => {
                setInformation(res.data);
                navigate('/hoje')
                console.log(res)
            });
            logins(body).catch(() => {
                alert(`Falha ao logar`);
                setLoading(false)
            })  
        }
    }

  

    return (
        <Father>
            {loading ? (<>
                            <img src={logo} alt=''/>
                            <form>
                                <input type='email' id='email' name='email' placeholder='email' value='' disabled></input>
                                <input type='password' id='password' name='password' value='' placeholder='senha' disabled></input>
                                <nav><ThreeDots height="70" width="70" radius="9"color="#ffffff" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/></nav>
                            </form>    
                        </>):(
                        <>
                            <img src={logo} alt=''/>
                            <form onSubmit={handleForm}>
                                <input type='email' id='email' name='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                                <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='senha' required></input>
                                <button>Entrar</button>
                            </form>
                            <Link to='/cadastro'>
                                <footer>Não tem uma conta? Cadastre-se!</footer>
                            </Link>
                            
                        </>
            )}
        </Father>
    )
}

