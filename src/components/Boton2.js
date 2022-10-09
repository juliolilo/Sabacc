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
  turnoJugador,
  text1,
  text2,
  setText1,
  setText2
}) {
  //Array para los palos

 

  

  const rendirse2 = () => {
    //alert("pulsaste");
    /*const total = document.getElementById("#total-text");
    total.classList.add("carta");
    total.innerText = "gggggg";*/
  };

  /*const plantarse = () => {
    console.log(total);
    if (total > 23) {
      console.log("Bombed Out!!! " + total);
    } else {
      console.log("Tu total es: " + total);
    }*/

    /*const totalito = document.getElementById("#total-text");
    totalito.classList.add("carta");
    totalito.innerText = "gggggg";
  };*/
  const handleClick = () => {
    if(turnoJugador == true){
      if (usado == false) {
      
        //plantarse();
        //sumarDealer();
        cambiarUsado();
  
        comparar();
        
      }
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
    <div onClick={handleClick} className="plantarse opcion">
      Plantarse
    </div>
  );
  /*const rootElement = document.getElementById("root");
  ReactDOM.render(<Boton />, rootElement);*/
}
