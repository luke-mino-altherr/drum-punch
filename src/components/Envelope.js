import React from 'react';

class Envelope extends React.Component {
  handleChange(event) {
    console.log(event)
    switch(event.target.id) {
        case "attack":
        if (this.props.amplitude) {
          this.props.oscillator ? 
          this.props.updateOscAmplitudeAttack(this.props.params.index, event.target.value) : 
          this.props.updateNoiseAmplitudeAttack(this.props.params.index, event.target.value);
        } else {
          this.props.updateOscFrequencyAttack(this.props.params.index, event.target.value);
        }
          break;
        case "attackType":
        if (this.props.amplitude) {
          this.props.oscillator ? 
          this.props.updateOscAmplitudeAttackType(this.props.params.index, event.target.value):
          this.props.updateNoiseAmplitudeAttackType(this.props.params.index, event.target.value);
        } else {
          this.props.updateOscFrequencyAttackType(this.props.params.index, event.target.value);
        }
          break;
        case "decay":
        if (this.props.amplitude) {
          this.props.oscillator ? 
          this.props.updateOscAmplitudeDecay(this.props.params.index, event.target.value):
          this.props.updateNoiseAmplitudeDecay(this.props.params.index, event.target.value);
        } else {
          this.props.updateOscFrequencyDecay(this.props.params.index, event.target.value);
        }
          break;
        case "decayType":
        if (this.props.amplitude) {
          this.props.oscillator ? 
          this.props.updateOscAmplitudeDecayType(this.props.params.index, event.target.value):
          this.props.updateNoiseAmplitudeDecayType(this.props.params.index, event.target.value);
        } else {
          this.props.updateOscFrequencyDecayType(this.props.params.index, event.target.value);
        }
          break;
        case "startValue":
          this.props.updateOscFrequencyStartValue(this.props.params.index, event.target.value);
          break;
        case "endValue":
          this.props.updateOscFrequencyEndValue(this.props.params.index, event.target.value);
          break;
    } 
  }
  render() {
    const id = this.props.params.index;
    var config = null;
    var freqParameters = <div></div>
    var title = null;
    const frequency = () => {
      return (
        <div>
        <label htmlFor="startValue">Start Value</label>
        <input type="range" step="1" min="1" max="20000" id="startValue"
          value={config.startValue} 
          onChange={this.handleChange.bind(this)} />
        <input type="text" step="1" min="1" max="20000" id="startValue"
          value={config.startValue} 
          onChange={this.handleChange.bind(this)} />
          <br />

        <label htmlFor="EndValue">End Value</label>
        <input type="range" step="1" min="1" max="20000" id="endValue"
          value={config.endValue} 
          onChange={this.handleChange.bind(this)} />
          <input type="text" step="1" min="1" max="20000" id="endValue"
          value={config.endValue} 
          onChange={this.handleChange.bind(this)} />

      </div>
      )
    }
    if (this.props.oscillator) {
      config = this.props.instruments[id].config.osc;
    } else {
      config = this.props.instruments[id].config.noise;
    }
    if (this.props.amplitude) {
      config = config.amplitude
      title = <h4 className="pb-2">Amplitude Envelope</h4>
    } else {
      config = config.frequency
      title = <h4 className="pb-2">Frequency Envelope</h4>
      freqParameters = frequency()
    }
    console.log("id", id, config);
    return(
      <div className="pb-3">
        {title}
        <label htmlFor="attack">Attack</label>
        <input type="range" step="0.01" min="0" max="5" id="attack"
          value={config.attack} 
          onChange={this.handleChange.bind(this)} />
          <input type="text" step="0.01" min="0" max="5" id="attack"
          value={config.attack} 
          onChange={this.handleChange.bind(this)} />
          <br />
        <label htmlFor="attackType">Attack Shape</label>
        <input type="range" step="1" min="0" max="1" id="attackType"
          value={config.attackType} 
          onChange={this.handleChange.bind(this)} />
          <input type="text" step="1" min="0" max="1" id="attackType"
          value={config.attackType} 
          onChange={this.handleChange.bind(this)} />
          <br />

        <label htmlFor="attack">Decay</label>
        <input type="range" step="0.01" min="0" max="15" id="decay"
          value={config.decay} 
          onChange={this.handleChange.bind(this)} />
          <input type="text" step="0.01" min="0" max="15" id="decay"
          value={config.decay} 
          onChange={this.handleChange.bind(this)} />
          <br />

        <label htmlFor="decayType">Decay Shape</label>
        <input type="range" step="1" min="0" max="1" id="decayType"
          value={config.decayType} 
          onChange={this.handleChange.bind(this)} />
          <input type="text" step="1" min="0" max="1" id="decayType"
          value={config.decayType} 
          onChange={this.handleChange.bind(this)} />
          <br />


        {freqParameters}
         <br />

      </div>
    )
  }
}

export default Envelope