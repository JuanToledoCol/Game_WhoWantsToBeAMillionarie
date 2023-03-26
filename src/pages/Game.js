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
import selectedLE from '../assets/images/bg-option-left-wrong.png';
import selectedRI from '../assets/images/bg-option-right-wrong.png';
import CorrectLe from '../assets/images/bg-option-left-correct.png';
import CorrectRi from '../assets/images/bg-option-right-correct.png';
//import Icons
import { ReactComponent as IconPhone } from "../assets/icons/phone-solid.svg"
import { ReactComponent as IconPublic } from "../assets/icons/people-group-solid.svg"
import { ReactComponent as IconFifty } from "../assets/icons/fifty.svg"
import { ReactComponent as IconExit } from "../assets/icons/person-walking-arrow-right-solid.svg"
import { ReactComponent as IconArrow } from "../assets/icons/arrow-right-solid.svg"
//import Data
import data from '../utils/data';
import helpers from '../utils/helpers';
//import Audio
import audioCincuenta from '../assets/sounds/bonus-50-50.mp3';
import audioFriend from '../assets/sounds/bonus-ask-friend.mp3';
import audioPublic from '../assets/sounds/bonus-ask-the-audience.mp3';
import audioWinGame from '../assets/sounds/last-win.mp3';
import audioWin from '../assets/sounds/win.mp3';
import audioLose from '../assets/sounds/lose.mp3';

