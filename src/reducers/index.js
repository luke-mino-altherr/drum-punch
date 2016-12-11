import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import instruments from './instruments';
import sequencer from './sequencer';

const rootReducer = combineReducers({
	instruments, 
	sequencer,
	routing: routerReducer
})

export default rootReducer;