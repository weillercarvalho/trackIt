import styled from 'styled-components';
import UserContext from './Context';
import { useContext } from 'react';
import { habitsget, habitspost, habitsdelete } from '../services/Services';
import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import trash from '../assets/images/Group.png'


export default function Habits() {
    const {hab, setHab, clicked, setClicked, habt, setHabt, days, setDays, habits, setHabits} = useContext(UserContext);
    const [count, setCount] = useState(false);
    const [toggle, setToggle] = useState(false);
   

    function handleForm(e) {
        e.preventDefault();
        setToggle(true);

        const sotired = days.filter(value => value.isAvailable).map(value => value.number)
        
        const body = {
            name: habt,
            days: sotired,
        }
        console.log(body)

        habitspost(body)
        .catch((res) => {
            setToggle(false);
            console.log(res.response.data)
        })
        .then((res) => {
            console.log(res.data);
            const reborn = days.map(value => {
                return {
                    ...value, isAvailable: false
                }
            });
            setToggle(false);
        })
        
    }

    function exausted(seatId) {
        const newDays = days.map(value => {
            if (value.number === seatId) {
                return {
                    ...value, isAvailable: !value.isAvailable
                };
            }
            return value;
        } );

        setDays(newDays)
    }

    useEffect(() => {
        habitsget()
        .catch((res) => {
            console.log(res)
        })
        .then((res) => {
            setHabits(res.data)
        })
        
    },[count])

    

    function deleted(bolinha) {
        const conf = window.confirm('Deseja deletar o box?');
        if (conf) {
            habitsdelete(bolinha)
            .then(() => {
                setCount(!count);
            })
            .catch(() => {
                setCount(!count)
            })
        }
    }


    return (
        <>
            {clicked ? 
            (<>
                {toggle ? 
                (                
                <Begins >
                    <nav>
                        Meus hábitos
                        <div>+</div>
                    </nav>
                    <main>
                            <input type='text' id='text' name='text' placeholder='nome do hábito' value='' disabled></input>
                            <aside>
                                {days.map((value,index) => (<Tired key={index} number={value.number} day={value.day} isAvailable={value.isAvailable} exausted={exausted}/>))}
                            </aside>
                            <h1 onClick={() => setClicked(!clicked)}>Cancelar</h1>
                            <ThreeDot><ThreeDots height="70" width="70" radius="9"color="#ffffff" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/></ThreeDot>
                    </main>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </Begins>) 
                : 
                (
                    habits.length === 0 ? 
                    (<Begins >
                        <nav>
                            Meus hábitos
                            <div>+</div>
                        </nav>
                        <main>
                            <form onSubmit={handleForm}>
                                <input type='text' id='text' name='text' placeholder='nome do hábito' value={habt} onChange={(e) => setHabt(e.target.value)}></input>
                                <aside>
                                    {days.map((value,index) => (<Tired key={index} number={value.number} day={value.day} isAvailable={value.isAvailable} exausted={exausted}/>))}
                                </aside>
                                <h1 onClick={() => setClicked(!clicked)}>Cancelar</h1>
                                <button>Salvar</button>
                            </form>
                        </main>
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </Begins>)
                    : 
                    (<Begins >
                        <nav>
                            Meus hábitos
                            <div>+</div>
                        </nav>
                        <main>
                            <form onSubmit={handleForm}>
                                <input type='text' id='text' name='text' placeholder='nome do hábito' value={habt} onChange={(e) => setHabt(e.target.value)}></input>
                                <aside>
                                    {days.map((value,index) => (<Tired key={index} number={value.number} day={value.day} isAvailable={value.isAvailable} exausted={exausted}/>))}
                                </aside>
                                <h1 onClick={() => setClicked(!clicked)}>Cancelar</h1>
                                <button>Salvar</button>
                            </form>
                        </main>
                    </Begins>)
                )}
            </>)
            :
            (
                habits.length === 0 ? 
                (
                <Begins>
                    <nav>
                        Meus hábitos
                        <div onClick={() => setClicked(!clicked)}>+</div>
                    </nav>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </Begins>
                ) 
                : 
                (
                <>
                    <Begins>
                        <nav>
                            Meus hábitos
                            <div onClick={() => setClicked(!clicked)}>+</div>
                        </nav>
                    </Begins>
                    <Uncle>
                        {habits.map((value,index) => (<GettingHabits key={index} id={value.id} dayz={value.days} name={value.name} deleted={deleted}/>))}
                    </Uncle>    
                </>
                )
            )}  
        </>
    )
}

