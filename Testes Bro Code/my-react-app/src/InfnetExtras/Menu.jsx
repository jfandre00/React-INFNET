import Recipe from "./Recipe"

function Menu({title, recipes}) {
    return (
        <article>
            <header>
                <h1>{title}</h1>
            </header>
            <div className="recipe">
                {recipes.map( (recipe, index) => (
                    /* Iremos espalhar as receitas */
                    <Recipe key={index} {...recipe} />
                ))}
            </div>
        </article>
    )
}

export default Menu;