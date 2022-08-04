import { Father } from './Father'
import logo from '../assets/images/logo.png';
import { ThreeDots } from 'react-loader-spinner';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { singups } from '../services/Services';


export default function SingUp() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name, setName] = useState('');
    const [photo,setPhoto] = useState('');
    const [information, setInformation] = useState([]);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    
    function handleForm(e) {
        if (loading === false) {
            setLoading(true);
            e.preventDefault();
            const body = {
                email: email,
                name: name,
                image: photo,
                password: password,
            }

            singups(body).then((res) => {
                setInformation(res.data);
                navigate('/')
                console.log(information)
            });
            singups(body).catch(() => {
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
                                <input type='text' id='text' name='text' value='' placeholder='nome' disabled></input>
                                <input type='text' id='image' name='image' value='' placeholder='foto' disabled></input>
                                <nav><ThreeDots height="70" width="70" radius="9"color="#ffffff" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/></nav>
                            </form>    
                        </>):(
                        <>
                            <img src={logo} alt=''/>
                            <form onSubmit={handleForm}>
                                <input type='email' id='email' name='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                                <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='senha' required></input>
                                <input type='text' id='text' name='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='nome' required></input>
                                <input type='text' id='image' name='image' value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder='foto' required></input>
                                <button>Cadastrar</button>
                            </form>
                            <Link to='/'>
                                <footer>Já tem uma conta? Faça login!</footer>
                            </Link>
                            
                        </>
            )}
        </Father>
    )
}