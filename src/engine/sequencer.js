import { playInstrument } from '../actions'

class Sequencer {
	constructor(config) {
		this.enable = config.enable;
		this.tempo = config.tempo;
		this.resolution = config.resolution;
		this.measureCount = config.measureCount;
		this.sequence = config.sequence;
		this.position = 0;
		this.stopSequence();
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
				playInstrument(i+1);
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


