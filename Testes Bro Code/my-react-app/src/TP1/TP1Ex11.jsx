import React from "react";
import "../styles.css";
import BackLink from "./BackLink";

export default function Exercicio11({ voltar }) {
  // Função para converter Celsius em Fahrenheit
  function converterCelsiusParaFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  const temperaturaCelsius = 25;
  const temperaturaFahrenheit = converterCelsiusParaFahrenheit(temperaturaCelsius);

  return (
    <div className="container">
      <h1>Conversão de Temperatura</h1>
      <p>
        {temperaturaCelsius}°C é igual a <strong>{temperaturaFahrenheit.toFixed(1)}°F</strong>
      </p>
      <BackLink voltar={voltar}></BackLink>
    </div>
  );
}
