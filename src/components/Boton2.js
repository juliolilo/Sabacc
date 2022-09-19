import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Background from "./Background";
import script from "../script.js";

export default function Boton2({
  cambiarUsado,
  usado,
  logoInfo,
  cambiarInfo,
  carta,
  player,
  total,
  totalDealer,
  setTotalDealer,
  sumarDealer,
  comparar,
}) {
  //Array para los palos

  const hit = () => {
    const parent = document.querySelector(".your-cards");
    var newElement = document.createElement("img");
    newElement.classList.add("card");
    newElement.innerText = "New Element";
    /*newElement.innerHTML = " <img className='card' src='cards/BACK.png'></img>";*/
    //newElement.src = 'cards/BACK.png';
    let number = getRandomInt(2, 11);
    let palo = getRandomSuit(4);
    newElement.src = "./cards/" + number + ".png";
    parent.appendChild(newElement);
  };

  

  const rendirse2 = () => {
    //alert("pulsaste");
    /*const total = document.getElementById("#total-text");
    total.classList.add("carta");
    total.innerText = "gggggg";*/
  };

  const plantarse = () => {
    console.log(total);
    if (total > 23) {
      console.log("Bombed Out!!! " + total);
    } else {
      console.log("Tu total es: " + total);
    }

    /*const totalito = document.getElementById("#total-text");
    totalito.classList.add("carta");
    totalito.innerText = "gggggg";*/
  };
  const handleClick = () => {
    if (usado == false) {
      
      //plantarse();
      //sumarDealer();
      cambiarUsado();

      comparar();
      console.log("total dealer es: " + totalDealer);
    }

    

    //usado = true;

    /*getRandomInt(3);*/
  };

  function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRandomSuit(max) {
    return Math.floor(Math.random() * max);
  }

  // expected output: 0, 1 or 2

  return (
    <div onClick={handleClick} className="robar opcion">
      Plantarse
    </div>
  );
  /*const rootElement = document.getElementById("root");
  ReactDOM.render(<Boton />, rootElement);*/
}
