import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Background from "./Background";

export default function Boton3({
  cambiarUsado,
  usado,
  logoInfo,
  cambiarInfo,
  carta,
  player
})  {

  const rendirse = () => {
    console.log("te has rendido");
    const contenedor = document.querySelector(".tablero");
    //contenedor.classList.add("contenedor-rendido");
    var newElement = document.createElement("div");
    newElement.classList.add("rendido");
    newElement.innerText = "Te has rendido";
    newElement.innerHTML = `
    <h1 class= "h1-rendido">Te has rendido</h1>
    <p class="texto-rendido">Recuperas el 50% de lo apostado</p>`;
    contenedor.appendChild(newElement);
  };

  const handleClick = (
    ) => {
    if (usado == false) {
      rendirse();
      cambiarUsado();
    }

    
  };

    const confirmar= ()=>{
        
    }

    return (
        <div onClick={handleClick} className="robar opcion">
          Rendirse
        </div>
      );
}

