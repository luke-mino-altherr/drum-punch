import React from 'react';
import style from './Pad.css'

class Pad extends React.Component {
	render() {
		const id = this.props.id;
		return ( 
			<button className="pad" onClick={this.props.playInstrument.bind(null, id)}/>
		)
	}
}

export default Pad