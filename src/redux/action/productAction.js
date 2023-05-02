import axios from "axios";


export const getProducts = () => {
	return (dispatch) => {
		axios('https://6450f7b2a32219691156b4da.mockapi.io/shop/products')
			.then(({data}) => {
				dispatch({type: 'GET_PRODUCTS', payload: data})
			})
	}
}