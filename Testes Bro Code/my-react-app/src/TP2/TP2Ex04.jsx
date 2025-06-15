import React from "react";
import "./Ex04.css";
import BackLink from "../TP1/BackLink";

function Avaliacao({ titulo, totalEstrelas, avaliacao, cor }) {
  const estrelas = [];

  for (let i = 0; i < totalEstrelas; i++) {
    estrelas.push(
      <span
        key={i}
        className="estrela"
        style={{ color: i < avaliacao ? cor : "lightgray" }}
      >
        ★
      </span>
    );
  }

  return (
    <div className="avaliacao">
      <div className="estrelas">{estrelas}</div>
      <div className="titulo">{titulo}</div>
    </div>
  );
}

export default function Ex04({ voltar}) {
  return (
    <div className="container-ex04">
      <Avaliacao titulo="Interestelar" totalEstrelas={5} avaliacao={5} cor="orange" />
      <Avaliacao titulo="Matrix" totalEstrelas={5} avaliacao={4} cor="green" />
      <Avaliacao titulo="Top Gun" totalEstrelas={5} avaliacao={3} cor="blue" />
      <Avaliacao titulo="Forrest Gump" totalEstrelas={5} avaliacao={5} cor="purple" />
      <Avaliacao titulo="Clube da Luta" totalEstrelas={5} avaliacao={2} cor="crimson" />
        <BackLink voltar={voltar} />
    </div>
  );
}
