import React from "react";
import "../styles.css";
import BackLink from "./BackLink";

export default function Exercicio13({ voltar }) {
  // Arrow function para verificar par ou ímpar
  const verificarParOuImpar = (numero) => {
    return numero % 2 === 0 ? "Par" : "Ímpar";
  };

  const numero = 17;
  const resultado = verificarParOuImpar(numero);
  const numero2 = 18;
  const resultado2 = verificarParOuImpar(numero2);

  return (
    <div className="container">
      <h1>Verificação de Número</h1>
      <p>
        O número {numero} é <strong>{resultado}</strong>.
      </p>
        <p>
            O número {numero2} é <strong>{resultado2}</strong>.
        </p>
      <BackLink voltar={voltar}></BackLink>
    </div>
  );
}
