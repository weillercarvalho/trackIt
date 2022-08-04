import { logins } from '../services/Services';
import logo from '../assets/images/logo.png';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate, Link } from 'react-router-dom';
import { Father } from './Father';
import { useContext } from 'react';
import UserContext from './Context';

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
   
    const {drilling, setDrilling} = useContext(UserContext);


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

                console.log(res.data)

                setDrilling(res.data.image);
                console.log(drilling);
                navigate('/hoje');
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

