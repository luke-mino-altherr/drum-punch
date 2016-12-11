import { playInstrument } from '../actions'
import Instrument from '.'
class Sequencer {
	constructor() {
	}

	updateConfig(config) {
		this.tempo = config.tempo;
		this.resolution = config.resolution;
		this.measureCount = config.measureCount;
		this.sequence = config.sequence;
		this.position = 0;
		// this.stopSequence();
		if (config.enable) {
			this.startSequence();
		} else {
			this.stopSequence();
		}
	}
	updateInstruments(audioContext, master, config) {
		this.audioContext = audioContext;
		this.master = master;
		this.instruments = config;
	}

	// User facing functions
	startSequence() {
		if (!this.enable) {
			console.log("Sequencing")
			this.enable = true;
			this.play()
		}
	}
	stopSequence() {
		this.enable = false;
	}
	updateTempo(t) {
		this.tempo = t;
	}
	updateSequence(s) {
		this.sequence = s;
	}
	updateResolution(r) {
		this.resolution = r;
	}

	// Private functions
	play() {
		for (var i = 0; i < this.sequence.length; i++) {
			if (this.sequence[i][this.position] == 1) {
				const instr = new Instrument(
					this.audioContext, this.master, this.instruments[i].config);
				instr.trigger();
			}
		}
		this.position += 1;
		this.position %= this.getMaxPosition();
		if (this.enable) {
			setTimeout(this.play.bind(this), this.getIntervalDelay() * 1000);
		}
	}
	getMaxPosition() {
		return this.measureCount / this.resolution;
	}
	getIntervalDelay()  {
		return 1/((this.tempo/60)/this.resolution);
	}

}

export default Sequencer;


