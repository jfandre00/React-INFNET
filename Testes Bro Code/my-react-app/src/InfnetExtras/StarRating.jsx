import { useState } from "react";
import './StarRating.css'; // Assuming you have a CSS file for styling

export default function StarRating({rating, onRate}) {
    const [hover, setHover] = useState(null);

    return (
        <div>
            {
                [...Array(5)].map( (start, index) => {
                    index += 1;
                    return (
                        <button 
                        type='button' 
                        key={index} 
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={ () => onRate(index)}
                        onMouseEnter={ () => setHover(index)}               
                        onMouseLeave={ () => setHover(null)}
                        >
                        <span className="star" >&#9733;</span>
                        </button>
                    )
                } )
            }
        </div>
    );
}