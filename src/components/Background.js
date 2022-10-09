import React, { useState, useEffect } from "react";
import background from "./background.css";
import Boton2 from "../components/Boton2";
import Boton from "../components/Boton";
import Boton3 from "./Boton3";
import { images } from "./IndexImages";
import { imagenes } from "./IndexImages";
import  alertar from "../script";
import back from '../images/back.jpg';
import Empezar from "./Empezar";

import * as ReactDOMClient from "react-dom/client";

function Background() {
  let carta;
  let carta2;

  const [usado, setUsado] = useState(false);
  const [usado2, setUsado2] = useState(false);
  const [turnoJugador, setTurnoJugador] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalDealer, setTotalDealer] = useState(0);
  const [player, setPlayer] = useState([]);
  const [dealer, setDealer] = useState([]);
  const [dealerImg, setDealerImg] = useState([]);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  

  

  /*useEffect(() => {
   console.log(dealerImg);
  },[dealerImg]);*/
  
  useEffect(() => {
    if(usado==true){
      let i=0;
      console.log(dealerImg);
      dealerImg.map(function(element) {
        element.src = dealer[i].src;
        i++;
      });
      
    }
   },[usado]);

   useEffect(() => {
    if(turnoJugador==false){
      logicaDealer();
      
    }
   },[turnoJugador]);

   

   
   const hit2 = () => {
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
    console.log("carta agregada");
    
  }

  const cambiarUsado = () => {
    setUsado(true);
    console.log(usado);
  };

  //Funciones

  const logicaDealer = () => {
    if(totalDealer < 16){
      setTimeout(() => {
        hit2();
        turnarse();
      }, 2000);
      
      
      
    }else{
      comparar();
    }
  }


  /*const empezarJuego = ()=> {
    
    if(turnoJugador== false){
      
        logicaDealer();
      
      
    }
  }*/

  


  

  


  const turnarse = () => {
    const h2Dealer = document.querySelector(".h2-dealer");
    var h2Player = document.querySelector(".h2-player");
    if(turnoJugador == true){
      
      

      
     
      h2Player.classList.add("activo");
      h2Dealer.classList.remove("activo");
      setTurnoJugador(false);

    }else{
      h2Dealer.classList.add("activo");
      h2Player.classList.remove("activo");
      console.log(h2Player);
      setTurnoJugador(true);
      
      //h2Dealer.classList.remove(".activo");
    }
  }


  const comparar = () => {
    
    if (total > 23 || total < -23 ) {
      //Que estén dentro del rango
      console.log("Bombed Out!!! " + total);
    } else {
        if (total >= 0 && totalDealer >= 0 && totalDealer < 23) {
            if (total > totalDealer) {
               setText1("Has ganado con: ");
               setText2("El dealer tiene: ");
         
        }   else if(total >= 0 && totalDealer >= 0 && totalDealer > 23) {
              setText1("Has ganado con: ");
              setText2("El dealer tiene: ");
        } else{
          setText1("Pierdes con: ");
          setText2("El dealer tiene: ");
          
        }
      } else if (total < 0 && totalDealer < 0) {
                  if (total < totalDealer) {
                    setText1("Has ganado con: ");
                    setText2("El dealer tiene: ");
          
        } else {
          setText1("Pierdes con: ");
          setText2("El dealer tiene: ");
          
        }
      } else if (total >= 0 && totalDealer < 0) {
          let aux1;
          let aux2;

          aux1 = 23 - total;
          aux2 = 23 + totalDealer;
          if (aux1 < aux2) {
            setText1("Pierdes con: ");
          setText2("El dealer tiene: ");
          } else {
            setText1("Has ganado con: ");
                    setText2("El dealer tiene: ");
        } 
      } else if (total >= 0 && totalDealer < 0) {
        let aux1;
        let aux2;

        aux1 = 23 - total;
        aux2 = 23 + totalDealer;
        if (aux2 < aux1) {
          setText1("Pierdes con: ");
          setText2("El dealer tiene: ");
        
        } else {
          setText1("Has ganado con: ");
                    setText2("El dealer tiene: ");
        
      } 
    } 
    } 

    const contenedor = document.querySelector(".tablero");
    var newElement = document.createElement("div");
    newElement.classList.add("rendido");
    
    newElement.innerHTML = `
    <h1 class= "h1-rendido">${text1} ${total}</h1>
    <p class="texto-rendido">${text2} ${totalDealer}</p>`;
    contenedor.appendChild(newElement);
  };

  const cambiarInfo = () => {
    let contador = 0;

    for (let i = 0; i < player.length; i++) {
      contador = contador + player[i].value;
    }

    setTotal(contador);
  };

  const sumarDealer = () => {
    let contador2 = 0;

    for (let i = 0; i < dealer.length; i++) {
      contador2 = contador2 + dealer[i].value;
    }

    setTotalDealer(contador2);
  };

  //empezarJuego();
  

  return (
    <div className="contenedor-principal">
      <div className="tablero">
        <div className="contenedor-titulo">
          <div className="grid"></div>
          <div className="lines"></div>
          <h1 className="h1-retro">
            <span>SABACC</span>
            <span>SABACC</span>
          </h1>
          <h2 className="h2-retro">GAME</h2>
        </div>
        <div className="dealer-cards">
          <h2 className="h2-normal h2-dealer">Dealer</h2>
        </div>
        <div className="your-cards">
          <h2 className="h2-normal h2-player">Tú:</h2>
        </div>
        <div className="contenedor-total">
          <h1 className="total">Total:</h1>
          <h2 id="total-text">{total}</h2>
        </div>
      </div>
      <div className="opciones">
        <Boton
          cambiarUsado={cambiarUsado}
          usado={usado}
          carta={carta}
          carta2={carta2}
          player={player}
          setPlayer={setPlayer}
          total={total}
          cambiarInfo={cambiarInfo}
          dealer={dealer}
          setDealer={setDealer}
          sumarDealer={sumarDealer}
          setDealerImg={setDealerImg}
          dealerImg={dealerImg}
          turnoJugador={turnoJugador}
          turnarse={turnarse}
          logicaDealer={logicaDealer}
        />
        <Boton2
          cambiarUsado={cambiarUsado}
          cambiarInfo={cambiarInfo}
          setPlayer={setPlayer}
          carta={carta}
          player={player}
          total={total}
          usado={usado}
          dealer={dealer}
          setDealer={setDealer}
          sumarDealer={sumarDealer}
          totalDealer={totalDealer}
          comparar={comparar}
          turnoJugador={turnoJugador}
          text1={text1}
          setText1={setText1}
          text2={text2}
          setText2={setText2}
        />
        <Boton3 
        cambiarUsado={cambiarUsado}
        cambiarInfo={cambiarInfo}
        setPlayer={setPlayer}
        carta={carta}
        player={player}
        total={total}
        usado={usado}/>

        {/* <Empezar 
        empezarJuego={empezarJuego}/> */}
      </div>
      
    </div>
  );
}
export default Background;