import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import {Button, Box} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ProductIcons = () => {
	return (
		<Box sx={productButtons}>
			<Button>
				<ShoppingCartOutlinedIcon sx={icon}/>
			</Button>
			<Button>
				<ZoomInIcon sx={icon} />
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



