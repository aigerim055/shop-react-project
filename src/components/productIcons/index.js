import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import {Button, Box} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, increaseAmount} from "../../redux/action/productAction";

const ProductIcons = ({product}) => {
	
	const carts = useSelector(state => state.carts)
	const dispatch = useDispatch()
	
	const handleAddToCart = () => {
		if (carts.find(cart => cart.id === product.id)){
			return dispatch(increaseAmount(product.id))
		} else {
			const newValue = {...product, amountInCart: 1}
			dispatch(addToCart(newValue))
		}
	}
	
	
	return (
		<Box
			sx={productButtons}
			onClick={handleAddToCart}
		>
			<Button>
				<ShoppingCartOutlinedIcon sx={icon}/>
			</Button>
			<Button>
				// хз что надо делать при нажатии на лупу, так что пусть будет так
				<a href={product.img} target={"_blank"}>
					<ZoomInIcon sx={icon} />
				</a>
			</Button>
			<Button>
				<FavoriteBorderIcon sx={icon}/>
			</Button>
		</Box>
	);
};

const productButtons = {
	display: "flex",
	alignItems: 'center',
	justifyContent: 'space-between',
	marginBottom: '20px'
}

const icon = {
	color: '#000',
	fontSize: 30
}

export default ProductIcons;



