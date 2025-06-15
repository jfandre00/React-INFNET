import React from "react";
import "../styles.css";
import BackLink from "./BackLink";
import styled from "styled-components";

export default function Exercicio9({ voltar }) {

    const Principal = styled.div`
        background-color: #f0f0f0;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        margin: 10px auto;

    `;
    const Titulo = styled.h1`
        color: #333;
        font-size: 24px;
        margin-bottom: 10px;
    `;
    const Lista = styled.ul`
        list-style-type: none;
        padding: 10px;
    `;

  // Lista de tarefas
  const tarefas = [
    "Estudar React",
    "Fazer exercícios",
    "Ler um livro",
    "Preparar o almoço"
  ];

  return (
    <Principal>
      <Titulo>Lista de Tarefas</Titulo>
      <Lista>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </Lista>
      <BackLink voltar={voltar}></BackLink>
    </Principal>
  );
}
