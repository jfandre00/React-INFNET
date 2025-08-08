// console.log(1);
// console.log(2);
// setTimeout(() => console.log(3), 3000); // simula uma operação assíncrona, exige uma determinada espera
// console.log(4);

// para usar o await, a função precisa ser assíncrona

async function escreverInformacoesPais(paisDesejado) {
    const info = await fetch(`https://restcountries.com/v3.1/name/${paisDesejado}`); // faz uma requisição para a API de países, esperando a resposta até que seja concluída
    console.log(await info.json()); // converte a resposta em JSON e imprime no console, que também é uma operação assíncrona
}

escreverInformacoesPais("brazil"); // chama a função com o país desejado