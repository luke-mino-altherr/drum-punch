

function instruments(state = [], action) {
  console.log("instruments", state, action);
	switch (action.type) {
    case "UPDATE_LEVEL":
    case "TOGGLE_OSC":
    case "UPDATE_OSC_LEVEL":
    case "UPDATE_OSC_WAVEFORM":
    case "UPDATE_OSC_AMPLITUDE_ATTACK":
    case "UPDATE_OSC_AMPLITUDE_ATTACK_TYPE":
    case "UPDATE_OSC_AMPLITUDE_DECAY":
    case "UPDATE_OSC_AMPLITUDE_DECAY_TYPE":
    case "UPDATE_OSC_FREQUENCY_ATTACK_TYPE":
    case "UPDATE_OSC_FREQUENCY_DECAY":
    case "UPDATE_OSC_FREQUENCY_DECAY_TYPE":
    case "UPDATE_OSC_FREQUENCY_START_VALUE":
    case "UPDATE_OSC_FREQUENCY_END_VALUE":
    case "TOGGLE_NOISE":
    case "UPDATE_NOISE_LEVEL":
    case "UPDATE_NOISE_AMPLITUDE_ATTACK":
    case "UPDATE_NOISE_AMPLITUDE_ATTACK_TYPE":
    case "UPDATE_NOISE_AMPLITUDE_DECAY":
    case "UPDATE_NOISE_AMPLITUDE_DECAY_TYPE":
    case "UPDATE_NOISE_FILTER_TYPE":
    case "UPDATE_NOISE_FILTER_CUTOFF":
    case "UPDATE_NOISE_FILTER_Q": 
      const id = parseInt(action.instrumentId)
      const nextId = parseInt(action.instrumentId) + 1;
      return [
        ...state.slice(0, id),
        instrument(state[id], action),
        ...state.slice(nextId)
      ]
    default:
      return state;
	}
}

function instrument(state = {}, action) {
  console.log("instrument", state, action);
  switch (action.type) {
    case "UPDATE_LEVEL":
    case "TOGGLE_OSC": 
    case "UPDATE_OSC_LEVEL":
    case "UPDATE_OSC_WAVEFORM":
    case "UPDATE_OSC_AMPLITUDE_ATTACK":
    case "UPDATE_OSC_AMPLITUDE_ATTACK_TYPE":
    case "UPDATE_OSC_AMPLITUDE_DECAY":
    case "UPDATE_OSC_AMPLITUDE_DECAY_TYPE":
    case "UPDATE_OSC_FREQUENCY_ATTACK_TYPE":
    case "UPDATE_OSC_FREQUENCY_DECAY":
    case "UPDATE_OSC_FREQUENCY_DECAY_TYPE":
    case "UPDATE_OSC_FREQUENCY_START_VALUE":
    case "UPDATE_OSC_FREQUENCY_END_VALUE":
    case "TOGGLE_NOISE":
    case "UPDATE_NOISE_LEVEL":
    case "UPDATE_NOISE_AMPLITUDE_ATTACK":
    case "UPDATE_NOISE_AMPLITUDE_ATTACK_TYPE":
    case "UPDATE_NOISE_AMPLITUDE_DECAY":
    case "UPDATE_NOISE_AMPLITUDE_DECAY_TYPE":
    case "UPDATE_NOISE_FILTER_TYPE":
    case "UPDATE_NOISE_FILTER_CUTOFF":
    case "UPDATE_NOISE_FILTER_Q":
    console.log("instrument", state);
      return {
        ...state, 
        config: configuration(state.config, action)
      }
    default:
      return state;
  }
}

function configuration(state = {}, action) {
  console.log("config", state, action);
  switch (action.type) {
    case "UPDATE_LEVEL":
      return {
        ...state,
        level: action.level
      }
    case "TOGGLE_OSC":
    case "UPDATE_OSC_LEVEL":
    case "UPDATE_OSC_WAVEFORM":
    case "UPDATE_OSC_AMPLITUDE_ATTACK":
    case "UPDATE_OSC_AMPLITUDE_ATTACK_TYPE":
    case "UPDATE_OSC_AMPLITUDE_DECAY":
    case "UPDATE_OSC_AMPLITUDE_DECAY_TYPE":
    case "UPDATE_OSC_FREQUENCY_ATTACK_TYPE":
    case "UPDATE_OSC_FREQUENCY_DECAY":
    case "UPDATE_OSC_FREQUENCY_DECAY_TYPE":
    case "UPDATE_OSC_FREQUENCY_START_VALUE":
    case "UPDATE_OSC_FREQUENCY_END_VALUE":
      return {
        ...state, 
        osc: signal(state.osc, action)
      }
    case "TOGGLE_NOISE":
    case "UPDATE_NOISE_LEVEL":
    case "UPDATE_NOISE_AMPLITUDE_ATTACK":
    case "UPDATE_NOISE_AMPLITUDE_ATTACK_TYPE":
    case "UPDATE_NOISE_AMPLITUDE_DECAY":
    case "UPDATE_NOISE_AMPLITUDE_DECAY_TYPE":
    case "UPDATE_NOISE_FILTER_TYPE":
    case "UPDATE_NOISE_FILTER_CUTOFF":
    case "UPDATE_NOISE_FILTER_Q":
      return {
        ...state,
        noise: signal(state.noise, action)
      }
    default:
      return state;
  }
}

