import { useState } from 'react';
import './AddTaskForm.scss';

import { useDispatch } from 'react-redux';
// import { setTaskTitle } from './addTaskFormSlice';
// import { addTask } from './taskListSlice.js';
import { addTask } from '../TaskList/taskListSlice';

function AddTaskForm() {
	const [taskTitle, setTaskTitle] = useState('');
	const dispatch = useDispatch();

	function handleSubmit(event) {
		event.preventDefault();
		if (taskTitle.length === 0) return;
		const newTask = { title: taskTitle, isCompleted: false, id: crypto.randomUUID() };
		// onAddTask(newTask);
		// dispatch({ type: 'add_task', payload: { taskToAdd: newTask } });
		dispatch(addTask(newTask));
		setTaskTitle('');
	}

	return (
		<form className="addTaskForm" onSubmit={handleSubmit}>
			<span className="circle"></span>
			<input
				type="text"
				placeholder="Create a new todo…"
				value={taskTitle}
				onChange={(event) => setTaskTitle(event.target.value)}
			/>
		</form>
	);
}

export default AddTaskForm;
