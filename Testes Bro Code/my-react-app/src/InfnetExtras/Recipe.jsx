// vamos criar componentes reutilizáveis

function Recipe({name, ingredients, steps}) {
    return (
        /* replace: aonde houver espaço irei substituir por - */
        <section id={name.toLowerCase().replace(/ /g, "-")}> 
            <h1>{name}</h1>
            <ul className="ingredients">
                {ingredients.map( (ingredient, index) => (
                    <li key={index}>{ingredient.amount} {ingredient.measurement} {ingredient.name}</li>
                )
                ) }
            </ul>

            <section className="instructions">
                <h2>Cooking Instructions</h2>
                {steps.map( (step, index) => (
                    <p key={index}>{step}</p>
                )
                ) }
            </section>
        </section>
    )
}

export default Recipe;