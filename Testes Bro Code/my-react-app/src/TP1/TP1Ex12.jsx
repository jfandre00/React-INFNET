import React from "react";
import "../styles.css";
import BackLink from "./BackLink";

export default function Exercicio12({ voltar }) { // está recebendo a função voltar como prop

  // Arrow function para subtrair dois números
  const subtrair = (a, b) => a - b;

  const numero1 = 15;
  const numero2 = 8;
  const resultado = subtrair(numero1, numero2);

  return (
    <div className="container">
      <h1>Diferença entre Números</h1>
      <p>
        A diferença entre {numero1} e {numero2} é: <strong>{resultado}</strong>
      </p>
      <BackLink voltar={voltar}></BackLink> 
      {/* Link para voltar ao menu passando a função voltar como prop */}
    </div>
  );
}
