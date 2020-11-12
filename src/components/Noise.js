import React from 'react';
import style from '../styles/Noise.css'
import SignalControl from './SignalControl'
import Envelope from './Envelope'
import Filter from './Filter'

class Noise extends React.Component {
  render() {
    var active = parseInt(this.props.params.index);
    return (
      <div className="noise synthContainer pb-4">
        <h2 className="pb-4"> NOISE </h2>
        <SignalControl {...this.props} />
        <Envelope oscillator={0} amplitude={1} {...this.props} />
        <Filter {...this.props} />
      </div>
    )
  }
}

export default Noise;