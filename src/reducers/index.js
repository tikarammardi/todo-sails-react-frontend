import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import boardReducer from './boardReducer';

export default combineReducers({
	todos: todoReducer,
	boards: boardReducer
});
