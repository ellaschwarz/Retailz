import React from 'react'
import {Link} from 'react-router-dom';

export default function ProductItem(props) {
    return (
        <div>
            <img src={props.image} alt={props.alt}/>
            <h2>{props.productName}</h2>
            <p>{props.description}</p>
            <p>{props.price}kr</p>
            <Link to={`/products/${props.index}.json/`}>Go to product</Link>

        </div>
    )
}
