import React from 'react';
import ReactDOM from "react-dom";
import { useState } from "react";
import Background from "./Background";

export default function Empezar(
    empezarJuego
){


    const handleClick = () => {
        empezarJuego();
    }

  return (
    <div onClick={handleClick} className="opcion">Empezar</div>
  )
}

