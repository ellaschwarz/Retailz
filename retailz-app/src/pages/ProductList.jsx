import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';

export default function ProductList(props) {
	const [product, setProduct] = useState([]);

	const handleFetchProducts = () => {
		fetch('https://retailz-657bd.firebaseio.com/products.json')
			.then(res => res.json())
			.then(res => {
				setProduct(res);
				console.log(res);
			});
	};

	useEffect(() => {
		handleFetchProducts();
	}, []);

	console.log(product);
	return (
		<div className='container'>
			{product &&
				Object.entries(product)
					.reverse()
					.map((productItem, index) => {
						console.log(productItem);
						return (
							<ProductItem
								key={index}
								index={index}
								productName={productItem[1].name}
								image={productItem[1].images[0].src.small}
								alt={productItem[1].images[0].alt}
								description={productItem[1].description}
								price={productItem[1].price}
							/>
						);
					})}
		</div>
	);
}
