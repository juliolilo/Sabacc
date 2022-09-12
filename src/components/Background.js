import React from 'react';
import background from "./background.css";
import Boton2 from '../components/Boton2';
import Boton from '../components/Boton';
import { useState, useEffect } from 'react';
import { images } from './IndexImages';
import { imagenes } from "./IndexImages";



import * as ReactDOMClient from 'react-dom/client';

function Background() {
  
  let carta;
  let carta2;
  

    const [usado, setUsado] = useState(false);
    const [usado2, setUsado2] = useState(false);
    const [total, setTotal] = useState("0");
    const [totalDealer, setTotalDealer] = useState("0");
    const [player, setPlayer] = useState([]);
    const [dealer, setDealer] = useState([]);
  
    const cambiarUsado = () => {
    setUsado(true);
    console.log(usado)
  };


  //Funciones

  const comparar = () =>{
    if(total > 23 || total < -23){
      console.log("Bombed Out!!! " + total);
    }
    else{
      if(total >= 0 && totalDealer >= 0){
        if(total > totalDealer){
          console.log("Has ganado con: " + total);
          console.log("El dealer tiene: " + totalDealer);
        }else{
          console.log("Pierdes con: " + total);
          console.log("El dealer tiene: " + totalDealer);
        }
      }else if(total < 0 && totalDealer < 0){
        if(total < totalDealer){
          console.log("Has ganado con: " + total);
          console.log("El dealer tiene: " + totalDealer);
        }else{
          console.log("Pierdes con: " + total);
          console.log("El dealer tiene: " + totalDealer);
        }
      }/*else if(total >=0 && totalDealer < 0){

      }*/

    }
  }

  const cambiarInfo = () => {
  
    let contador=0;

    for(let i=0; i < player.length; i++ ){
      contador = contador + player[i].value;
      
  }
  
    setTotal(contador);
    console.log("Tu total es" + total);
   };




   const sumarDealer = () => {
  
    let contador2=0;

    for(let i=0; i < dealer.length; i++ ){
      contador2 = contador2 + dealer[i].value;
      
  }
    setTotalDealer(contador2);
    console.log("dealer");
    console.log(contador2); 
    console.log(totalDealer); 
   };


  return (
    <div className='contenedor-principal'>
        
        <div className='tablero'>

          <div className="contenedor-titulo">
            <div className="grid"></div>
            <div className="lines"></div>
            <h1 className='h1-retro'>
              <span>SABACC</span>
              <span>SABACC</span>
            </h1>
            <h2 className='h2-retro'>GAME</h2>
          </div>
          <div className="dealer-cards"> 
            <h2 className='h2-normal h2-dealer'>Dealer</h2>
            
          </div>
          <div className="your-cards">
            <h2 className='h2-normal h2-tu'>Tú:</h2>
          </div>
          <div className='contenedor-total'>
            <h1 className='total'>Total:</h1>
            <h2 id='total-text'>{total}</h2>
          </div>
        </div>
        <div className='opciones'>
            <Boton sumarDealer={sumarDealer} cambiarUsado={cambiarUsado} usado={usado} carta={carta} carta2={carta2} player={player}  setPlayer = {setPlayer} total={total} cambiarInfo={cambiarInfo} dealer={dealer} setDealer={setDealer}/>
            <Boton2 cambiarUsado={cambiarUsado} cambiarInfo = {cambiarInfo} setPlayer = {setPlayer} carta={carta}  player={player} total={total} usado={usado} dealer={dealer} setDealer={setDealer} sumarDealer={sumarDealer} totalDealer={totalDealer} comparar={comparar}/>
            <div className='plantarse opcion'>Plantarse</div>
        </div>
      </div>

    
  )


  
}

export default Background;