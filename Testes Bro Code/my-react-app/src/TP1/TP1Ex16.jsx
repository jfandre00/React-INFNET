import React from "react";
import BackLink from "./BackLink";
import "../styles.css";
import "./TP1Ex16.css";

// Componente Filho
function Saudacao({ nome, idade }) {
  return (
    <div className="saudacao">
      <p>Olá, {nome}!</p>
      <p>Você tem {idade} anos.</p>
    </div>
  );
}

// Componente Pai
export default function Exercicio16({ voltar }) {
  const usuario = {
    nome: "André",
    idade: 44,
  };

  return (
    <div className="container">
      <h1>Exemplo de Props</h1>
      <Saudacao nome={usuario.nome} idade={usuario.idade} />
      <BackLink voltar={voltar}></BackLink>
    </div>
  );
}
