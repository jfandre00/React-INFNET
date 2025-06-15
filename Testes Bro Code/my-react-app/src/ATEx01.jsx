import React from "react";

function Livro({ livro }) {
    const getCorFundo = (nota) => { 
        if (nota >= 4) return "#d4edda"; // Cor verde claro
        if (nota === 3) return "#fff3cd"; // Cor amarelo claro
        return "#f8d7da"; // Cor vermelho claro
    }

    return (
        <div style={{
            display: "inline-block",
            backgroundColor: getCorFundo(livro.classificacao), // Peguei a classificação, passei para a função e ela retorna a cor de fundo.
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
            width: "300px",
            fontFamily: "sans-serif"
        }}
        >
            <h3>{livro.titulo}</h3>
            <p><strong>Autor: </strong>{livro.autor}</p>
            <p><strong>Classificação: </strong>{livro.classificacao} / 5</p>
        </div>
    );
}

export default function Ex01() {
    const livros = [ // Desculpe pelos ratings! são todos livros ótimos, mas para o exercício, coloquei ratings diferentes.
        { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", classificacao: 5 },
        { titulo: "1984", autor: "George Orwell", classificacao: 4 },
        { titulo: "Dom Casmurro", autor: "Machado de Assis", classificacao: 3 },
        { titulo: "A Revolução dos Bichos", autor: "George Orwell", classificacao: 2 },
        { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", classificacao: 1 }
    ];

    return (
        <div style={{ padding: "20px", display: "flex",
    flexDirection: "column",
    alignItems: "center"}}>
            <h2 style={{marginBottom: "10px"}}>Lista de Livros</h2>
            {/* Mapeando a lista de livros e renderizando o componente Livro para cada item */}
            {livros.map((livro, index) => (
                <Livro key={index} livro={livro} />
            ))}  
        </div>
    );
}