import React, {useEffect} from 'react';
import Header from "../components/header";
import ProductCard from "../components/productCard";
import {useSelector} from "react-redux";

const HomePage = () => {
	
	const products = useSelector(state => state.products) // получает данные
	
	return (
		<>
			<Header/>
			<div className={'container'}>
				<div className="row">
					{
						products.map(product => (
							<div key={product.id} className="col-4">
								<ProductCard product={product}/>
							</div>
						))
					}
				</div>
			</div>
		</>
	);
};

export default HomePage;