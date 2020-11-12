import React from 'react';
import style from '../styles/Oscillator.css'
import SignalControl from './SignalControl'
import Envelope from './Envelope'

class Oscillator extends React.Component {
  render() {
    return (
      <div className="oscillator synthContainer mb-4">
        <h2 className="pb-4"> OSCILLATOR </h2>
        <SignalControl oscillator={1} {...this.props} /> 
        <Envelope oscillator={1} amplitude={1} {...this.props} />
        <Envelope oscillator={1} amplitude={0} {...this.props} />
      </div>
    )
  }
}

export default Oscillator;
