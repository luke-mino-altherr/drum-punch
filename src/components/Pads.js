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
		switch (event.key) {
			case 'z':
			case 'm':
				playInstrument(4);	
				break;
			case 'x':
			case 'n':
				playInstrument(5);	
				break;
			case 'c':
			case 'b':
				playInstrument(6);	
				break;
			case 's':
			case 'j':
				playInstrument(1);	
				break;
			case 'd':
			case 'h':
				playInstrument(2);	
				break;
			case 'f':
			case 'g':
				playInstrument(3);	
				break;
			case 'p':
				startSequencer();
				break
			case 'o':
				stopSequencer();
			default:
				break
		}
	}

	render() {
		return ( 
			<div className="pads" onKeyDown={this.handleKeyEvent}>
			<div>
				<Pad id={1} />
				<Pad id={2} />
				<Pad id={3} />
			</div> 

			<div>
				<Pad id={4} />
				<Pad id={5} />
				<Pad id={6} />
			</div>
			</div>
		)
	}
}

export default Pads;