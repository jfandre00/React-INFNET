import React, { useState } from "react";
import "./TP1Ex15.css";
import BackLink from "./BackLink";

export default function Exercicio15({ voltar }) {
  const [contador, setContador] = useState(0); // utilizamos o useState para criar o estado do contador, iniciando em 0

  const incrementar = () => setContador(contador + 1); // setContador atualiza o estado do contador
  const decrementar = () => setContador(contador - 1);

  return (
    <div className="container">
      <h1>Contador</h1>
      <p>Valor atual: {contador}</p>
      <div className="botoes">
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
      </div>
      <BackLink voltar={voltar} />
    </div>
  );
}
