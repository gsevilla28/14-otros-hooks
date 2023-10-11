import React from "react";
import { useForm } from "../hooks/useForm";

export const MiFormulario = () => {
  const { formulario, cambiado, enviado } = useForm({});

  return (
    <div>
      <h1>Formulario para guardar datos de un curso</h1>
      <pre className="codigo">{JSON.stringify(formulario)}</pre>
      <form onSubmit={enviado} className="miformulario">
        <input
          onChange={cambiado}
          type="text"
          name="titulo"
          placeholder="titulo del curso"
        />
        <input
          onChange={cambiado}
          type="number"
          name="anio"
          placeholder="año de publicacion"
        />
        <textarea
          onChange={cambiado}
          name="descripcion"
          id=""
          placeholder="Descripcion"
        ></textarea>
        <input
          onChange={cambiado}
          type="text"
          name="autor"
          placeholder="Autor"
        />
        <input
          onChange={cambiado}
          type="email"
          name="email"
          placeholder="Correo electronico"
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
