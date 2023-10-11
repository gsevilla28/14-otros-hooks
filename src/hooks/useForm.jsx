import { useState } from "react";

export const useForm = (objetoInicial = {}) => {
  const [formulario, setFormulario] = useState(objetoInicial);

  const serializarFormulario = (formulario) => {
    //Esta es una forma de recorger todos los datos que catptura el usuario de forma mas sencilla
    const formData = new FormData(formulario);
    const objetoCompleto = {};

    for (let [name, value] of formData) {
      objetoCompleto[name] = value;
    }

    // console.log(objetoCompleto);

    return objetoCompleto;
  };

  const enviado = (e) => {
    e.preventDefault();

    let curso = serializarFormulario(e.target);
    setFormulario(curso);
    document.querySelector(".codigo").classList.add("enviado");
  };

  const cambiado = ({ target }) => {
    const { name, value } = target;
    setFormulario({ ...formulario, [name]: value });
  };

  return {
    formulario,
    enviado,
    cambiado,
  };
};
