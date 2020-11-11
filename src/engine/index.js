class Envelope {
	constructor(a, aType, d, dType, startValue = 1, endValue = 0) {
		this.a = a;
		this.aType = aType;
		this.d = d;
		this.dType = dType;
		this.startValue = startValue;
		this.endValue = endValue;
	}
	applyToParam(param, currentTime, startValue = undefined) {
		if (startValue)
			this.startValue = startValue;

		param.cancelScheduledValues(0);
		param.setValueAtTime(this.endValue, currentTime);
		this.aType ? param.exponentialRampToValueAtTime(this.startValue, currentTime+this.a):
			param.linearRampToValueAtTime(this.startValue, currentTime+this.a);
		this.dType ? param.exponentialRampToValueAtTime(this.endValue+.000000001, currentTime+this.a+this.d):
			param.linearRampToValueAtTime(this.endValue, currentTime+this.a+this.d);

	}
};

class Instrument {
	constructor(context, masterFader, config) {
		this.audioContext = context;
		this.master = masterFader;

		config.osc.masterLevel = config.level;
		config.noise.masterLevel = config.level;

		// Create signals
		this.osc = new Oscillator(this.audioContext, this.master, config.osc);
		this.noise = new Noise(this.audioContext, this.master, config.noise);
	};
	trigger(time = 0) {
		this.osc.trigger(time);
		this.noise.trigger(time);
	};
}

class Signal {
	constructor(context, masterGain, config) {
		this.audioContext = context;
		this.master = masterGain;
		this.enable = config.enable;
		this.level = config.level;
		this.masterLevel = config.masterLevel;
		this.waveform = config.waveform || 'sine';
		this.ampEnv = new Envelope(
			config.amplitude.attack,
			config.amplitude.attackType,
			config.amplitude.decay, 
			config.amplitude.decayType
		);
	}
	trigger(time = 0) {
		var now = this.audioContext.currentTime + time;

		if (this.enable) {
			var level = this.level * this.masterLevel;

			var vca = this.createVca();
			var vco = this.createVco();

			vco.connect(vca);
			vca.connect(this.master);

			vco.start(now)
			vco.stop(now+this.ampEnv.a+this.ampEnv.d);
			
			this.ampEnv.applyToParam(vca.gain, now, level);
		}

		return vco
	}
	createVco() {
		var osc = this.audioContext.createOscillator()
		osc.type = this.waveform;
		return osc;
	}
	createVca() {
		var vca = this.audioContext.createGain();
		vca.gain.value = 0;
		return vca;
	}
}


class Oscillator extends Signal {
	constructor(context, masterFader, config) {
		super(context, masterFader, config);

		this.freqEnv = new Envelope(0, 0, 
			config.frequency.decay, 
			config.frequency.decayType,
			config.frequency.startValue,
			config.frequency.endValue
		);
	}
	trigger(time = 0) {
		var now = time + this.audioContext.currentTime;
		var vco = super.trigger(time)

		if (this.enable) {
			this.freqEnv.applyToParam(vco.frequency, now);
		}
	}
};

class Noise extends Signal {
	constructor(context, masterFader, config) {
		super(context, masterFader, config);
		this.filterConfig = config.filter;
	}
	trigger(time = 0) {
		var now = this.audioContext.currentTime + time;

		if (this.enable) {
			var level = this.level * this.masterLevel;

			var vca = this.createVca();
			var vco = this.createVco();
			var filter = this.createFilter();

			vco.connect(filter);
			filter.connect(vca);
			vca.connect(this.master);

			vco.start(now)
			vco.stop(now+this.ampEnv.a+this.ampEnv.d);

			
			
			this.ampEnv.applyToParam(vca.gain, now, level)
		}

		return vco
	}	
	createVco() {
		var sourceNode = this.audioContext.createBufferSource();
		var sampleRate = this.audioContext.sampleRate;
		var bufferSize = sampleRate * 3;
		var buffer = this.audioContext.createBuffer(1, bufferSize, sampleRate);
		var output = buffer.getChannelData(0);
		sourceNode.buffer = buffer;

		for (var i = 0; i < bufferSize; i++) {
			output[i] = Math.random() * 2 - 1;
		}

		return sourceNode;
	}
	createFilter() {
		var filter = this.audioContext.createBiquadFilter();
		filter.type = this.filterConfig.type
		filter.frequency.value = this.filterConfig.cutoff;
		filter.Q.value = this.filterConfig.q;
		return filter;
	}
}

module.exports = Instrument;
