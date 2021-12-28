import axios from 'axios';
import { GET_TODOS, ADD_TODO, DELETE_TODO, GET_BOARDS } from './types';

export const getTodos = () => async (dispatch) => {
	const res = await axios.post(`http://localhost:1337/tasks`);
	console.log('response form server', res);
	dispatch({ type: GET_TODOS, payload: res.data });
};

export const createTodo = (data) => async (dispatch) => {
	console.log('sending data to the server', data);
	const res = await axios.post('/tasks', data);
	dispatch({ type: ADD_TODO, payload: res.data });
};

export const deleteTodo = (data) => async (dispatch) => {
	const res = await axios.delete('/tasks', data);
	dispatch({ type: DELETE_TODO, payload: res.data });
};

export const getBoards = () => async (dispatch) => {
	const res = await axios.get(`http://localhost:1337/boards`);
	console.log('boards on response', res);
	dispatch({ type: GET_BOARDS, payload: res.data });
};
