import { GET_BOARDS, ADD_BOARD, UPDATE_BOARD, DELETE_BOARD } from '../actions/types';
const initialState = {
	boards: []
};
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_BOARDS:
			return {
				...state,
				boards: action.payload.data
			};
		case ADD_BOARD:
			return {
				...state,
				boards: [ ...state.boards, action.payload ]
			};

		default:
			return state;
	}
}
