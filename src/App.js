import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
// import HeaderContainer from './components/Header/Header.container';
import BoardContainer from './components/Board/Board.container';

function App() {
	return (
		<div>
			{/* <HeaderContainer title="TODO APP" /> */}
			<BoardContainer />
		</div>
	);
}

export default connect(null, actions)(App);
