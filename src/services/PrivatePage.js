import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



export default function PrivatePage({children}) {
    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem('trackit'));

    if (auth) {
        return (
            <>
                <Header/>
                {children}
            </>
        )
    }
    else {
        navigate('/');
    }
}

    function Header() {

 
    const auth = JSON.parse(localStorage.getItem('trackit'));

    return (
        <>
            <Headers>
                <div>
                    TrackIt
                </div>
                <img src={auth.image} alt=''/>
            </Headers>
            <Footer />
        </>
    )
}

    function Footer() {
        const navigate = useNavigate();
        return (
            <Footers>
                    <div onClick={() => navigate('/habitos')}>
                        Habitos
                    </div>
                    <nav onClick={() => navigate('/hoje')}>
                        <CircularProgressbar value={40} text={`Hoje`} background backgroundPadding={6} styles={buildStyles({backgroundColor: "#3e98c7",textColor: "#fff",pathColor: "#fff",trailColor: "transparent"})}/>
                    </nav>
                    <div onClick={() => navigate('/historico')}>
                        Historico
                    </div>
            </Footers>
        )
    }

const Headers = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    background-color: var(--color-fixed-top);

    div {
        font-family: 'Playball', cursive;
        font-size: 39px;
        font-style: normal;
        color: var(--color-button-letter);
        margin-left: 18px;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        margin-right: 18px;
    }

`

const Footers = styled.footer`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    position: fixed;
    bottom: 0px;
    background-color: var(--color-fixed-botton);
    width: 100%;

    div {
        color: var(--color-button-footer);
        font-size: 18px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        margin: 0px 30px 0px 30px;
        &:hover{
            cursor:pointer;
        }
    }

    nav {
        width: 91px;
        height: 91px;
        margin-bottom: 30px;
        border-radius:50%;
        &:hover{
            cursor:pointer;
        }
      
    }
`