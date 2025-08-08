function ProductCard({name, price, description}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Preço: R${price.toFixed(2)}</p>
            <p>{description}</p>
        </div>
    );
}

export default ProductCard;