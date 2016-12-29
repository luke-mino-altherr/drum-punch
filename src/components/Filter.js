import React from 'react';

class Filter extends React.Component {
  handleChange(event) {
    switch(event.target.id) {
        case "type":
          this.props.updateNoiseFilterType(this.props.params.index, event.target.value);
          break;
        case "cutoff":
          this.props.updateNoiseFilterCutoff(this.props.params.index, event.target.value);
          break;
        case "q":
          this.props.updateNoiseFilterQ(this.props.params.index, event.target.value);
          break;
    } 
  }
  render() {
    const id = this.props.params.index;
    const config = this.props.instruments[id].config.noise.filter;
    console.log("NOISE",config)
    return (
      <div>

        <h3>Filter</h3>

        <label htmlFor="type">Type</label>
        <select id="type" defaultValue={config.type} onChange={this.handleChange.bind(this)}>
                <option value="lowpass">Lowpass</option>
                <option value="highpass">Highpass</option>
                <option value="bandpass">Bandpass</option>
                <option value="lowshelf">Low Shelf</option>
                <option value="highshelf">High Shelf</option>
                <option value="peaking">Peaking</option>
                <option value="notch">Notch</option>
                <option value="allpass">Allpass</option>
        </select>
        <br />

        <label htmlFor="cutoff">Cutoff</label>
        <input type="range" step="1" min="0" max="22000" id="cutoff"
          value={config.cutoff} 
          onChange={this.handleChange.bind(this)} />
        <input type="text" step="1" min="0" max="22000" id="cutoff"
          value={config.cutoff} 
          onChange={this.handleChange.bind(this)} />
          <br />

        <label htmlFor="q">Q</label>
        <input type="range" step="0.1" min="0.0001" max="1000" id="q"
          value={config.q} 
          onChange={this.handleChange.bind(this)} />
        <input type="text" step="0.1" min="0.0001" max="1000" id="q"
          value={config.q} 
          onChange={this.handleChange.bind(this)} />
                  <br />

      </div>
    )
  }
}

export default Filter;