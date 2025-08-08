import ProductCard from "./ProductCard";

function ProductList({products}) {
    return (
        <div>
            <ProductCard
            name={products[0].name}
            price={products[0].price}
            description={products[0].description} />
            <ProductCard
            name={products[1].name}
            price={products[1].price}
            description={products[1].description} />
            <ProductCard
            name={products[2].name}
            price={products[2].price}
            description={products[2].description} />
        </div>
    );
}

export default ProductList;