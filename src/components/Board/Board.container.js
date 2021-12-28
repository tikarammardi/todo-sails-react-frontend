import React, { useEffect } from 'react';
import BoardComponent from './Board.component';
import { connect, useDispatch } from 'react-redux';
import { ADD_TODO, GET_BOARDS } from '../../actions/types';
import { getTodos, getBoards } from '../../actions';
function BoardContainer(props) {
	console.log('getting board ', props);
	useEffect(() => {
		props.getBoards();
	}, []);

	// const panes = [
	// 	{ menuItem: 'Tab 1', pane: 'Tab 1 Content' },
	// 	{ menuItem: 'Tab 2', pane: 'Tab 2 Content' },
	// 	{ menuItem: 'Tab 3', pane: 'Tab 3 Content' }
	// ];

	const panes = props.boards.map((board) => {
		return {
			menuItem: board.title
		};
	});

	return <BoardComponent panes={panes} />;
}

const mapStateToProps = (state) => {
	console.log('state inside board is', state);
	return {
		todos: state.todos.todos,
		boards: state.boards.boards
	};
};

export default connect(mapStateToProps, { getTodos, getBoards })(BoardContainer);
