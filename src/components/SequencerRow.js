import React from 'react';
import SequencerButton from './SequencerButton'
import style from './SequencerRow.css'

class SequencerRow extends React.Component {
	render() {
		const sequencer = this.props.sequencer;
		const beatCount = sequencer.measureCount / sequencer.resolution;
		return ( 
			<div className="sequencerRow">
			<div className="instrumentName">{this.props.instrument.name} </div>
			{Array(beatCount).fill(1).map((el, i) =>
    			<SequencerButton key={i+1} instrumentId={this.props.id} mapIndex={i} {...this.props}/>
  			)}
			</div>
		)
	}
}

export default SequencerRow;