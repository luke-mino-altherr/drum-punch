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
      return {
        ...state,
        resolution: action.resolution
      }
    case "UPDATE_SEQUENCE":
      return {
        ...state, 
        sequence: action.sequence
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