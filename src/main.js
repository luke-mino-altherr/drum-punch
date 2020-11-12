import React from 'react';
import { render } from 'react-dom';

// import components
import App from './containers/App';
import Pads from './components/Pads';
import Sequencer from './components/Sequencer';
import Synth from './components/Synth'

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/drum-punch" component={App}>
        <IndexRoute component={Pads}></IndexRoute>
        <Route path="/drum-punch/sequencer" component={Sequencer}>
        	<IndexRoute component={Sequencer}></IndexRoute></Route>
        <Route path="/drum-punch/edit/:index" component={Synth}>
        	<IndexRoute component={Synth}></IndexRoute></Route>

      </Route>
    </Router>
  </Provider>
)



render(router, document.getElementById('mount'));