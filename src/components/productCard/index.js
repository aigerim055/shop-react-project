import React from 'react';
import BasicRating from "../rating";
import Price from "../productPrice";
import ProductIcons from "../productIcons";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const ProductCard = ({product}) => {
	return (
		<Box>
			<Box sx={card}>
				<Box sx={{
					padding: '35px'
				}}
					className={'cardDesc'}
				>
					<Box>
						<Typography className={'card-discount'}>Get up to {product.discount}% off Today Only!</Typography>
						<img
							src={product.img}
							alt=""
							style={{
								width: '100%',
								height: '370px',
								marginBottom: '35px',
								objectFit: 'contain'
							}}
						/>
					</Box>
					<div className="card-desc">
						<Typography variant='h6'>{product.title}</Typography>
						<Price discount={product.discount} old_price={product.price}/>
						<BasicRating rating={'read'} value={product.rating}/>
					</div>
				</Box>
				
				<Box sx={cardOverlay}>
					<ProductIcons product={product}/>
					<Price discount={product.discount} old_price={product.price}/>
					<BasicRating rating={''} value={product.rating} product={product}/>
				</Box>
			</Box>
		</Box>
	);
};

const cardOverlay = {
	width: '100%',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '30px',
	lineHeight: '37px',
	color: '#000',
	background: '#FAFAFA',
	position: 'absolute',
	padding: '35px',
	marginTop: '460px',
	bottom: '-230px',
}

const card = {
	position: "relative",
	overflow: "hidden",
	border: "1px solid rgba(0, 0, 0, 0.1)",
	height: "100%",
	
	'&:hover .MuiBox-root':{
		bottom: '0',
		transition: '1.6s',
	},
}


export default ProductCard;