import React from 'react';
import style from './TransportBar.css'

class TransportBar extends React.Component {
  handleChangeEvent(event) {
    console.log("slider change")
    switch(event.target.id) {
      case "tempo":
        this.props.updateTempo(event.target.value)
        break;
      case "resolution":
        this.props.updateResolution(event.target.value)
      }
  }
  render() {
    return (
      <div className="transport">
        <div className="component">
          <div className="play" onClick={this.props.startSequencer}></div>
        </div>
        <div className="component">
          <div className="pause" onClick={this.props.stopSequencer}></div>
        </div>
        <div className="component"> Tempo: <input
          className="input-box"
              id="tempo" 
              type="number" 
              min="30" max="280" step="1" 
              defaultValue={this.props.sequencer.tempo} 
              onChange={this.handleChangeEvent.bind(this)} />
        </div>
        <div className="component">Resolution: 
          <select 
            className="input-box"
            id="resolution" 
            defaultValue={this.props.sequencer.resolution} 
            onChange={this.handleChangeEvent.bind(this)} >
              <option value="1">1/4</option>
              <option value="0.5">1/8</option>
              <option value="0.25">1/16</option>
              <option value="0.125">1/32</option>
            </select>
        </div>
      </div>
    )
  }
}

export default TransportBar;