import React from "react";

// Função auxiliar para obter o nome do mês e dia da semana em português
function formatarData(dia, mes, ano) {
  const data = new Date(ano, mes - 1, dia); // mês no Date começa do 0

  const opcoes = {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "2-digit"
  };

  // Converte a data para português brasileiro
  const formatada = data.toLocaleDateString("pt-BR", opcoes);

  return {
    completa: `${String(dia).padStart(2, "0")}/${String(mes).padStart(2, "0")}/${ano}`,
    diaSemana: formatada.split(",")[0],
    nomeMes: formatada.split(" de ")[1]
  };
}

// Componente Data recebe props separadas
function Data({ dia, mes, ano }) {
  const { completa, diaSemana, nomeMes } = formatarData(dia, mes, ano);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        width: "300px",
        fontFamily: "sans-serif",
        backgroundColor: "#e3f2fd",
        // display: "inline-block"
      }}
    >
      <h3>{completa}</h3>
      <p><strong>Dia da Semana:</strong> {diaSemana}</p>
      <p><strong>Mês:</strong> {nomeMes}</p>
    </div>
  );
}

export default function Ex02() {
  const datas = [
    { dia: 1, mes: 1, ano: 2024 },
    { dia: 7, mes: 6, ano: 2025 },
    { dia: 25, mes: 12, ano: 2023 },
    { dia: 15, mes: 8, ano: 2022 }
  ];

  return (
    <div style={{ padding: "20px", display: "flex",
    flexDirection: "column",
    alignItems: "center",
 }}>
      <h2 style={{marginBottom: "10px"}}>Datas Formatadas</h2>
      {datas.map((data, index) => (
        <Data key={index} {...data} />
      ))}
    </div>
  );
}
