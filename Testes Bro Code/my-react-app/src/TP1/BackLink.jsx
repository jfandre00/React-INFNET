import React from "react";
import "./BackLink.css";

export default function BackLink({ voltar = () => {} }) {
  return (
    <a href="#" className="back-link" onClick={voltar}>← Voltar ao menu</a>
  );
}

