import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/index';

import instruments from './model/instruments';
import sequencer from './model/sequencer';

// create an object for the default data
const defaultState = {
	instruments,
	sequencer
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;