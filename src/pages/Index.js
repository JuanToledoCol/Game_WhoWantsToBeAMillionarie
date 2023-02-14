import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactHowler from "react-howler";
//Styles Imports
import "../styles/index.css"
//Images Imports
import Logo from "../assets/images/logo.jpg"
import IconPlay from "../assets/icons/play-solid.svg"
//Audio Imports
import audioMainTheme from "../assets/sounds/main-theme.mp3"

export default function Index() {
    //Variables
    const [namePlayer, setNamePlayer] = useState("");
    const navigate = useNavigate();

    //Functions
    //Save in local storage the name of the player
    useEffect(() => {
        const namePlayer = document.getElementById("namePlayer");
        namePlayer.addEventListener("change", () => {
            setNamePlayer(namePlayer.value);
        });
    }, []);

    function saveNamePlayer(e) {
        e.preventDefault();
        localStorage.setItem("namePlayer", namePlayer);
        navigate("/game");
    }

    return (
        <div className="container">
            <ReactHowler src={audioMainTheme} playing={true} loop={true} volume={0.05} />
            <div className="container_bg">
                <div className="container_logo">
                    <img className="logo" src={Logo} alt="Quien_quiere_ser_millonario" />
                </div>
                <form onSubmit={saveNamePlayer} data-parsley-validate="true">
                    <div className="container_name">
                        <label className="label_name">Nombre del jugador</label>
                        <input type="text" className="input_name" id="namePlayer" placeholder="Escriba aquí" required />
                    </div>
                    <div className="container_button">
                        <button className="button" type="submit" onClick={useNavigate}><img className="icon" src={IconPlay} alt="icon_play"/> Jugar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

