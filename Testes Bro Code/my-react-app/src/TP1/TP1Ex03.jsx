import React from "react";
import styles from "./TP1Ex03.module.css";
import BackLink from "./BackLink.jsx";

export default function Exercicio3({ voltar }) {
  return (
    <div className={styles.cointainer}>
      <h1 className={styles.h1Ex03}>Hello, React!</h1>
      <BackLink voltar={voltar}></BackLink>
    </div>
  );
}
