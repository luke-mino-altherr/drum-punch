import { playInstrument } from '../actions'
import Instrument from '.'

var p = 0;

class Sequencer {
	constructor(audioContext, master) {
		this.audioContext = audioContext;
		this.master = master;
	}

	updateConfig(config) {
		this.tempo = config.tempo;
		this.resolution = config.resolution;
		this.measureCount = config.measureCount;
		this.sequence = config.sequence;
		// this.stopSequence();
		if (config.enable != this.enable) {
			if (config.enable) {
				this.startSequence();
			} else {
				this.stopSequence();
			}
		}
	}
	updateInstruments(config) {
		this.instruments = config;
	}

	// User facing functions
	startSequence() {
		if (!this.enable) {
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
		console.log(this);
		for (var i = 0; i < this.sequence.length; i++) {
			if (this.sequence[i][p] == 1) {
				const instr = new Instrument(
					this.audioContext, this.master, this.instruments[i].config);
				if (this.enable)
					instr.trigger();
			}
		}
		p += 1;
		p %= this.getMaxPosition();
		console.log(p);
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


