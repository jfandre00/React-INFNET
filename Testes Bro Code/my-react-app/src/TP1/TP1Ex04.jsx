import React from "react";
import styles from "./TP1Ex04.module.css";
import BackLink from "./BackLink.jsx";

export default function Exercicio4({ voltar }) {
  let nome = "João";
  const idade = 25;

  return (
    <div className={styles.container}>
      <h1>Informações do Usuário</h1>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Idade:</strong> {idade} anos</p>
      <BackLink voltar={voltar}></BackLink>
    </div>
  );
}
