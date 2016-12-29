import React from 'react';

class SignalControl extends React.Component {
  handleChange(event) {
    console.log(event)
    switch(event.target.id) {
        case "enable":
          this.props.oscillator ? 
          this.props.toggleOsc(this.props.params.index, event.target.value) : 
          this.props.toggleNoise(this.props.params.index, event.target.value);
          break;
        case "level":
          this.props.oscillator ? 
          this.props.updateOscLevel(this.props.params.index, event.target.value):
          this.props.updateNoiseLevel(this.props.params.index, event.target.value);
          break;
        case "waveform":
          this.props.updateOscWaveform(this.props.params.index, event.target.value);
          break;
    } 
  }
  render() {
    const id = this.props.params.index;
    var config = null;
    if (this.props.oscillator) {
      config = this.props.instruments[id].config.osc;
    } else {
      config = this.props.instruments[id].config.noise;
    }
    console.log("id", id, config);
    const generateWaveform = () => {
      if (this.props.oscillator) {
        return ( 
          <div>
          <label htmlFor="waveform">Waveform </label>
          <select id="waveform" defaultValue={config.waveform} onChange={this.handleChange.bind(this)} >
            <option value="sine">sine</option>
            <option value="square">square</option>
            <option value="triangle">triangle</option>
            <option value="sawtooth">sawtooth</option>
          </select>
          </div>
        )
      } else {
        return (<div><br /></div>)
      }
    }
    return (
      <div>
        <label htmlFor="enable">Enable</label>
        <input type="range" step="1" min="0" max="1" id="enable"
          value={config.enable} 
          onChange={this.handleChange.bind(this)} />
        <input type="text" step="1" min="0" max="1" id="enable"
          value={config.enable} 
          onChange={this.handleChange.bind(this)} />
        <br />
        <label htmlFor="level">Volume</label>
        <input type="range" step="0.01" min="0" max="1" id="level"
          value={config.level} 
          onChange={this.handleChange.bind(this)} />
          <input type="text" step="0.01" min="0" max="1" id="level"
          value={config.level} 
          onChange={this.handleChange.bind(this)} />
        <br />
        {generateWaveform()}
        
      </div>
    )
  }
}

export default SignalControl;