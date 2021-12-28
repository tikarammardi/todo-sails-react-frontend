import { GET_TODOS, DELETE_TODO, UPDATE_TODO, GET_TODO, ADD_TODO } from '../actions/types';
const initialState = {
	todos: []
};
export default function(state = initialState, action) {
	console.log('actions is', action);
	switch (action.type) {
		case GET_TODOS:
			return {
				...state,
				todos: action.payload.data
			};
		case ADD_TODO:
			const newTask = {
				id: 2,
				boardId: 3,
				title: action.payload,
				completed: false
			};
			return {
				...state,
				todos: [ ...state.todos, newTask ]
			};

		default:
			return state;
	}
}
