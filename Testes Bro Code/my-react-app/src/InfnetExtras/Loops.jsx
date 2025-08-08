export default function Loops() {
    const isTravelResumed = true;
    let ticketAvailable;

    if (isTravelResumed) {
        ticketAvailable = 3500;
    } else {
        ticketAvailable = 200;
    }

    const yearArray = [2020, 2021, 2022, 2023, 2024];
    
    return (
        <main>
            <h1>Exemplos de If Else e Loop</h1>
            <h2>Exemplo do If Else</h2>
            <p>Viagens retormadas: {isTravelResumed.toString()}</p>
            <p>Valor do ticket: R$ {ticketAvailable.toString()}</p>
            <h2>Exemplo de Loop</h2>
            <ul>
                {yearArray.map((year, index) => {
                    return <li key={index}>{year}</li>;
                })}
            </ul>

        </main>
    )
}