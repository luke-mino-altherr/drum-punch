import React from 'react';
import Pads from './Pads';
import Footer from './Footer'
import style from './index.css'

class App extends React.Component {
	render() {
		return ( 
			<div className="app">
				<Pads />
				<Footer />
			</div>
		)
	}
}

export default App