import React from "react";
import "../styles.css";
import BackLink from "./BackLink";

// Componente de Card
function Card({ nome, preco, descricao }) {
  return (
    <div style={{backgroundColor: "lightgray"}} className="card">
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p><strong>Preço:</strong> R$ {preco.toFixed(2)}</p>
    </div>
  );
}

export default function Exercicio14({ voltar }) {
  // Array de produtos
  const produtos = [
    { id: 1, nome: "Camisa", preco: 49.9, descricao: "Camisa 100% algodão" },
    { id: 2, nome: "Tênis", preco: 199.9, descricao: "Confortável e moderno" },
    { id: 3, nome: "Relógio", preco: 299.9, descricao: "Resistente à água" }
  ];

  return (
    <div className="container">
      <h1>Produtos em Destaque</h1>
      <div className="cards-container">
        {produtos.map((produto) => (
          <Card key={produto.id} {...produto} />
        ))}
      </div>
      <BackLink voltar={voltar}/>
    </div>
  );
}
