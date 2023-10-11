import { useState, useEffect } from "react";

export const useAjax = (url) => {
  const [usuario, setUsuario] = useState({});

  const getUsuario = async () => {
    const peticion = await fetch(url);

    const { data } = await peticion.json();

    setUsuario(data);
  };

  useEffect(() => {
    getUsuario();
  }, [url]);

  return {
    usuario,
  };
};
