import React, { useState, useEffect } from 'react';
import { Input } from '@mui/material';
import './Todo.css';
import { Grid, Segment, List } from 'semantic-ui-react';

function Task({ task, index, completeTask, removeTask }) {
	console.log('task list ', task);
	console.log('index ', index);
	/*return (
		<div className="task" style={{ textDecoration: task.completed ? 'line-through' : '' }}>
			{task.title}

			<button style={{ background: 'red' }} onClick={() => removeTask(index)}>
				x
			</button>
			<button onClick={() => completeTask(index)}>Complete</button>
		</div>
	); */

	return (
		<List divided relaxed>
			<Segment>
				<List.Item>
					<List.Content>
						<List.Header as="a">{task.title}</List.Header>
						<List.Description as="a">{task.description}</List.Description>
					</List.Content>
				</List.Item>
			</Segment>
		</List>
	);
}

function CreateTask({ addTask }) {
	const [ value, setValue ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTask(value);
		setValue('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={value}
				placeholder="Add a new task"
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
}

function TodoComponent(props) {
	console.log('props here is', props);
	const { tasksRemaining, tasks, addTask, completeTask, removeTask } = props;

	return (
		<div className="todo-container">
			<div className="header">Pending tasks ({tasksRemaining})</div>
			<div className="tasks">
				{tasks.map((task, index) => (
					<Task task={task} index={index} completeTask={completeTask} removeTask={removeTask} key={index} />
				))}
			</div>
			<div className="create-task">
				<CreateTask addTask={addTask} />
			</div>
		</div>
	);
}

export default TodoComponent;
