
export const instrument1 = {
	id: 1,
	name: "Instrument 1", 
	config: {
		level: 1,
		osc: {
			enable: 1,
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
				decay: 1,
				decayType: 1,
				startValue: 440,
				endValue: 44
			}
		},
		noise: {
			enable: 1,
			level: 1,
			amplitude: {
				attack: 0.2,
				attackType: 0,
				decay: 2,
				decayType: 1
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
	name: "Instrument 2", 
	config: {
		level: 1,
		osc: {
			enable: 1,
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

const instrument3 = {
	id: 1,
	name: "Instrument 1", 
	config: {
		level: 1,
		osc: {
			enable: 1,
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

const instrument4 = {
	id: 1,
	name: "Instrument 1", 
	config: {
		level: 2,
		osc: {
			enable: 1,
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
				decay: 0.2,
				decayType: 1,
				startValue: 440,
				endValue: 44
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
	name: "Instrument 1", 
	config: {
		level: 0.1,
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
				endValue: 440
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
				type: 'highpass',
				cutoff: 700,
				q: 1
			}
		}
	}
}
const instrument6 = {
	id: 1,
	name: "Instrument 1", 
	config: {
		level: 1,
		osc: {
			enable: 1,
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

const instruments = [instrument1, instrument2, instrument3, instrument4, instrument5, instrument6]
export default instruments
