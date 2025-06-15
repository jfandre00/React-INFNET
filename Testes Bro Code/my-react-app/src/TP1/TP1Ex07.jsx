import React from "react";
import "../styles.css";
import BackLink from "./BackLink";

export default function Exercicio7({ voltar }) {
  // Nome do usuário
  const nome = "André";

  // Obtendo a hora atual
  const horaAtual = new Date().getHours();
  
  // Determinando a saudação com base no horário
  let saudacao;
  if (horaAtual < 12) {
    saudacao = "Bom dia";
  } else if (horaAtual < 18) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa noite";
  }

  // Usando Template Strings para a mensagem personalizada
  const mensagem = `${saudacao}, ${nome}! Seja bem-vindo à nossa aplicação.`;

  return (
    <div className="container">
      <h1>{mensagem}</h1>
        <BackLink voltar={voltar}></BackLink>
    </div>
  );
}
