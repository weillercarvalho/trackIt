import { logins } from '../services/Services';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate, Link } from 'react-router-dom';

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

            logins(body).then((res) => {
                setInformation(res.data);
                navigate('/hoje')
                console.log(information)
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

const Father = styled.main`
    display:flex;
    flex-direction:column;
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