const nome = "André"; //String
const idade = 44; //inteiro
const altura = 1.78; //double
const isTrabalha = true; //boolean
const apelido = undefined; //undefined
const isBook = null; //null

//Os primitivos são criados na memória, enquantos os referenciados são criados um uma referência. Ele aponta para um local na memória

const nomes = ["André", "João", "Maria"]; //Array
nomes[0] = "André Ferreira"; //Alterando o valor do array

//Criando um objeto

const book = {
    nome: "Just React",
    year: 2022
}

const nextBook = {...book}; //Spread operator - copia o objeto book para nextBook

console.log(nextBook);

//-----------------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = numbers.map((number) => number * 2); //map retorna um novo array com os valores alterados
console.log(doubleNumbers);

