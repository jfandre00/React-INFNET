import React from "react";
import { faker } from "@faker-js/faker";
import "./Ex06.css";
import BackLink from "../TP1/BackLink";

function gerarFuncionarios(qtde = 30) {
  const lista = [];
  for (let i = 1; i <= qtde; i++) {
    lista.push({
      id: i,
      nome: faker.person.fullName(),
      cargo: faker.person.jobTitle(),
      departamento: faker.commerce.department()
    });
  }

  // Ordenar por departamento
  lista.sort((a, b) => a.departamento.localeCompare(b.departamento)); // Ordena alfabeticamente pelo departamento fazendo uso do localeCompare que compara strings a, b e retorna um número negativo, zero ou positivo dependendo da ordem alfabética.
  return lista;
}

export default function Ex06({voltar}) {
  const funcionarios = gerarFuncionarios();

  // Agrupar por departamento
  const agrupado = {};
  for (const f of funcionarios) {
    if (!agrupado[f.departamento]) {
      agrupado[f.departamento] = [];
    }
    agrupado[f.departamento].push(f);
  }

  return (
    <div className="container-ex06">
      <h2>Funcionários Agrupados por Departamento</h2>
      {Object.entries(agrupado).map(([departamento, lista]) => (
        <div key={departamento} className="departamento">
          <h3>{departamento}</h3>
          <ul>
            {lista.map((f) => (
              <li key={f.id}>
                <strong>{f.nome}</strong> – {f.cargo}
              </li>
            ))}
          </ul>
        </div>
      ))}
        <BackLink voltar={voltar} />
    </div>
  );
}
