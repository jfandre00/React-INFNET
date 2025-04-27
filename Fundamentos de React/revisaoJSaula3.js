// Revisão de Sintaxe de JS
// documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring

// Desestruturação  - permite descompactar (ou retirar) valores de arrays ou propriedades de objetos, em variáveis distintas.


// Exemplo 1: Desestruturação de arrays
let a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50]; // a = 10, b = 20
console.log(a, b); // 10 20
console.log(rest); // [30, 40, 50]

// Exemplo 2

const x = [1, 2, 3, 4, 5];
const [y, z] = x; // y = 1, z = 2
console.log(y, z); // 1 2

// Exemplo 3: Desestruturação de objetos
const obj = {a: 1, b:2};
const { ax, bx } = obj; // ax = 1, bx = 2
// const ax = obj.a; // ax = 1
// const bx = obj.b; // bx = 2

//-----------------------------------------------------------------
// Operador de Propagação (Spread Operator) - permite expandir um array ou objeto em elementos individuais. Ele é representado por três pontos (...).

let a1 = [1, 2, 3];
let b1 = [0, ...a1, 4]; // b == [0, 1, 2, 3, 4]


let original = [1, 2, 3];
let copy = [...original]; // Faz uma cópia do array original
copy[0] = 0; // Altera o primeiro elemento do array copiado
original[0]; // 1 - o array original permanece inalterado