function GettingHabits({name, id, dayz, deleted}) {
    const {habits, setHabits} = useContext(UserContext);

    const tested = [        
        {day: 'D', number: 0, isAvailable: false}, 
        {day: 'S', number: 1, isAvailable: false}, 
        {day: 'T', number: 2, isAvailable: false}, 
        {day: 'Q', number: 3, isAvailable: false}, 
        {day: 'Q', number: 4, isAvailable: false}, 
        {day: 'S', number: 5, isAvailable: false}, 
        {day: 'S', number: 6, isAvailable: false}, 
        ]

    const suffering = tested;

    const returned = suffering.map(value => {
        if (dayz.includes(value.number)) {
            return {
                ...value, isAvailable: true,
            }
        }
        return value;
    })

    return (
        <Gets>
            <h1>{name}</h1>
            <img onClick={() => deleted(id)} src={trash}/>
            <main>
                {returned.map(value => (<Weekend isAvv={value.isAvailable}>{value.day}</Weekend>))}
            </main>
        </Gets>
    )
}

function Tired({day, number, exausted}) {
    
    const [click, setClick] = useState(false);


    function updateHabit() {
        setClick(!click);
        exausted(number)
       
    }
   
    return (
        <Lined click={click} onClick={updateHabit}> 
            {day}
        </Lined>    
    )
}

const Begins = styled.div`
    margin: 98px 0px 0px 17px;
    

    nav {
        display:flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        color: var(--color-fixed-top);
        width: 95%;
    }
    div {
        width: 40px;
        height: 35px;
        background-color: var(--color-button-login);
        color: var(--color-button-letter);
        font-size: 27px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius: 5px;
        &:hover {
            cursor: pointer;
        }
    }
    p {
        display:flex;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        margin-top: 30px;
        color: var(--color-letter-text);
    }
    main {
        margin-top: 30px;
        height: 180px;
        width: 95%;
        display: flex;
        flex-direction: column;
        padding: 15px;
        background-color: var(--color-button-letter);
        border-radius: 5px;
        position: relative;
    }
    input {
        width: 100%;
        height: 45px;
        background-color: var(--color-button-letter);
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

    form {
        display:flex;
        flex-direction: column;    
    }
    aside {
        display: flex;
    }

    h1 {
        display:flex;
        position: absolute;
        bottom: 23px;
        right: 123px;
        color: var(--color-button-login);
        font-size: 16px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        &:hover {
            cursor: pointer;
        }
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-button-login);
        color: var(--color-button-letter);
        width: 84px;
        height: 35px;
        font-size: 16px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        position: absolute;
        bottom: 15px;
        right: 16px;
        border-radius: 5px;
        border: none;
        &:active{
            transform:scale(0.8);
        }
        &:hover {
            cursor:pointer;
        }

    }
`
const Lined = styled.section`
    display: flex;
    margin-top: 8px;
    width: 30px;
    height: 30px;
    background-color: ${(props) => (props.click ? 'var(--color-placeholder)': 'var(--color-button-letter)')};
    color: ${(props) => (props.click ? 'var(--color-button-letter)': 'var(--color-placeholder)')};
    border: 1px solid var(--color-placeholder-border);
    border-radius: 5px;
    margin-right: 4px;
    display:flex;
    justify-content:center;
    align-items:center; 
    &:hover{
        cursor: pointer;
    }
`

const ThreeDot = styled.div`
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-button-login);
    color: var(--color-button-letter);
    width: 84px !important;
    height: 35px;
    font-size: 16px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    position: absolute;
    bottom: 15px;
    right: 16px;
    border-radius: 5px;
    border: none;
    &:hover {
        cursor:pointer;
    }

`
const Gets = styled.div`
    margin: 20px 0px 20px 0px;
    height: 91px;
    width: 95%;
    background-color: var(--color-button-letter);
    position: relative;


    h1 {
        font-family: 'Lexend Deca', sans-serif !important;
        font-size: 20px !important;
        font-weight: 400 !important;
        color: var(--color-letter-text) !important;
        margin: 13px 0px 0px 15px !important;

    }
    main {
        display:flex;
        margin-left: 17px;
    }

    img {
        position: absolute;
        top: 11px;
        right: 10px;
        &:hover {
            cursor: pointer;
        }
    }

`
const Uncle = styled.div`
    display:flex;
    flex-direction:column;
    margin: 0px auto 91px 17px;
`

const Weekend = styled.section`
    display: flex;
    margin-top: 8px;
    width: 30px;
    height: 30px;
    background-color: ${(props) => (props.isAvv ? 'var(--color-placeholder)': 'var(--color-button-letter)')};
    color: ${(props) => (props.isAvv ? 'var(--color-button-letter)': 'var(--color-placeholder)')};
    border: 1px solid var(--color-placeholder-border);
    border-radius: 5px;
    margin-right: 4px;
    display:flex;
    justify-content:center;
    align-items:center; 
    &:hover{
        cursor: pointer;
    }
`