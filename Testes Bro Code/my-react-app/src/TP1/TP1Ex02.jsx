import React from "react";
import styles from "./TP1Ex02.module.css";
import BackLink from "./BackLink.jsx";

export default function Exercicio2({ voltar }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Histórico do ReactJs</h1>
      <ul className={styles.timeline}>
        <li><strong>2011:</strong> React foi criado pelo Jordan Walke no Facebook.</li>
        <li><strong>2013:</strong> React é open source.</li>
        <li><strong>2015:</strong> Introdução do React Native.</li>
        <li><strong>2016:</strong> Lançamento do React Fiber.</li>
        <li><strong>2020:</strong> React 17 focado em melhorias internas.</li>
        <li><strong>2022:</strong> React 18 com recursos como Concurrent Mode e Suspense aprimorado.</li>
      </ul>
      <BackLink voltar={voltar}></BackLink>
    </div>
  );
}
