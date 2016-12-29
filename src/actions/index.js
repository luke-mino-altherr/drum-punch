import Instrument from '../engine'

var audioContext = new(window.AudioContext || window.webkitAudioContext);
var master = audioContext.createGain();
master.gain.value = 1;
master.connect(audioContext.destination)

import Sequencer from '../engine/sequencer'
var sequencer = new Sequencer(audioContext, master)

export const startSequencerAction = () => {
	return {
		type: "START_SEQUENCER"
	}
}

export const stopSequencerAction = () => {
	return {
		type: "STOP_SEQUENCER"
	}
}

export const updateTempoAction = (tempo) => {
	return {
		type: "UPDATE_TEMPO",
		tempo
	}
}

export const updateResolutionAction = (resolution) => {
	return {
		type: "UPDATE_RESOLUTION",
		resolution
	}
}

export const updateSequenceAction = (instrumentId, sequenceIndex) => {
	return {
		type: "UPDATE_SEQUENCE", 
		instrumentId,
		sequenceIndex
	}
}

export const updateMeasureCountAction = (measureCount) => {
	return {
		type: "UPDATE_MEASURECOUNT",
		measureCount
	}
}

// Synth Actions

export const updateLevel = (instrumentId, level) => {
	return {
		type: "UPDATE_LEVEL",
		instrumentId,
		level
	}
}

// Oscillator actions

export const toggleOsc = (instrumentId) => {
	return {
		type: "TOGGLE_OSC",
		instrumentId
	}
}

export const updateOscLevel = (instrumentId, level) => {
	return {
		type: "UPDATE_OSC_LEVEL",
		instrumentId,
		level
	}
}

export const updateOscWaveform = (instrumentId, param) => {
	return {
		type: "UPDATE_OSC_WAVEFORM",
		instrumentId,
		param
	}
}

export const updateOscAmplitudeAttack = (instrumentId, param) => {
	return {
		type: "UPDATE_OSC_AMPLITUDE_ATTACK",
		instrumentId,
		param
	}
}

export const updateOscAmplitudeAttackType = (instrumentId, param) => {
	return {
		type: "UPDATE_OSC_AMPLITUDE_ATTACK_TYPE",
		instrumentId,
		param
	}
}

export const updateOscAmplitudeDecay = (instrumentId, param) => {
	return {
		type: "UPDATE_OSC_AMPLITUDE_DECAY",
		instrumentId,
		param
	}
}

export const updateOscAmplitudeDecayType = (instrumentId, param) => {
	return {
		type: "UPDATE_OSC_AMPLITUDE_DECAY_TYPE",
		instrumentId,
		param
	}
}

export const updateOscFrequencyAttack = (instrumentId, param) => {
	return {
		type: "UPDATE_OSC_FREQUENCY_ATTACK",
		instrumentId,
		param
	}
}

export const updateOscFrequencyAttackType = (instrumentId, param) => {
	return {
		type: "UPDATE_OSC_FREQUENCY_ATTACK_TYPE",
		instrumentId,
		param
	}
}

export const updateOscFrequencyDecay = (instrumentId, param) => {
	return {
		type: "UPDATE_OSC_FREQUENCY_DECAY",
		instrumentId,
		param
	}
}

export const updateOscFrequencyDecayType = (instrumentId, param) => {
	return {
		type: "UPDATE_OSC_FREQUENCY_DECAY_TYPE",
		instrumentId,
		param
	}
}

export const updateOscFrequencyStartValue = (instrumentId, param) => {
	return {
		type: "UPDATE_OSC_FREQUENCY_START_VALUE", 
		instrumentId,
		param
	}
}

export const updateOscFrequencyEndValue = (instrumentId, param) => {
	return {
		type: "UPDATE_OSC_FREQUENCY_END_VALUE", 
		instrumentId,
		param
	}
}

// Noise Actions

export const toggleNoise = (instrumentId) => {
	return {
		type: "TOGGLE_NOISE",
		instrumentId
	}
}

export const updateNoiseLevel = (instrumentId, level) => {
	return {
		type: "UPDATE_NOISE_LEVEL",
		instrumentId,
		level
	}
}

export const updateNoiseAmplitudeAttack = (instrumentId, param) => {
	return {
		type: "UPDATE_NOISE_AMPLITUDE_ATTACK",
		instrumentId,
		param
	}
}

export const updateNoiseAmplitudeAttackType = (instrumentId, param) => {
	return {
		type: "UPDATE_NOISE_AMPLITUDE_ATTACK_TYPE",
		instrumentId,
		param
	}
}

export const updateNoiseAmplitudeDecay = (instrumentId, param) => {
	return {
		type: "UPDATE_NOISE_AMPLITUDE_DECAY",
		instrumentId,
		param
	}
}

export const updateNoiseAmplitudeDecayType = (instrumentId, param) => {
	return {
		type: "UPDATE_NOISE_AMPLITUDE_DECAY_TYPE",
		instrumentId,
		param
	}
}

export const updateNoiseFilterType = (instrumentId, param) => {
	return {
		type: "UPDATE_NOISE_FILTER_TYPE",
		instrumentId,
		param
	}
}

export const updateNoiseFilterCutoff = (instrumentId, param) => {
	return {
		type: "UPDATE_NOISE_FILTER_CUTOFF",
		instrumentId,
		param
	}
}

export const updateNoiseFilterQ = (instrumentId, param) => {
	return {
		type: "UPDATE_NOISE_FILTER_Q",
		instrumentId,
		param
	}
}

// Actions that pass through thunk middleware 

export function playInstrument(id) {
	console.log("PLay instrument", id)
  return (dispatch, getState) => {
  	const state = getState();
  	const config = state.instruments[id].config;
  	console.log("Play", state, config)
  	const instr = new Instrument(audioContext, master, config);
  	instr.trigger()
  }
}

export const updateResolution = (resolution) => {
	return (dispatch, getState) => {
		dispatch(updateResolutionAction(resolution));
		updateSequencer(dispatch, getState);
	}
}

export const updateSequence = (instrumentId, sequenceIndex) => {
	return (dispatch, getState) => {
		dispatch(updateSequenceAction(instrumentId, sequenceIndex));
		updateSequencer(dispatch, getState);
	}
}

export const updateMeasureCount = () => {
	return (dispatch, getState) => {
		dispatch(updateMeasureCountAction);
		updateSequencer(dispatch, getState);
	}
}

export const updateTempo = (tempo) => {
	return (dispatch, getState) => {
		dispatch(updateTempoAction(tempo));
		updateSequencer(dispatch, getState);
	}
}

export const startSequencer = () => {
	return (dispatch, getState) => {
		if (getState().sequencer.enable)
			return
		dispatch(startSequencerAction());
		updateSequencer(dispatch, getState);
	}
}

export const stopSequencer = () => {
	return (dispatch, getState) => {
		if (!getState().sequencer.enable)
			return
		dispatch(stopSequencerAction());
		updateSequencer(dispatch, getState);
	}
}


const updateSequencer = (dispatch, getState) => {
	const state = getState();
	const instrConfig = state.instruments;
	const sequencerConfig = state.sequencer;
		
	sequencer.updateInstruments(instrConfig);
	sequencer.updateConfig(sequencerConfig);
}

