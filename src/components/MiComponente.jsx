import React, { useId } from "react";

export const MiComponente = () => {
  const id = useId(); //generar un identificador unico
  const segundoid = useId(); //generar un identificador unico
  console.log(id, segundoid);

  return (
    <div>
      <h1>Hook UseId</h1>
      <input id={id} name="nombre" placeholder="nombre" />
    </div>
  );
};
