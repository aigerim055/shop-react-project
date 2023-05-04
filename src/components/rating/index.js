import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating(props) {
	const [value, setValue] = React.useState();
	
	return (
		<Box
			sx={{
				'& > legend': { mt: 2 },
			}}
		>
			{
				props.rating === 'read' ?
					<Rating name="read-only" value={props.value} readOnly />
					:
					<Rating
						// name="simple-controlled"
						defaultValue={props.value}
						value={props.value}
						// onChange={(event, newValue) => {
						// 	setValue(newValue);
						// }}
					/>
			}
		</Box>
	);
}