export default function Game() {
    //Variables
    const navigate = useNavigate();
    const SwalWin = withReactContent(Swal);
    const SwalLose = withReactContent(Swal);
    const namePlayer = localStorage.getItem('namePlayer');

    const [qAndA, setQAndA] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [id, setId] = useState('');
    const [ansCorrect, setAnsCorrect] = useState('');
    const [ansSelected, setAnsSelected] = useState(false);
    const [acum, setAcum] = useState('0');

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

    const soundWinGame = new Howl({
        src: [audioWinGame],
        autoplay: false,
        loop: false,
        volume: 0.05
    });
    const soundWin = new Howl({
        src: [audioWin],
        playing: false,
        volume: 0.05,
        loop: false
    })
    const soundLose = new Howl({
        src: [audioLose],
        playing: false,
        volume: 0.05,
        loop: false
    })

    //Functions
    function handleStartGame() {
        setCurrentQuestion(helpers.random(helpers.shuffle(qAndA.filter((question) => question.level === currentLevel))));
        setCurrentLevel(currentLevel + 1);
    }

    function handleLevelUp() {
        setCurrentQuestion(helpers.random(helpers.shuffle(qAndA.filter((question) => question.level === currentLevel))));
        setCurrentLevel(currentLevel + 1);
    }

    function resetValues() {
        document.getElementById('p1').style.display = ``;
        document.getElementById('p2').style.display = ``;
        document.getElementById('p3').style.display = ``;
        document.getElementById('p4').style.display = ``;
        //set background for answers
        document.getElementById('ans1').style.backgroundImage = ``;
        document.getElementById('ans2').style.backgroundImage = ``;
        document.getElementById('ans3').style.backgroundImage = ``;
        document.getElementById('ans4').style.backgroundImage = ``;
        setAnsSelected(false);

        document.getElementById('iconArrow').style.pointerEvents = 'all';
    }

    function handleAcum(verify) {
        if (verify) {
            let acumulado = document.getElementById('acumulado').childNodes.item(currentLevel - 2);
            acumulado.style.background = '#53bb61';
            return acumulado.lastChild.textContent;
        }
    }

    function handleNextQuestion(verify) {
        if (verify) {
            setTimeout(() => {
                switch (currentLevel - 1) {
                    case 5:
                        Swal.fire({
                            title: '¡Felicidades ' + namePlayer + '! Llegaste a un seguro',
                            text: "Puedes retirarte o continuar jugando.",
                            confirmButtonColor: '#010;756',
                            confirmButtonText: 'Continuar',
                            showCancelButton: true,
                            cancelButtonColor: '#d33',
                            cancelButtonText: 'Salir',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            background: '#05072d',
                            color: '#fff'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                handleLevelUp();
                                setAcum(handleAcum(verify));
                                resetValues();
                            } else if (result.isDismissed) {
                                Swal.fire({
                                    title: '¡Adios ' + namePlayer + '!',
                                    text: "Gracias por jugar.",
                                    confirmButtonColor: '#010756',
                                    confirmButtonText: 'Salir al menú',
                                    allowOutsideClick: false,
                                    allowEscapeKey: false,
                                    allowEnterKey: false,
                                    background: '#05072d',
                                    color: '#fff'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        navigate('/');
                                        setAcum('0');
                                    }
                                });
                            }
                        });
                        break;
                    case 10:
                        Swal.fire({
                            title: '¡Felicidades ' + namePlayer + '! Llegaste a un seguro',
                            text: "¿O quizas vas a retirarte? ¡Decidete!",
                            html: "<pTienes un acumulado de $" + acum + "./>",
                            confirmButtonColor: '#010756',
                            confirmButtonText: 'Continuar',
                            showCancelButton: true,
                            cancelButtonColor: '#d33',
                            cancelButtonText: 'Salir',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            background: '#05072d',
                            color: '#fff'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                handleLevelUp();
                                setAcum(handleAcum(verify));
                                resetValues();
                            } else if (result.isDismissed) {
                                Swal.fire({
                                    title: '!Una lastima ' + namePlayer + '!',
                                    text: "Gracias por jugar.",
                                    confirmButtonColor: '#010756',
                                    confirmButtonText: 'Salir al menú',
                                    allowOutsideClick: false,
                                    allowEscapeKey: false,
                                    allowEnterKey: false,
                                    background: '#05072d',
                                    color: '#fff'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        navigate('/');
                                        setAcum('0');
                                    }
                                });
                            }
                        });
                        break;
                    case 15:
                        setAcum(handleAcum(verify));
                        Swal.fire({
                            title: 'Lo lograste ' + namePlayer + '!!!',
                            text: 'Ganaste el máximo premio ' + ' $' + acum + '.',
                            confirmButtonColor: '#010756',
                            confirmButtonText: 'Volver al menú',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            background: '#05072d',
                            color: '#fff'
                        }).then((result) => {
                            navigate('/');
                            setAcum('0');
                        });
                        break;
                    default:
                        handleLevelUp();
                        handleAcum(verify);
                        resetValues();
                }
            }, 8500);
        } else {
            setTimeout(() => {
                SwalLose.fire({
                    title: 'Oops! Más suerte la próxima ' + namePlayer + '.',
                    text: "Te llevas un acumulado de: " + acum + ".",
                    confirmButtonText: 'Salir',
                    confirmButtonColor: '#010756',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    background: '#05072d',
                    color: '#fff'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/');
                        setAcum('0');
                    }
                });
            }, 4000);
        }
    }

    function confirmAnswer() {
        switch (id) {
            case '1':
                if (ansCorrect === '1') {
                    setTimeout(() => {
                        document.getElementById('ans1').style.backgroundImage = `url(${CorrectLe})`;
                    }, 500);
                    return true;
                } else if (ansCorrect === '2') {
                    setTimeout(() => {
                        document.getElementById('ans1').style.backgroundImage = `url(${selectedLE})`;
                        document.getElementById('ans2').style.backgroundImage = `url(${CorrectRi})`;
                    }, 500);
                } else if (ansCorrect === '3') {
                    setTimeout(() => {
                        document.getElementById('ans1').style.backgroundImage = `url(${selectedLE})`;
                        document.getElementById('ans3').style.backgroundImage = `url(${CorrectLe})`;
                    }, 500);
                } else if (ansCorrect === '4') {
                    setTimeout(() => {
                        document.getElementById('ans1').style.backgroundImage = `url(${selectedLE})`;
                        document.getElementById('ans4').style.backgroundImage = `url(${CorrectRi})`;
                    }, 500);
                }
                break;
            case '2':
                if (ansCorrect === '2') {
                    setTimeout(() => {
                        document.getElementById('ans2').style.backgroundImage = `url(${CorrectRi})`;
                    }, 500);
                    return true;
                } else if (ansCorrect === '1') {
                    setTimeout(() => {
                        document.getElementById('ans2').style.backgroundImage = `url(${selectedRI})`;
                        document.getElementById('ans1').style.backgroundImage = `url(${CorrectLe})`;
                    }, 500);
                } else if (ansCorrect === '3') {
                    setTimeout(() => {
                        document.getElementById('ans2').style.backgroundImage = `url(${selectedRI})`;
                        document.getElementById('ans3').style.backgroundImage = `url(${CorrectLe})`;
                    }, 500);
                } else if (ansCorrect === '4') {
                    setTimeout(() => {
                        document.getElementById('ans2').style.backgroundImage = `url(${selectedRI})`;
                        document.getElementById('ans4').style.backgroundImage = `url(${CorrectRi})`;
                    }, 500);
                }
                break;
            case '3':
                if (ansCorrect === '3') {
                    setTimeout(() => {
                        document.getElementById('ans3').style.backgroundImage = `url(${CorrectLe})`;
                    }, 500);
                    return true;
                } else if (ansCorrect === '1') {
                    setTimeout(() => {
                        document.getElementById('ans3').style.backgroundImage = `url(${selectedLE})`;
                        document.getElementById('ans1').style.backgroundImage = `url(${CorrectLe})`;
                    }, 500);
                } else if (ansCorrect === '2') {
                    setTimeout(() => {
                        document.getElementById('ans3').style.backgroundImage = `url(${selectedLE})`;
                        document.getElementById('ans2').style.backgroundImage = `url(${CorrectRi})`;
                    }, 500);
                } else if (ansCorrect === '4') {
                    setTimeout(() => {
                        document.getElementById('ans3').style.backgroundImage = `url(${selectedLE})`;
                        document.getElementById('ans4').style.backgroundImage = `url(${CorrectRi})`;
                    }, 500);
                }
                break;
            case '4':
                if (ansCorrect === '4') {
                    setTimeout(() => {
                        document.getElementById('ans4').style.backgroundImage = `url(${CorrectRi})`;
                    }, 500);
                    return true;
                } else if (ansCorrect === '1') {
                    setTimeout(() => {
                        document.getElementById('ans4').style.backgroundImage = `url(${selectedRI})`;
                        document.getElementById('ans1').style.backgroundImage = `url(${CorrectLe})`;
                    }, 500);
                } else if (ansCorrect === '2') {
                    setTimeout(() => {
                        document.getElementById('ans4').style.backgroundImage = `url(${selectedRI})`;
                        document.getElementById('ans2').style.backgroundImage = `url(${CorrectRi})`;
                    }, 500);
                } else if (ansCorrect === '3') {
                    setTimeout(() => {
                        document.getElementById('ans4').style.backgroundImage = `url(${selectedRI})`;
                        document.getElementById('ans3').style.backgroundImage = `url(${CorrectLe})`;
                    }, 500);
                }
                break;
            default:
                break;
        }
    }

    function handleAudio(result) {
        if(currentLevel !== 15){
            if (result) {
                setTimeout(() => {
                    soundWin.play();
                }, 500);
            } else {
                setTimeout(() => {
                    soundLose.play();
                }, 500);
            }
        }else{
            setTimeout(() => {
                soundWinGame.play();
            }, 500);
        }
    }

    function manageProccess() {
        if(ansSelected){
            document.getElementById('iconArrow').style.pointerEvents = 'none';
            handleNextQuestion(confirmAnswer());
            handleAudio(confirmAnswer());
        }
    }

    function salir(e) {
        e.preventDefault();
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No te rindas! Si sales ahora perderás todo lo ganado.",
            showCancelButton: true,
            confirmButtonColor: '#010756',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, salir',
            cancelButtonText: 'No, seguir jugando',
            allowEnterKey: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            background: '#05072d',
            color: '#fff'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/');
                setAcum('0')
            }
        })
    }

    function handleHelpCincuenta() {
        currentQuestion.answers.map(({ id, correct }) => {
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
            title: namePlayer + ' ¿Quieres usar el 50/50?',
            text: "Se eliminarán 2 respuestas incorrectas",
            showCancelButton: true,
            confirmButtonColor: '#010756',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, usar',
            cancelButtonText: 'No, volver',
            allowEnterKey: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            background: '#05072d',
            color: '#fff'
        }).then((result) => {
            if (result.isConfirmed) {
                soundCincuenta.play();
                handleHelpCincuenta();
            }
            document.getElementById('com_cincuenta').style.pointerEvents = 'none';
            document.getElementById('com_cincuenta').style.opacity = '0.5';
        })
    }

    function llamada() {
        const timerCall = new Date();
        timerCall.setSeconds(timerCall.getSeconds() + 21);
        const countdown = <CountDown expiryTimestamp={timerCall}/>;
        Swal.fire({
            title: namePlayer + ' ¿Quieres usar la llamada a un amigo?',
            showCancelButton: true,
            confirmButtonColor: '#010756',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, usar',
            cancelButtonText: 'No, volver',
            allowEnterKey: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            background: '#05072d',
            color: '#fff'
        }).then((result) => {
            if (result.isConfirmed) {
                soundFriend.play();
                SwalWin.fire({
                    title: 'Llamada a un amigo',
                    html: countdown,
                    showConfirmButton: false,
                    allowEnterKey: false,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    background: '#05072d',
                    color: '#fff',
                    timer: 20300,
                })

            }
            document.getElementById('com_telefono').style.pointerEvents = 'none';
            document.getElementById('com_telefono').style.opacity = '0.5';
        })
    }

    function publico() {
    const timerPeople = new Date();
    timerPeople.setSeconds(timerPeople.getSeconds() + 16);
        const countdown = <CountDown expiryTimestamp={timerPeople}/>;
        Swal.fire({
            title: '¿Quieres usar la ayuda del público?',
            showCancelButton: true,
            confirmButtonColor: '#010756',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, usar',
            cancelButtonText: 'No, volver',
            allowEnterKey: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            background: '#05072d',
            color: '#fff'
        }).then((result) => {
            if (result.isConfirmed) {
                soundPublic.play();
                //Aqui va el countdown
                SwalWin.fire({
                    title: 'El público está votado',
                    html: countdown,
                    showConfirmButton: false,
                    allowEnterKey: false,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    background: '#05072d',
                    color: '#fff',
                    timer: 15300,
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
                        setAnsCorrect={setAnsCorrect}
                        setId={setId}
                        setAnsSelected={setAnsSelected}
                    />
                )}
                <IconArrow className='btn_next' onClick={manageProccess} id='iconArrow'/>
            </div>
        </div>
    )
}