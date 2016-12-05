import React from 'react';
import style from './Pad.css'
import {playInstrument} from '../actions'

class Pad extends React.Component {
	render() {
		const play = () => {
			playInstrument(this.props.id)
		}
		return ( 
			<button className="pad" onClick={play}/>
		)
	}
}

export default Pad