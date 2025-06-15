import React, { useState } from "react";
import Ex01 from "../TP1/TP1Ex01.jsx";
import Ex02 from "../TP1/TP1Ex02.jsx";
import Ex03 from "../TP1/TP1Ex03.jsx";
import Ex04 from "../TP1/TP1Ex04.jsx";
import Ex05 from "../TP1/TP1Ex05.jsx";
import Ex06 from "../TP1/TP1Ex06.jsx";
import Ex07 from "../TP1/TP1Ex07.jsx";
import Ex08 from "../TP1/TP1Ex08.jsx";
import Ex09 from "../TP1/TP1Ex09.jsx";
import Ex10 from "../TP1/TP1Ex10.jsx";
import Ex11 from "../TP1/TP1Ex11.jsx";
import Ex12 from "../TP1/TP1Ex12.jsx";
import Ex13 from "../TP1/TP1Ex13.jsx";
import Ex14 from "../TP1/TP1Ex14.jsx";
import Ex15 from "../TP1/TP1Ex15.jsx";
import Ex16 from "../TP1/TP1Ex16.jsx";



export default function TP1() {
  const [pagina, setPagina] = useState("menu"); // Estado para controlar a página atual, menu é a página inicial

  const exercicios = {
    ex1: <Ex01 voltar={() => setPagina("menu")} />, // função de voltar para o menu passando a função setPagina que atualiza o estado. Menu é a página inicial que declaramos no useState
    ex2: <Ex02 voltar={() => setPagina("menu")} />,
    ex3: <Ex03 voltar={() => setPagina("menu")} />,
    ex4: <Ex04 voltar={() => setPagina("menu")} />,
    ex5: <Ex05 voltar={() => setPagina("menu")} />,
    ex6: <Ex06 voltar={() => setPagina("menu")} />,
    ex7: <Ex07 voltar={() => setPagina("menu")} />,
    ex8: <Ex08 voltar={() => setPagina("menu")} />,
    ex9: <Ex09 voltar={() => setPagina("menu")} />,
    ex10: <Ex10 voltar={() => setPagina("menu")} />,
    ex11: <Ex11 voltar={() => setPagina("menu")} />,
    ex12: <Ex12 voltar={() => setPagina("menu")} />,
    ex13: <Ex13 voltar={() => setPagina("menu")} />,
    ex14: <Ex14 voltar={() => setPagina("menu")} />,
    ex15: <Ex15 voltar={() => setPagina("menu")} />,
    ex16: <Ex16 voltar={() => setPagina("menu")} />,

  };

  if (pagina !== "menu") return exercicios[pagina] || <p>Exercício não encontrado. Atualize a página</p>; // Renderiza o exercício correspondente se não for o menu

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Menu de Exercícios TP1</h2>
      <ul style={styles.list}>
        {Array.from({ length: 16 }, (_, i) => (
          <li style={styles.li} key={i}>
            <a href="#" onClick={() => setPagina(`ex${i + 1}`)}>
              Exercício {i + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  },
  list: {
    listStyle: "none",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px"
  },
  li: {
    padding: "5px 10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    width: "400px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
  } 
};
