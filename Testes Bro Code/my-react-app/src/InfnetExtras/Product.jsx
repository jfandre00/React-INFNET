import { useState } from "react";
import StarRating from "./StarRating";

export default function Product({ name, price, description}) {
    const [rating, setRating] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="product">
            <h2>{name}</h2>
            <p className="price">Price: ${price}</p>
            <p>{description}</p>
            <StarRating rating={rating} onRate={setRating} />
            <button onClick={ () => setShowDetails(!showDetails) }>
                {
                    showDetails ? "Hide Details" : "Show Details"
                }
            </button>
            {showDetails && (
                <div className="details">
                    <p>Rating: {rating} stars</p>
                    <p>Description: {description}</p>
                </div>
            )}
        </div>
    );
}