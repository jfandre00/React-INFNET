import React from "react";
import "../styles.css";
import BackLink from "./BackLink";

export default function Exercicio8({ voltar }) {
  // Obtendo a hora atual
  const horaAtual = new Date().getHours();
  
  // Condicional para determinar a saudação com base no horário
  let saudacao;
  if (horaAtual < 12) {
    saudacao = "Bom dia";
  } else if (horaAtual < 18) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa noite";
  }

  return (
    <div className="container">
      <h1 style={{color: "yellow"}}>{saudacao}</h1>
      <BackLink voltar={voltar}></BackLink>
    </div>
  );
}
