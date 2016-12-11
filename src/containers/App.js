import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions'
import Main from '../components/Main';

function mapStateToProps(state) {
	return {
		instruments: state.instruments,
		sequencer: state.sequencer
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;