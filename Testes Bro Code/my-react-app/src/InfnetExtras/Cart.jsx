import { useState } from "react";

function Cart(props) {
    const [inCart, setInCart] = useState(props.inCart);
    const removeFromCart = (item) => {
        const index = inCart.indexOf(item);
        const newCart = [...inCart.slice(0, index), ...inCart.slice(index + 1)];
        setInCart(newCart);
    }

    const calculateTotal = inCart.reduce((acc, item) => acc + (item.price || 0), 0);

    const itemList = inCart.map((item) => (
        <div key={item.id}>
            {item.title} - ${item.price.toFixed(2)}
            <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
        
    ));

    return (
        <div>
            <h2>Shopping Cart</h2>
            {itemList.length > 0 ? itemList : <p>Your cart is empty.</p>}
            <h3>Total: ${calculateTotal.toFixed(2)}</h3>
            <button>Checkout</button>
        </div>  
    );

}

export default Cart;
