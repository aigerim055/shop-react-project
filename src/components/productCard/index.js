import React from 'react';
import BasicRating from "../rating";
import Price from "../productPrice";
import ProductActions from "../productActions";

const ProductCard = () => {
	return (
		<div className={''}>
			<div className="box card">
				<div style={{
					padding: '35px'
				}}>
					<div className="card-img">
						<p className={'card-discount'}>Get up to 10% off Today Only!</p>
						<img src="https://istore.kg/media/products/MK2E3.webp" alt=""/>
					</div>
					<div className="card-desc">
						<h4>Magic Mouse</h4>
						<Price discount_price={200} old_price={250}/>
						<BasicRating rating={'read'}/>
					</div>
				</div>
				
				<div className="card-overlay">
					<ProductActions/>
					<Price discount_price={200} old_price={250}/>
					<BasicRating rating={''}/>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;