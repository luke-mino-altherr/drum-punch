import React from 'react';
import Pads from './Pads';
import Header from './Header'
import Footer from './Footer'
import style from './index.css'

class App extends React.Component {
	render() {
		return ( 
			<div className="app">
			<Header />
				<Pads />
				<Footer />
			</div>
		)
	}
}

export default App