import { useTimer } from "react-timer-hook";

export default function CountDown({ expiryTimestamp }) {
    
    const {
        seconds,
    } = useTimer({
        expiryTimestamp, onExpire: () =>
            console.log('onExpire called')
    });


    return (
        <>
            <h3 className='timer'>{seconds}</h3>
        </>
    );

}