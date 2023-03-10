//import React
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Howl } from 'howler';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
//import Components
import Question from '../components/Question';
import SideBar from '../components/SideBar';
import CountDown from '../components/CountDown';
//import Css
import '../styles/game.css';
//import Images
import Logo from '../assets/images/logo.jpg';
import Amigo from '../assets/images/amigo.jpg';
import Publico from '../assets/images/publico.webp';
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
import audioCincuenta from '../assets/sounds/bonus-50-50.mp3';
import audioFriend from '../assets/sounds/bonus-ask-friend.mp3';
import audioPublic from '../assets/sounds/bonus-ask-the-audience.mp3';
import audioWin from '../assets/sounds/last-win.mp3';

export default function Game() {
    //Variables
    const navigate = useNavigate();
    const SwalWin = withReactContent(Swal);
    const SwalLose = withReactContent(Swal);
    const timer = new Date();
    const namePlayer = localStorage.getItem('namePlayer');
    timer.setSeconds(timer.getSeconds() + 30);

    const [qAndA, setQAndA] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [verifyClick, setVerifyClick] = useState('');

    const soundBg = new Howl({
        src: [audioSelect1, audioSelect2],
        autoplay: false,
        loop: false,
        volume: 0.05
    });

    const soundCincuenta = new Howl({
        src: [audioCincuenta],
        autoplay: false,
        loop: false,
        volume: 0.05
    });

    const soundFriend = new Howl({
        src: [audioFriend],
        autoplay: false,
        loop: false,
        volume: 0.05
    });

    const soundPublic = new Howl({
        src: [audioPublic],
        autoplay: false,
        loop: false,
        volume: 0.05
    });

    const soundWin = new Howl({
        src: [audioWin],
        autoplay: false,
        loop: false,
        volume: 0.05
    });

    //Functions
    function recibeClick(data) {
        setVerifyClick(data);
        soundBg.stop();
    }

    function resetClick(data) {
        setVerifyClick('');
    }


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

    function handleAcum(verify) {
        if (verify) {
            let acumulado = document.getElementById('acumulado').childNodes.item(currentLevel - 1);
            acumulado.style.background = '#53bb61';
        }
    }

    function handleNextQuestion(verify) {
        if (verify) {
            setTimeout(() => {
                switch (currentLevel) {
                    case 5:
                        Swal.fire({
                            title: '??Felicidades ' + namePlayer + '! Llegaste a un seguro',
                            text: "Puedes retirarte o continuar jugando.",
                            icon: 'success',
                            confirmButtonColor: '#231f20',
                            confirmButtonText: 'Continuar',
                            showCancelButton: true,
                            cancelButtonColor: '#d33',
                            cancelButtonText: 'Salir',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            background: '#6485c3',
                            color: '#fff'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                handleLevelUp();
                                handleAcum(verify);
                                resetValues();
                                resetClick();
                            } else if (result.isDismissed) {
                                Swal.fire({
                                    title: '??Adios ' + namePlayer + '!',
                                    text: "Gracias por jugar.",
                                    icon: 'success',
                                    confirmButtonColor: '#231f20',
                                    confirmButtonText: 'Salir al men??',
                                    allowOutsideClick: false,
                                    allowEscapeKey: false,
                                    allowEnterKey: false,
                                    background: '#6485c3',
                                    color: '#fff'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        navigate('/');
                                    }
                                });
                            }
                        });
                        break;
                    case 10:
                        Swal.fire({
                            title: 'Ya cas?? ' + namePlayer + '! T?? puedes.',
                            text: "??O quizas vas a retirarte? ??Decidete!",
                            icon: 'success',
                            confirmButtonColor: '#231f20',
                            confirmButtonText: 'Continuar',
                            showCancelButton: true,
                            cancelButtonColor: '#d33',
                            cancelButtonText: 'Salir',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            background: '#6485c3',
                            color: '#fff'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                handleLevelUp();
                                handleAcum(verify);
                                resetValues();
                                resetClick();
                            } else if (result.isDismissed) {
                                Swal.fire({
                                    title: '!Una lastima ' + namePlayer + '!',
                                    text: "Gracias por jugar.",
                                    icon: 'success',
                                    confirmButtonColor: '#231f20',
                                    confirmButtonText: 'Salir al men??',
                                    allowOutsideClick: false,
                                    allowEscapeKey: false,
                                    allowEnterKey: false,
                                    background: '#6485c3',
                                    color: '#fff'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        navigate('/');
                                    }
                                });
                            }
                        });
                        break;
                    case 15:
                        soundWin.play();
                        Swal.fire({
                            title: 'Lo lograste ' + namePlayer + '!!!',
                            text: "Ganaste el premio m??ximo.",
                            icon: 'success',
                            confirmButtonColor: '#231f20',
                            confirmButtonText: 'Volver al men??',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            background: '#6485c3',
                            color: '#fff'
                        }).then((result) => {
                            navigate('/');
                        });
                        break;
                    default:
                        SwalWin.fire({
                            icon: 'success',
                            title: '??Exelente ' + namePlayer + '!, Sigue as??.',
                            confirmButtonText: 'Siguiente pregunta',
                            confirmButtonColor: '#231f20',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            background: '#6485c3',
                            color: '#fff'
                        }).then((result) => {
                            handleLevelUp();
                            handleAcum(verify);
                            resetValues();
                            resetClick();
                        });
                        break;
                }
            }, 11000);
        } else {
            setTimeout(() => {
                SwalLose.fire({
                    icon: 'error',
                    title: 'Oops! M??s suerte la pr??xima ' + namePlayer + '.',
                    confirmButtonText: 'Salir',
                    confirmButtonColor: '#231f20',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    background: '#6485c3',
                    color: '#fff'
                }).then((result) => {
                    if (result.isConfirmed) {
                        soundBg.stop();
                        navigate('/');
                    }
                });
            }, 8000);
        }
    }

    function salir(e) {
        e.preventDefault();
        Swal.fire({
            title: '??Est??s seguro?',
            text: "??No te rindas! Si sales ahora perder??s todo lo ganado.",
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
                soundBg.unload();
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
            title: namePlayer + ' ??Quieres usar el 50/50?',
            text: "Se eliminar??n 2 respuestas incorrectas",
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
                soundBg.stop();
                soundCincuenta.play();
                handleHelpCincuenta();
            }
            document.getElementById('com_cincuenta').style.pointerEvents = 'none';
            document.getElementById('com_cincuenta').style.opacity = '0.5';
        })
    }

    function llamada() {
        Swal.fire({
            title: namePlayer + ' ??Quieres usar la llamada a un amigo?',
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
            let opcion = currentQuestion.answers.filter((answer) => answer.correct === true);
            opcion = opcion.map((answer) => answer.answer).toString();
            if (result.isConfirmed) {
                soundBg.stop();
                soundFriend.play();
                Swal.fire({
                    title: '??Tu amigo est?? analisando la pregunta!',
                    showConfirmButton: false,
                    timer: 12000
                }).then((result) => {
                    Swal.fire({
                        title: namePlayer + ', Creo que la respuesta es:',
                        text: opcion,
                        icon: 'Succes',
                        confirmButtonColor: '#231f20',
                        allowEnterKey: false,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        background: '#6485c3',
                        color: '#fff',
                        imageUrl: Amigo,
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Amigo ayuda'
                    })
                })
            }
            document.getElementById('com_telefono').style.pointerEvents = 'none';
            document.getElementById('com_telefono').style.opacity = '0.5';
        })
    }

    function publico() {
        Swal.fire({
            title: '??Quieres usar la ayuda del p??blico?',
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
            let opcion = currentQuestion.answers.filter((answer) => answer.correct === true);
            opcion = opcion.map((answer) => answer.answer).toString();
            if (result.isConfirmed) {
                soundBg.stop();
                soundPublic.play();
                Swal.fire({
                    title: '??El p??blico est?? votando!',
                    showConfirmButton: false,
                    timer: 7000
                }).then((result) => {
                    Swal.fire({
                        title: 'El mayor porcentaje de votaci??n lo tiene la respuesta:',
                        text: opcion,
                        icon: 'Succes',
                        confirmButtonColor: '#231f20',
                        allowEnterKey: false,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        background: '#6485c3',
                        color: '#fff',
                        imageUrl: Publico,
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Amigo ayuda'
                    })
                })
            }
            document.getElementById('com_publico').style.pointerEvents = 'none';
            document.getElementById('com_publico').style.opacity = '0.5';
        })
    }

    //Effects
    useEffect(() => {
        setQAndA(data.questions);
    });

    return (
        <div className='game'>
            <SideBar className='grid1' level={currentLevel} />
            <div className='container_game grid2' onLoad={handleStartGame}>
                <div className='container_logo_game'>
                    <img className='logo_game' src={Logo} alt='Quien_quiere_ser_millonario' />
                    <CountDown expiryTimestamp={timer} verifyClick={verifyClick} />
                </div>
                <div className='container_comodin'>
                    <IconPhone className='comodin_phone bg_icon' onClick={llamada} id='com_telefono' />
                    <IconPublic className='comodin_public bg_icon' onClick={publico} id='com_publico' />
                    <IconFifty className='comodin_50 bg_icon' onClick={cincuenta} id='com_cincuenta' />
                </div>
                <div className='container_money' onClick={salir}>
                    <IconExit className='exit bg_icon' />
                </div>
                {currentQuestion && (
                    <Question
                        quest={currentQuestion}
                        handleNextQuestion={handleNextQuestion}
                        recibeClick={recibeClick}
                        soundBg={soundBg}
                    />
                )}
            </div>
        </div>
    )
}