import React from 'react';
import SequencerRow from './SequencerRow'
import TransportBar from './TransportBar'
import style from '../styles/Sequencer.css'

class Sequencer extends React.Component {
	render() {
		return (
			<div className="sequencer">
			{this.props.instruments.map((instrument, i) => 
          		<SequencerRow {...this.props} key={i} id={i} instrument={instrument}/>
        	)}
        	<div className="center"><TransportBar {...this.props} /></div>
        	</div>
		)
	}
}

export default Sequencer