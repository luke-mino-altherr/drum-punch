import Instrument from '../engine'
import instruments from '../model/temp'

var audioContext = new(window.AudioContext || window.webkitAudioContext);

var master = audioContext.createGain();
master.gain.value = 1;
master.connect(audioContext.destination)

export const playInstrument = (id) => {
	console.log("Playing instrument %d", id)
	var config = getConfig(id);
	var instr = new Instrument(audioContext, master, config);
	instr.trigger();
}

const getConfig = (id) => {
	console.log(instruments)
	return instruments[id-1].config;
}