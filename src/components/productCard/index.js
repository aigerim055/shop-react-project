import React from 'react';
import BasicRating from "../rating";
import Price from "../productPrice";
import ProductActions from "../productActions";

const ProductCard = (props) => {
	
	const product = props.product
	// console.log(product)
	
	return (
		<div className={''}>
			<div className="box card">
				<div style={{
					padding: '35px'
				}}>
					<div className="card-img">
						<p className={'card-discount'}>Get up to {product.discount}% off Today Only!</p>
						<img src={product.img} alt=""/>
					</div>
					<div className="card-desc">
						<h4>{product.title}</h4>
						<Price discount_price={200} old_price={product.price}/>
						<BasicRating rating={'read'} value={product.rating}/>
					</div>
				</div>
				
				<div className="card-overlay">
					<ProductActions/>
					<Price discount_price={200} old_price={product.price}/>
					<BasicRating rating={''}/>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;