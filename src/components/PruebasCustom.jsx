import React, { useState } from "react";
import { useMayus } from "../hooks/useMayus";

export const PruebasCustom = () => {
  const { miTexto, mayusculas, minusculas, concatenar } =
    useMayus("gerardo Sevilla");

  //console.log(mayusculas(), minusculas(), concatenar("Hola"));

  return (
    <div>
      <h1>probando componentes personalizados</h1>
      {miTexto}
      <button
        onClick={() => {
          mayusculas();
        }}
      >
        Poner en Mayusculas
      </button>
      <button
        onClick={() => {
          minusculas();
        }}
      >
        Poner en minusculas
      </button>
    </div>
  );
};
