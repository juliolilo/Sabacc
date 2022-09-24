import React from "react";
import ReactDOM from "react-dom";
import { images } from "./IndexImages";
import { imagenes } from "./IndexImages";
import back from '../images/back.jpg';

export default function Boton({
  cambiarUsado,
  usado,
  carta,
  player,
  cambiarInfo,
  setPlayer,
  total,
  dealer,
  setDealer,
  sumarDealer,
  carta2,
  dealerImg,
  setDealerImg,
  turnoJugador,
  turnarse,
  logicaDealer
  
}) {
  //Array para los palos

  imagenes.map(function () {
    return imagenes.sort(() => Math.random() - 0.5);
  });

  const hit = () => {
    const parent = document.querySelector(".your-cards");
    var newElement = document.createElement("img");
    newElement.classList.add("card");
    carta = imagenes.pop();
    player.push(carta);
    setPlayer(player);
    newElement.src = player[player.length - 1].src;
    //console.log(player);
    parent.appendChild(newElement);
    cambiarInfo();
  };

  /*const hit2 = () => {
    const parent = document.querySelector(".dealer-cards");
    var newElement = document.createElement("img");
    newElement.classList.add("card2");
    carta2 = imagenes.pop();
    dealer.push(carta2);
    
    setDealer(dealer);
    dealerImg.push(newElement);
    setDealerImg(dealerImg);
    if(usado==false){
      newElement.src = back;
    }
    
    //console.log(dealer);
    parent.appendChild(newElement);
    sumarDealer();
    
  };*/

  const handleClick = () => {
    if (usado == false) {
      if(turnoJugador==true){
        hit();
        turnarse();
      }else{
        //hit2();
        /*logicaDealer();
        turnarse();*/
      }
      
      /*setTimeout(() => {
        hit2();
      }, 3000);*/
      
    }

    //setValue;

    // console.log(usado);

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
      Robar
    </div>
  );
}
