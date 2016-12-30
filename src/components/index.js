import React from 'react';
import Pads from './Pads';
import Header from './Header'
import Footer from './Footer'
import style from '../styles/index.css'

const App = () => {
	return ( 
		<div className="app" >
			<Header />
			<Pads />
			<Footer />
		</div>
	)
}

export default App