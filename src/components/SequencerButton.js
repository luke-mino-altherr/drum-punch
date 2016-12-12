import React from 'react';
import style from './SequencerButton.css'

class SequencerButton extends React.Component {
	render() {
		const instrumentId = this.props.instrumentId;
		const sequenceIndex = this.props.mapIndex;
		const className = () => {
			if (this.props.sequencer.sequence[instrumentId][sequenceIndex] == 1 ) {
				return  "button active";
			} else {
				if ((sequenceIndex % (2/this.props.sequencer.resolution)) == 0)
					return "button down";
				else 
					return "button inactive"
			}
		}
		return (
			<div className={className()} onClick={this.props.updateSequence.bind(null, instrumentId, sequenceIndex)}></div>

		)
	}
}

export default SequencerButton;