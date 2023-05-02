import React from 'react';

const Price = (props) => {
	return (
		<>
			<p className={'card-discount-price'}>
				$ {props.discount_price}
				<span
					style={{
						color: '#030D15',
						fontSize:' 14px',
						padding: '0 5px'
					}}
				>
					/
				</span>
				<span
					style={{
					
					}}
					className={'card-price'}>
					 $ {props.old_price}
				</span>
			</p>
		</>
	);
};

export default Price;