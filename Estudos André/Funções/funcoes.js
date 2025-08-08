function swapCase() {
    const name = document.getElementById("inputName").value; // Obtém o valor do input
    const characters = name.split(""); // Divide a string em um array de caracteres
    const changeCharacters = characters.map(
        function(c) { 
            if (c == c.toLowerCase()) {
                return c.toUpperCase();
            } else {
                return c.toLowerCase();
            }
        } 
    );

    const changedName = changeCharacters.join(""); // Junta os caracteres de volta em uma string
    document.getElementById("outputName").innerHTML = changedName;
}