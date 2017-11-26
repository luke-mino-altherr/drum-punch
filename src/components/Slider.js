import React from 'react';

class Slider extends React.Component {
	handleChange(event) {
		this.props.onChangeFunc(this.props.index, event.target.value)
	}
	render() {
		return (
			<div>
				<label htmlFor="slider">Cutoff</label>

        		<input type="range" step={this.props.step} min={this.props.min} max={this.props.max} id="slider"
          			value={this.props.value}
          			onChange={this.handleChange.bind(this)} />
			</div>
		)
	}

}

Slider.propTypes = {
	index: React.PropTypes.number,
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	onChangeFunc: React.PropTypes.func,
	value: React.PropTypes.number
}

export default Slider