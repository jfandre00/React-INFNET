import React from "react";
import { faker } from "@faker-js/faker";
import "./Ex05.css";
import BackLink from "../TP1/BackLink";

function gerarFuncionarios(qtde = 10) {
  const lista = [];
  for (let i = 1; i <= qtde; i++) {
    lista.push({
      id: i,
      nome: faker.person.fullName(),
      cargo: faker.person.jobTitle(),
      departamento: faker.commerce.department()
    });
  }
  return lista;
}

export default function Ex05({ voltar }) {
  const funcionarios = gerarFuncionarios();

  return (
    <div className="container-ex05">
      <h2>Lista de Funcionários</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Departamento</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((f) => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>{f.nome}</td>
              <td>{f.cargo}</td>
              <td>{f.departamento}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <BackLink voltar={ voltar } />
    </div>
  );
}