function signal(state = {}, action) {
  console.log("signal", state, action);

  switch (action.type) {
    case "TOGGLE_OSC":
    case "TOGGLE_NOISE":
    var value = null;
      if (state.enable == 1)
        value = 0
      else
        value = 1
      return {
        ...state,
        enable: value
      }
    case "UPDATE_OSC_LEVEL":
    case "UPDATE_NOISE_LEVEL":
      return {
        ...state,
        level: action.level
      }
    case "UPDATE_OSC_WAVEFORM":
      return {
        ...state,
        waveform: action.param
      }
    case "UPDATE_OSC_AMPLITUDE_ATTACK":
    case "UPDATE_OSC_AMPLITUDE_ATTACK_TYPE":
    case "UPDATE_OSC_AMPLITUDE_DECAY":
    case "UPDATE_OSC_AMPLITUDE_DECAY_TYPE":
    case "UPDATE_NOISE_AMPLITUDE_ATTACK":
    case "UPDATE_NOISE_AMPLITUDE_ATTACK_TYPE":
    case "UPDATE_NOISE_AMPLITUDE_DECAY":
    case "UPDATE_NOISE_AMPLITUDE_DECAY_TYPE":
      return {
        ...state, 
        amplitude: envelope(state.amplitude, action)
      }
    case "UPDATE_OSC_FREQUENCY_ATTACK_TYPE":
    case "UPDATE_OSC_FREQUENCY_DECAY":
    case "UPDATE_OSC_FREQUENCY_DECAY_TYPE":
    case "UPDATE_OSC_FREQUENCY_START_VALUE":
    case "UPDATE_OSC_FREQUENCY_END_VALUE":
      return {
        ...state, 
        frequency: envelope(state.frequency, action)
      }
    case "UPDATE_NOISE_FILTER_TYPE":
    case "UPDATE_NOISE_FILTER_CUTOFF":
    case "UPDATE_NOISE_FILTER_Q":
      return {
        ...state,
        filter: filter(state.filter, action)
      }
    default: 
      return state;
  }
}

function envelope(state = {}, action) {
  const param = parseFloat(action.param)
  console.log("param", param, state, action)
  switch(action.type) {
    case "UPDATE_OSC_AMPLITUDE_ATTACK":
    case "UPDATE_OSC_FREQUENCY_ATTACK":
    case "UPDATE_NOISE_AMPLITUDE_ATTACK":
      return {
        ...state, 
        attack: param
      }
    case "UPDATE_OSC_AMPLITUDE_ATTACK_TYPE":
    case "UPDATE_OSC_FREQUENCY_ATTACK_TYPE":
    case "UPDATE_NOISE_AMPLITUDE_ATTACK_TYPE":
      return {
        ...state,
        attackType: param
      }
    case "UPDATE_OSC_AMPLITUDE_DECAY":
    case "UPDATE_OSC_FREQUENCY_DECAY":
    case "UPDATE_NOISE_AMPLITUDE_DECAY":
      return {
        ...state,
        decay: param
      }
    case "UPDATE_OSC_AMPLITUDE_DECAY_TYPE":
    case "UPDATE_OSC_FREQUENCY_DECAY_TYPE":
    case "UPDATE_NOISE_AMPLITUDE_DECAY_TYPE":
      return {
        ...state,
        decayType: param
      }
    case "UPDATE_OSC_FREQUENCY_START_VALUE":
      return {
        ...state,
        startValue: param
      }
    case "UPDATE_OSC_FREQUENCY_END_VALUE":
      return {
        ...state,
        endValue: param
      }
    default:
      return state;
  }
}

function filter(state = {}, action) {
  switch(action.type) {
    case "UPDATE_NOISE_FILTER_TYPE": 
      return {
        ...state,
        type: action.param
      }
    case "UPDATE_NOISE_FILTER_CUTOFF":
      return {
        ...state,
        cutoff: action.param
      }
    case "UPDATE_NOISE_FILTER_Q":
      return {
        ...state,
        q: action.param
      }
    default: 
      return state;
  }
}

export default instruments;