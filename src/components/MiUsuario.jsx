import React, { useState } from "react";
import { useAjax } from "../hooks/useAjax";

export const MiUsuario = () => {
  const [url, setUrl] = useState("https://reqres.in/api/users/1");

  const { usuario } = useAjax(url);

  const getId = (e) => {
    let id = parseInt(e.target.value);

    if (isNaN(id)) return;

    setUrl(`https://reqres.in/api/users/${id}`);
  };

  return (
    <div>
      <h1>Mi usuario</h1>
      <p>datos del usuario: {usuario?.first_name} </p>
      <input type="number" name="id" onChange={getId} />
    </div>
  );
};
