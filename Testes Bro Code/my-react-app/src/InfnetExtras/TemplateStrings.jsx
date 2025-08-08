export default function TemplateStrings() {

    const firstName = "John";
    const event = "React Conference 2024";
    const qty = 2;
    const price = 49.99;
    const ticketAgent = "Jane Smith";

    const email = `
    Hello ${firstName}, 
    Thanks for ordering ${qty} tickets to ${event}.
    Order details:
    ${qty} X $${price} = $${qty * price} to ${event}
    You can pick your tickets up 30 minutes before the show.
    Thanks,
    ${ticketAgent}
    `;

    return (
        <main>
            <h1>Template Strings Example</h1>
            <pre> {email} </pre>
        </main>
    );
}