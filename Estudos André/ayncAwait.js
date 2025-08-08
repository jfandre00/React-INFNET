
console.log("Learning");
display();

async function display() {
    const what = await getContent();
    console.log(what);
}

function getContent() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("React");
        }, 3000);
    })
}

console.log("Eu vou ser executado antes do async");
console.log("As coisas continuam acontecendo enquanto o async espera 3 segundos"); 

// geralmente usamos a async await para fazer requisições a APIs, que podem demorar um pouco para responder. Assim, o código não fica travado esperando a resposta, e outras coisas podem acontecer enquanto isso.
