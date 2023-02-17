//import React
import { useState, useEffect } from 'react';
//import Css
import '../styles/sideBar.css';
//import Data
import data from '../utils/premios';

export default function SideBar() {
    const premios = data.premios;

    return (
        <div className="sidebar">
            <div className="sidebar_titulo">
                <h1>Acumulado</h1>
            </div>
            <div className="sidebar_acumulado"  id='acumulado'>
                {
                    premios.map((premio) => (
                        <p key={premio.id} accessKey={premio.id}>$ {premio.nombre}</p>
                    ))
                }
            </div>
        </div>
    )
}