import React from 'react';
import Pad from './Pad'
import style from './Pads.css'
import {playInstrument} from '../actions'
import { startSequencer, stopSequencer } from '../actions'

class Pads extends React.Component {
	constructor() {
		super();
		this.handleKeyEvent = this.handleKeyEvent.bind(this);
	}
	handleKeyEvent(event) {
		console.log(event.key);
		switch (event.key) {
			case 'z':
			case 'm':
				this.props.playInstrument(3);	
				break;
			case 'x':
			case 'n':
				this.props.playInstrument(4);	
				break;
			case 'c':
			case 'b':
				this.props.playInstrument(5);	
				break;
			case 's':
			case 'j':
				this.props.playInstrument(0);	
				break;
			case 'd':
			case 'h':
				this.props.playInstrument(1);	
				break;
			case 'f':
			case 'g':
				this.props.playInstrument(2);	
				break;
			case 'p':
				this.props.startSequencer();
				break
			case 'o':
				this.props.stopSequencer();
			default:
				break
		}
	}

	render() {
		return ( 
			<div className="pads" onKeyDown={this.handleKeyEvent}>
			<div>
				<Pad {...this.props} id={0} />
				<Pad {...this.props} id={1} />
				<Pad {...this.props} id={2} />
			</div> 

			<div>
				<Pad {...this.props} id={3} />
				<Pad {...this.props} id={4} />
				<Pad {...this.props} id={5} />
			</div>
			</div>
		)
	}
}

export default Pads;