import Instrument from '../engine'

var audioContext = new(window.AudioContext || window.webkitAudioContext);
var master = audioContext.createGain();
master.gain.value = 1;
master.connect(audioContext.destination)

import Sequencer from '../engine/sequencer'
var sequencer = new Sequencer()

export function playInstrument(id) {
  return (dispatch, getState) => {
  	const state = getState();
  	const config = state.instruments[id-1].config;
  	console.log("Play", state, config)
  	const instr = new Instrument(audioContext, master, config);
  	instr.trigger()
  }
}

export const updateResolution = () => {
	return (dispatch, getState) => {
		dispatch(updateResolutionAction);
		updateSequencer(dispatch, getState);
	}
}

export const updateSequence = () => {
	return (dispatch, getState) => {
		dispatch(updateSequenceAction);
		updateSequencer(dispatch, getState);
	}
}

export const updateMeasureCount = () => {
	return (dispatch, getState) => {
		dispatch(updateMeasureCountAction);
		updateSequencer(dispatch, getState);
	}
}

export const updateTempo = () => {
	return (dispatch, getState) => {
		dispatch(updateTempoAction);
		updateSequencer(dispatch, getState);
	}
}

export const startSequencer = () => {
	return (dispatch, getState) => {
		dispatch(startSequencerAction());
		updateSequencer(dispatch, getState);
	}
}

export const stopSequencer = () => {
	return (dispatch, getState) => {
		dispatch(stopSequencerAction());
		updateSequencer(dispatch, getState);
	}
}

const updateSequencer = (dispatch, getState) => {
	const state = getState();
	const instrConfig = state.instruments;
	const sequencerConfig = state.sequencer;
		
	sequencer.updateInstruments(audioContext, master, instrConfig);
	sequencer.updateConfig(sequencerConfig);
}

const startSequencerAction = () => {
	return {
		type: "START_SEQUENCER"
	}
}

const stopSequencerAction = () => {
	return {
		type: "STOP_SEQUENCER"
	}
}

const updateTempoAction = (tempo) => {
	return {
		type: "UPDATE_TEMPO",
		tempo
	}
}

const updateResolutionAction = (resolution) => {
	return {
		type: "UPDATE_RESOLUTION",
		resolution
	}
}

const updateSequenceAction = (sequence) => {
	return {
		type: "UPDATE_SEQUENCE", 
		sequence
	}
}

const updateMeasureCountAction = (measureCount) => {
	return {
		type: "UPDATE_MEASURECOUNT",
		measureCount
	}
}