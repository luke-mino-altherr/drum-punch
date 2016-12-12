import React from 'react';
import { render } from 'react-dom';

// import components
import App from './containers/App';
import Pads from './components/Pads';
import Sequencer from './components/Sequencer'

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Pads}></IndexRoute>
        <Route path="/sequencer" component={Sequencer}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('mount'));