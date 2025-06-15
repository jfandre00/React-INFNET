import React from "react";
import styles from "./TP1Ex06.module.css";
import BackLink from "./BackLink";

export default function Exercicio6({ voltar }) {
  // Objeto com informações do livro
  const livro = {
    titulo: "Aprendendo React",
    autor: "John Doe",
    ano: 2023,
  };

  // Array com capítulos
  const capitulos = [
    "Capítulo 1: Introdução ao React",
    "Capítulo 2: Componentes e Props",
    "Capítulo 3: Estado e Hooks",
    "Capítulo 4: Gerenciamento de Estado",
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.h1Ex06}>{livro.titulo}</h1>
      <p className={styles.paragrafo}><strong>Autor:</strong> {livro.autor}</p>
      <p className={styles.paragrafo}><strong>Ano:</strong> {livro.ano}</p>
      <h2 className={styles.h2Ex06}>Capítulos:</h2>
      <ul>
        {capitulos.map((capitulo, index) => (
          <li className={styles.lista} key={index}>{capitulo}</li>
        ))}
      </ul>
      <BackLink voltar={voltar}></BackLink>
    </div>
  );
}
