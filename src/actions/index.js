import Instrument from '../engine'

var audioContext = new(window.AudioContext || window.webkitAudioContext);
var master = audioContext.createGain();
master.gain.value = 1;
master.connect(audioContext.destination)

import Sequencer from '../engine/sequencer'
var sequencer = new Sequencer(audioContext, master)

export function playInstrument(id) {
  return (dispatch, getState) => {
  	const state = getState();
  	const config = state.instruments[id-1].config;
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

const updateSequenceAction = (instrumentId, sequenceIndex) => {
	return {
		type: "UPDATE_SEQUENCE", 
		instrumentId,
		sequenceIndex
	}
}

const updateMeasureCountAction = (measureCount) => {
	return {
		type: "UPDATE_MEASURECOUNT",
		measureCount
	}
}