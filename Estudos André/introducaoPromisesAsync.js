// Usando Promises

fetch("https://api.randomuser.me/?nat=US&results=1").then(
    res => res.json()
.then(json => json.results)
).then(console.log).catch(console.error);

// Usando async/await


const getFakePerson = async () => {
    try {
        let response = await fetch("https://api.randomuser.me/?nat=US&results=1");
        let { results } = await response.json();
        console.log(results);
    } catch (error){
        console.error(error);
    }
}

getFakePerson();