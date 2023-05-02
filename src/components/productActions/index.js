import React from 'react';

const ProductActions = () => {
	return (
		<div style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between'
		}}
			className={'product-actions'}
		>
			<button>
				<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#030D15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M9 21C9.55228 21 10 20.5523 10 20C10 19.4477 9.55228 19 9 19C8.44772 19 8 19.4477 8 20C8 20.5523 8.44772 21 9 21Z" stroke="#030D15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19C19.4477 19 19 19.4477 19 20C19 20.5523 19.4477 21 20 21Z" stroke="#030D15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
			<button>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#030D15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M19 18.9999L14.65 14.6499" stroke="#030D15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M9 6V12" stroke="#030D15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M6 9H12" stroke="#030D15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
			<button>
				<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183V2.61183Z" stroke="#030D15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
		
		</div>
	);
};

export default ProductActions;