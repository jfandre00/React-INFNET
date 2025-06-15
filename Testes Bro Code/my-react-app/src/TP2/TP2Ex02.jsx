import React from "react";
import "./Ex02.css";
import BackLink from "../TP1/BackLink";

function Saudacao({ nome, dia, mes, ano }) {
const dataFormatada = [dia, mes, ano].map(n => n.toString().padStart(2, "0")).join("/"); // pega cada uma das variáveis, transforma em string, adiciona 0 a esquerda se necessário e junta com /. O padStart serve para adicionar o 0 a esquerda se necessário, pois foi passado 2 como parâmetro.

  const isBissexto = (ano) => {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
  };

  return (
    <div className="card">
      <p className="nome">Olá, {nome}!</p>
      <p>Data de nascimento: {dataFormatada}</p>
      {isBissexto(ano) ? (
        <p className="bissexto">Ano {ano} é bissexto!</p>
      ) : (
        <p className="naoBissexto">Ano {ano} não é bissexto!</p>
      )}
    </div>
  );
}

export default function Ex02({ voltar}) {
  return (
    <div className="container-ex02">
      <Saudacao nome="André" dia={5} mes={12} ano={1980} />
      <Saudacao nome="Denise" dia={9} mes={7} ano={1986} />
      <Saudacao nome="Bento" dia={29} mes={3} ano={2022} />
      <BackLink voltar={voltar}></BackLink>
    </div>
  );
}
