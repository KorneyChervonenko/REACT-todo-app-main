import { useState } from 'react';
import './AddTaskForm.scss';

function AddTaskForm({ onAddTask }) {
	const [taskTitle, setTaskTitle] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		if (taskTitle.length === 0) return;
		const newTask = { title: taskTitle, isCompleted: false, id: crypto.randomUUID() };
		onAddTask(newTask);
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
