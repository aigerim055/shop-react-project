import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import {getProducts} from "./redux/action/productAction";
import {useDispatch} from "react-redux";

const App = () => {
	
	
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(getProducts())
	}, [])
	
	
	return (
		<>
            <BrowserRouter>
	            <Routes>
		            <Route path={'/'} element={<HomePage/>}/>
	            </Routes>
            </BrowserRouter>
		</>
	);
};

export default App;