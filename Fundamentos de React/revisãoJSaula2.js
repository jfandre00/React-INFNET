const firstName = 'Lucas'
const qty = 2
const eventName = 'React Conf 2023'

// Template literals - são strings que permitem interpolação de variáveis e expressões dentro delas.
console.log(`Hello ${firstName}, you ordered ${qty} tickets to ${eventName}`)

// String concatenation - é o processo de unir duas ou mais strings em uma única string.
const email = `
Hello ${firstName},

Thanks for ordering ${qty} tickets to ${eventName}.
`

console.log(email)

// Funções - são blocos de código projetados para fazer um trabalho específico. 

function sayHello(name) {
    return `Hello ${name}`
}

console.log(sayHello(firstName))


const logCompliment = function() {
    console.log('You are awesome!');
}

logCompliment();

// Arrow functions - são uma forma mais concisa de escrever funções em JavaScript. Elas não têm seu próprio this, o que pode ser útil em certos contextos.
const lordify = firstName => `Lord ${firstName}`;


const person = (firstName, lastName) => ({
    first: firstName,
    last: lastName
});