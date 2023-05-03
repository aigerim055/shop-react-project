import React, {useEffect} from 'react';
import Header from "../components/header";
import ProductCard from "../components/productCard";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../redux/action/productAction";

const HomePage = () => {
	
	const dispatch = useDispatch() // отправляет запрос
	const products = useSelector(state => state.products) // получает данные
	
	console.log(products)
	useEffect(() => {
		dispatch(getProducts())
	}, [])
	
	
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