import React from 'react';
import style from './Noise.css'
import SignalControl from './SignalControl'
import Envelope from './Envelope'
import Filter from './Filter'

class Noise extends React.Component {
  render() {
    var active = parseInt(this.props.params.index);
    return (
      <div className="noise">
        <h2> NOISE </h2>
        <SignalControl {...this.props} />
        <Envelope oscillator={0} amplitude={1} {...this.props} />
        <Filter {...this.props} />
      </div>
    )
  }
}

export default Noise;