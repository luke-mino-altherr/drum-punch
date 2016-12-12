function sequencer(state = [], action) {
  console.log(action);
  switch (action.type) {
    case "START_SEQUENCER":
      return {
        ...state, 
        enable: 1
      }
    case "STOP_SEQUENCER":
      return  {
        ...state,
        enable: 0
      }
    case "UPDATE_TEMPO":
      return {
        ...state,
        tempo: action.tempo
      }
    case "UPDATE_RESOLUTION": 
      var measureCount = 32*action.resolution;
      return {
        ...state,
        resolution: action.resolution,
        measureCount: measureCount
      }
    case "UPDATE_SEQUENCE":
      const newState = state.sequence[action.instrumentId][action.sequenceIndex] ? 0 : 1;
      const newSequence = [
        ...state.sequence[action.instrumentId].slice(0, action.sequenceIndex),
        newState,
        ...state.sequence[action.instrumentId].slice(action.sequenceIndex + 1)
      ]
      return {
        ...state,
        sequence: [
          ...state.sequence.slice(0, action.instrumentId),
          newSequence,
          ...state.sequence.slice(action.instrumentId + 1)
        ]
      }
    case "UPDATE_MEASURECOUNT":
      return {
        ...state,
        measureCount: action.measureCount
      }
    default: 
      return state;
  }
}

export default sequencer;