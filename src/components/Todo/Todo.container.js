import React, { useState, useEffect } from 'react';
import TodoComponent from './Todo.component';
import { connect, useDispatch } from 'react-redux';
import { ADD_TODO } from '../../actions/types';
import { getTodos } from '../../actions';
function TodoContainer(props) {
	const [ tasksRemaining, setTasksRemaining ] = useState(0);
	const dispatch = useDispatch();

	console.log('current props in todo', props);
	const [ tasks, setTasks ] = useState(props.todos);
	console.log('task aftef tods added ', tasks);

	useEffect(
		() => {
			props.getTodos();
			setTasksRemaining(tasks.filter((task) => !task.completed).length);
		},
		[ tasksRemaining, tasks ]
	);

	const addTask = (title) => {
		// const newTasks = [ ...tasks, { title, completed: false } ];
		// setTasks(newTasks);

		dispatch({ type: ADD_TODO, payload: title });
	};

	const completeTask = (index) => {
		const newTasks = [ ...tasks ];
		newTasks[index].completed = true;
		setTasks(newTasks);
	};

	const removeTask = (index) => {
		const newTasks = [ ...tasks ];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};

	return (
		<TodoComponent
			tasksRemaining={tasksRemaining}
			tasks={props.todos}
			addTask={addTask}
			completeTask={completeTask}
			removeTask={removeTask}
		/>
	);
}

const mapStateToProps = (state) => {
	console.log('mapping state todos', state.todos);
	console.log('mapping state', state);
	return {
		todos: state.todos.todos
	};
};
export default connect(mapStateToProps, { getTodos })(TodoContainer);
//export default TodoContainer;
