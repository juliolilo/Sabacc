import React from "react";
import ReactDOM from "react-dom";
import { images } from "./components/IndexImages";
import {imagenes} from "./components/IndexImages";
import dealer from "./components/Background";
import setDealer from "./components/Background";

let carta;
const hit2 = () => {
    const parent = document.querySelector(".dealer-cards");
    var newElement = document.createElement("img");
    newElement.classList.add("card2");
    carta = imagenes.pop();
    dealer.push(carta);
    setDealer(dealer);
    newElement.src = dealer[dealer.length - 1].src;
    console.log(dealer);
    parent.appendChild(newElement);
   
  };

