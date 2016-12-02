import React from 'react';
import Pad from './Pad'
import style from './Pads.css'

class Pads extends React.Component {
	render() {
		return ( 
			<div className="pads">
			<div className="pads">
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