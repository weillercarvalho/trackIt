import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from './Context';

export default function Header() {

    const [drilling,setDrilling] = useContext(UserContext);
    console.log(drilling)
    return (
        <Headers>
            <div>
                TrackIt
            </div>
            <img src={drilling}/>
        </Headers>
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