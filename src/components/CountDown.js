import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useTimer } from "react-timer-hook";
import SoundLose from "../assets/sounds/lose.mp3";

export default function CountDown({ expiryTimestamp, verifyClick }) {
    
    const namePlayer = localStorage.getItem('namePlayer');
    const navigate = useNavigate();
    const {
        seconds,
        restart,
        pause
    } = useTimer({
        expiryTimestamp, onExpire: () =>
            Swal.fire({
                icon: 'error',
                title: '¡Se te acabo el tiempo ' + namePlayer + '!',
                confirmButtonText: 'Volver a jugar',
                confirmButtonColor: '#231f20',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                background: '#6485c3',
                color: '#fff'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/');
                }
            })

    });

    function reload(){
        const timer = new Date();
        timer.setSeconds(timer.getSeconds() + 30);
        restart(timer);
    }

    function pauseTimer(){
        pause();
    }

    useEffect(() => {
        if (verifyClick) {
            pauseTimer();
        }else{
            reload();
        }
    }, [verifyClick]);

    return (
        <>
            <h3 className='timer'>{seconds}</h3>
        </>
    );

}