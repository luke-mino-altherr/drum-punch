
export const instrument1 = {
	id: 1,
	name: "Tom", 
	config: {
		level: 0.7,
		osc: {
			enable: 1,
			level: 1,
			waveform: 'sine',
			amplitude: {
				attack: 0,
				attackType: 0,
				decay: 3,
				decayType: 1
			},
			frequency: {
				attack: 0,
				attackType: 0,
				decay: 0.08,
				decayType: 1,
				startValue: 349.23,
				endValue: 174.61
			}
		},
		noise: {
			enable: 1,
			level: 0.05,
			amplitude: {
				attack: 0.2,
				attackType: 0,
				decay: 0.6,
				decayType: 0
			},
			filter: {
				type: 'lowpass',
				cutoff: 440,
				q: 1
			}
		}
	}
}

const instrument2 = {
	id: 2,
	name: "Open Hat", 
	config: {
		level: 1,
		osc: {
			enable: 0,
			level: 1,
			amplitude: {
				attack: 0,
				attackType: 0,
				decay: 4,
				decayType: 1
			},
			frequency: {
				attack: 0,
				attackType: 0,
				decay: 0.2,
				decayType: 1,
				startValue: 293.66,
				endValue: 146.83
			}
		},
		noise: {
			enable: 1,
			level: 0.2,
			amplitude: {
				attack: 0,
				attackType: 0,
				decay: 1.5,
				decayType: 1
			},
			filter: {
				type: 'highpass',
				cutoff: 6000,
				q: 1
			}
		}
	}
}

const instrument3 = {
	id: 1,
	name: "Hi Hat", 
	config: {
		level: 1,
		osc: {
			enable: 0,
			level: 1,
			amplitude: {
				attack: 0.2,
				attackType: 0,
				decay: 5,
				decayType: 1
			},
			frequency: {
				attack: 0,
				attackType: 0,
				decay: 3,
				decayType: 1,
				startValue: 440,
				endValue: 440
			}
		},
		noise: {
			enable: 1,
			level: 1,
			amplitude: {
				attack: 0,
				attackType: 0,
				decay: 0.3,
				decayType: 1
			},
			filter: {
				type: 'bandpass',
				cutoff: 8000,
				q: 1.4
			}
		}
	}
}

const instrument4 = {
	id: 1,
	name: "Kick Drum", 
	config: {
		level: 1,
		osc: {
			enable: 1,
			level: 1,
			amplitude: {
				attack: 0,
				attackType: 0,
				decay: 5,
				decayType: 1
			},
			frequency: {
				attack: 0,
				attackType: 0,
				decay: 0.05,
				decayType: 1,
				startValue: 440,
				endValue: 60
			}
		},
		noise: {
			enable: 0,
			level: 1,
			amplitude: {
				attack: 0.2,
				attackType: 0,
				decay: 5,
				decayType: 1
			},
			filter: {
				type: 'highpass',
				cutoff: 440,
				q: 1
			}
		}
	}
}

const instrument5 = {
	id: 1,
	name: "Snare", 
	config: {
		level: 1,
		osc: {
			enable: 1,
			level: 1,
			amplitude: {
				attack: 0,
				attackType: 0,
				decay: 0.5,
				decayType: 1
			},
			frequency: {
				attack: 0,
				attackType: 0,
				decay: 0.2,
				decayType: 1,
				startValue: 220,
				endValue: 220
			}
		},
		noise: {
			enable: 1,
			level: 1,
			amplitude: {
				attack: 0,
				attackType: 0,
				decay: 0.5,
				decayType: 1
			},
			filter: {
				type: 'bandpass',
				cutoff: 2500,
				q: 0.5
			}
		}
	}
}
const instrument6 = {
	id: 1,
	name: "Snare2", 
	config: {
		level: 1,
		osc: {
			enable: 1,
			level: 0.3,
			amplitude: {
				attack: 0,
				attackType: 0,
				decay: 0.5,
				decayType: 1
			},
			frequency: {
				attack: 0,
				attackType: 0,
				decay: 0.5,
				decayType: 1,
				startValue: 330,
				endValue: 330
			}
		},
		noise: {
			enable: 1,
			level: 1,
			amplitude: {
				attack: 0,
				attackType: 0,
				decay: 0.5,
				decayType: 1
			},
			filter: {
				type: 'bandpass',
				cutoff: 4000,
				q: 0.4
			}
		}
	}
}

const instruments = [instrument1, instrument2, instrument3, instrument4, instrument5, instrument6]
export default instruments
