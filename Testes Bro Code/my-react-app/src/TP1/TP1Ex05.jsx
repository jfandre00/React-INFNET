import React from "react";
import BackLink from "./BackLink.jsx";
import styles from "./TP1Ex05.module.css";

export default function Exercicio5({voltar}) {
    const nome = "André";
    const idade = 44;
    const email = "andre.lferreira@al.infnet.edu.br";
    const ativo = true;

    return (
        <div className={styles.container}>
            <h1>Perfil de usuário</h1>
            <p><strong>Nome: </strong>{nome}</p>
            <p><strong>Idade: </strong>{idade}</p>
            <p><strong>Email: </strong>{email}</p>
            <p><strong>Status: </strong>{ativo ? "Ativo": "Inativo"}</p>
            <BackLink voltar={voltar}></BackLink>
        </div>
    );
}