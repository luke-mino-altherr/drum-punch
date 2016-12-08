import Instrument from '../engine'
import instruments from '../model/temp'
import Sequencer from '../engine/sequencer'
import sequencer from '../model/temp_sequencer'

var audioContext = new(window.AudioContext || window.webkitAudioContext);

var master = audioContext.createGain();
master.gain.value = 1;
master.connect(audioContext.destination)

export const playInstrument = (id, time = 0) => {
	console.log("Playing instrument %d", id)
	var config = getConfig(id);
	var instr = new Instrument(audioContext, master, config);
	instr.trigger(time);
}

const getConfig = (id) => {
	console.log(instruments)
	return instruments[id-1].config;
}

var s = new Sequencer(sequencer);
export const startSequencer = () => {
	s.startSequence();
}

export const stopSequencer = () => {
	s.stopSequence();
}