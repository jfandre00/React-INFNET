import React from "react";
import "./Ex03.css";
import BackLink from "../TP1/BackLink";

function Avaliacao({ titulo, avaliacao, totalEstrelas=5 }) {
  const estrelas = [];

  for (let i = 0; i < totalEstrelas; i++) {
    estrelas.push(
      <span
        key={i}
        className={`estrela ${i < avaliacao ? "vermelha" : "cinza"}`}
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

const filmesAvaliacao = [
        ["O Poderoso Chefão", 5], ["Titanic", 4], ["Avatar", 3],
        ["Coringa", 2], ["O Senhor dos Anéis", 1]
    ]

export default function Ex03({ voltar }) {
  return (
    <div className="container-ex03">
      <div className="avaliacoes">
      {filmesAvaliacao.map(([titulo, avaliacao], index) => (
        <Avaliacao 
          key={index} 
          titulo={titulo} 
          avaliacao={avaliacao} 
          totalEstrelas={5} 
        />
      ))}
      </div>
      <BackLink voltar={voltar}></BackLink>
    </div>
    
    // <div className="container-ex03">
    //   <Avaliacao titulo="O Poderoso Chefão" totalEstrelas={5} avaliacao={5} />
    //   <Avaliacao titulo="Titanic" totalEstrelas={5} avaliacao={4} />
    //   <Avaliacao titulo="Avatar" totalEstrelas={5} avaliacao={3} />
    //   <Avaliacao titulo="Coringa" totalEstrelas={5} avaliacao={2} />
    //   <Avaliacao titulo="O Senhor dos Anéis" totalEstrelas={5} avaliacao={1} />
    //   <BackLink voltar={voltar}></BackLink>
    // </div>
  );
}
