const lordify = (firstName, land) => `${firstName} of ${land}`;

console.log(lordify("André", "Infnet")); // André of Infnet
console.log(lordify("Maria", "React")); // Maria of React

const lordify2 = (firstName, land) => {
    if (!firstName) {
        throw new Error("A first name is required to lordify");
    }
    if (!land) {
        throw new Error("A land is required to lordify");
    }

    return `${firstName} of ${land}`;
}


