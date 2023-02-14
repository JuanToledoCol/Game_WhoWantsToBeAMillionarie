//import React
import { useState, useEffect } from 'react';
//import Components
import Question from '../components/Question';
//import Css
import '../styles/game.css';
//import Images
import Logo from '../assets/images/logo.jpg';
//import Icons
import { ReactComponent as IconPhone } from "../assets/icons/phone-solid.svg"
import { ReactComponent as IconPublic } from "../assets/icons/people-group-solid.svg"
import { ReactComponent as IconFifty } from "../assets/icons/fifty.svg"
import { ReactComponent as IconMoney } from "../assets/icons/money-check-dollar-solid.svg"
import { ReactComponent as IconExit } from "../assets/icons/person-walking-arrow-right-solid.svg"
//import Data
import data from '../utils/data';
import helpers from '../utils/helpers';

export default function Game() {
    //Variables
    const [qAndA, setQAndA] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentLevel, setCurrentLevel] = useState(2);

    //Functions
    function handleStartGame() {
        setCurrentQuestion(helpers.random(qAndA.filter((question) => question.level === currentLevel)));
    }

    //Effects
    useEffect(() => {
        setQAndA(data.questions);
    }, []);

    return (
        <div className='container_game' onLoad={handleStartGame}>
            <div className='container_logo_game'>
                <img className='logo_game' src={Logo} alt='Quien_quiere_ser_millonario' />
            </div>
            <div className='container_comodin'>
                <IconPhone className='comodin_phone bg_icon' />
                <IconPublic className='comodin_public bg_icon' />
                <IconFifty className='comodin_50 bg_icon' />
            </div>
            <div className='container_money'>
                <IconMoney className='money bg_icon' />
                <IconExit className='exit bg_icon' />
            </div>
            {currentQuestion && (
                <Question
                    quest={currentQuestion}
                />
            )}
        </div>
    )
}