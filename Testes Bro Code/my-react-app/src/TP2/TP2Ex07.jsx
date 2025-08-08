import React from "react";
import { faker } from "@faker-js/faker";
import "./Ex07.css";
import BackLink from "../TP1/BackLink";

function gerarProdutos(qtde = 50) {
  const lista = [];
  for (let i = 1; i <= qtde; i++) {
    lista.push({
      id: i,
      nome: faker.commerce.productName(),
      descricao: faker.commerce.productDescription(),
      adjetivo: faker.commerce.productAdjective(),
      preco: faker.commerce.price({ min: 10, max: 500, dec: 2, symbol: "R$" })
    });
  }
  return lista;
}

export default function Ex07( {voltar }) {
  const produtos = gerarProdutos();

  return (
    <div className="container-ex07">
      <h2>Produtos em Destaque</h2>
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <h3>{produto.nome}</h3>
            <p className="descricao">{produto.descricao}</p>
            <p className="adjetivo">
              <strong>{produto.adjetivo}</strong>
            </p>
            <p className="preco">{produto.preco}</p>
          </div>
          
        ))}
      </div>
      <BackLink voltar={voltar} />
    </div>
  );
}
