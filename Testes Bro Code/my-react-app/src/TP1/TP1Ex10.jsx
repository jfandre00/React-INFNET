import React from "react";
import "../styles.css";
import BackLink from "./BackLink";

export default function Exercicio10({ voltar }) {
  // Função para somar dois números
  function somar(a, b) {
    return a + b;
  }

  const numero1 = 5;
  const numero2 = 7;
//   const resultado = somar(numero1, numero2);

return (
    <div className="container">
        <h1>Soma de Números</h1>
        <p>
            A soma de {numero1} + {numero2} é: <strong>{somar(numero1, numero2)}</strong>
        </p>
        <BackLink voltar={voltar}></BackLink>
    </div>
);
}
