//import React
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Howl } from 'howler';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
//import Components
import Question from '../components/Question';
import SideBar from '../components/SideBar';
//import Css
import '../styles/game.css';
//import Images
import Logo from '../assets/images/logo.jpg';
//import Icons
import { ReactComponent as IconPhone } from "../assets/icons/phone-solid.svg"
import { ReactComponent as IconPublic } from "../assets/icons/people-group-solid.svg"
import { ReactComponent as IconFifty } from "../assets/icons/fifty.svg"
import { ReactComponent as IconExit } from "../assets/icons/person-walking-arrow-right-solid.svg"
//import Data
import data from '../utils/data';
import helpers from '../utils/helpers';
//import Audio
import audioSelect1 from '../assets/sounds/question-1.mp3';
import audioSelect2 from '../assets/sounds/question-2.mp3';

export default function Game() {
    //Variables
    const navigate = useNavigate();
    const SwalWin = withReactContent(Swal);
    const SwalLose = withReactContent(Swal);

    const [qAndA, setQAndA] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentLevel, setCurrentLevel] = useState(1);

    const soundBg = new Howl({
        src: [audioSelect1, audioSelect2],
        autoplay: false,
        loop: false,
        volume: 0.05,
    });

    //Functions
    function handleStartGame() {
        setCurrentQuestion(helpers.random(qAndA.filter((question) => question.level === currentLevel)));
    }

    function handleLevelUp() {
        setCurrentLevel(currentLevel + 1);
        setCurrentQuestion(helpers.random(qAndA.filter((question) => question.level === currentLevel)));
    }

    function resetValues() {
            document.getElementById('p1').style.display = ``;
            document.getElementById('p2').style.display = ``;
            document.getElementById('p3').style.display = ``;
            document.getElementById('p4').style.display = ``;
    }

    function handleAcum(verify){
        if(verify){
            let acumulado = document.getElementById('acumulado').childNodes.item(currentLevel - 1);
            acumulado.style.background = '#53bb61';
        }
    }

    function handleNextQuestion(verify) {
        if (verify) {
            setTimeout(() => {
                soundBg.stop();
                SwalWin.fire({
                    icon: 'success',
                    title: '¡Exelente! Sigue así.',
                    confirmButtonText: 'Siguiente pregunta',
                    confirmButtonColor: '#231f20',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    background: '#6485c3',
                    color: '#fff'
                }).then((result) => {
                    handleLevelUp();
                    resetValues();
                    handleAcum(verify);
                });
            }, 11000);
        } else {
            setTimeout(() => {
                SwalLose.fire({
                    icon: 'error',
                    title: 'Oops! Más suerte la próxima',
                    confirmButtonText: 'Salir',
                    confirmButtonColor: '#231f20',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    background: '#6485c3',
                    color: '#fff'
                }).then((result) => {
                    navigate('/');
                });
            }, 8000);
        }
    }

    function salir(e) {
        e.preventDefault();
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No te rindas! Si sales ahora perderás todo lo ganado.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#231f20',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, salir',
            cancelButtonText: 'No, seguir jugando',
            allowEnterKey: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            background: '#6485c3',
            color: '#fff'

        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/');
            }
        })
    }

    function handleHelpCincuenta() {
        currentQuestion.answers.map(({ id, correct }) => {
            console.log(id, correct);
            if (correct === true && id === 1) {
                document.getElementById('p2').style.display = 'none';
                document.getElementById('p3').style.display = 'none';
            } else if (correct === true && id === 2) {
                document.getElementById('p1').style.display = 'none';
                document.getElementById('p4').style.display = 'none';
            } else if (correct === true && id === 3) {
                document.getElementById('p1').style.display = 'none';
                document.getElementById('p4').style.display = 'none';
            } else if (correct === true && id === 4) {
                document.getElementById('p2').style.display = 'none';
                document.getElementById('p3').style.display = 'none';
            }
        })
    }

    function cincuenta() {
        Swal.fire({
            title: '¿Quieres usar el 50/50?',
            text: "Se eliminarán 2 respuestas incorrectas",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#231f20',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, usar',
            cancelButtonText: 'No, volver',
            allowEnterKey: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            background: '#6485c3',
            color: '#fff'
        }).then((result) => {
            if (result.isConfirmed) {
                handleHelpCincuenta();
            }
            document.getElementById('com_cincuenta').style.pointerEvents = 'none';
            document.getElementById('com_cincuenta').style.opacity = '0.5';
        })
    }

    //Effects
    useEffect(() => {
        setQAndA(data.questions);
    }, []);

    return (
        <div className='game'>
            <SideBar className='grid1' level={currentLevel}/>
            <div className='container_game grid2' onLoad={handleStartGame}>
                <div className='container_logo_game'>
                    <img className='logo_game' src={Logo} alt='Quien_quiere_ser_millonario' />
                </div>
                <div className='container_comodin'>
                    <IconPhone className='comodin_phone bg_icon' />
                    <IconPublic className='comodin_public bg_icon' />
                    <IconFifty className='comodin_50 bg_icon' onClick={cincuenta} id='com_cincuenta'/>
                </div>
                <div className='container_money' onClick={salir}>
                    <IconExit className='exit bg_icon' />
                </div>
                {currentQuestion && (
                    <Question
                        quest={currentQuestion}
                        handleNextQuestion={handleNextQuestion}
                        soundBg={soundBg}
                    />
                )}
            </div>
        </div>
    )
}