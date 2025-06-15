import React from "react";
import styles from "./TP1Ex01.module.css";
import BackLink from "./BackLink.jsx";

export default function Exercicio1({ voltar }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>O que é React</h1>
            <p className={styles.paragraph}>React é uma biblioteca JavaScript para construção de interfaces de usuário, desenvolvida pelo Facebook. Ele facilita a criação de componentes reutilizáveis e a construção de aplicações web dinâmicas e eficientes.</p>
            <BackLink voltar={voltar}></BackLink>
        </div>
    );
}


