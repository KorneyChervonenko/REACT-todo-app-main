import { useRef, useState } from 'react';

import Task from './Task.jsx';
import './TaskList.scss';

export default function TaskList({ tasks, onDelTask, onCompleteTask, filterType, setTasks }) {
	const [draggedIndex, setDraggedIndex] = useState(null);
	const [draggedEnterIndex, setDraggedEnterIndex] = useState(null);

	function dragStart(index) {
		// console.log('start');
		setDraggedIndex(index);
	}

	function dragEnter(index) {
		if (draggedIndex === index) return;
		setDraggedEnterIndex(index);
	}

	function dragEnd() {
		// console.log('drop');
		// console.log(draggedIndex, draggedEnterIndex);
		const draggedTask = tasks.at(draggedIndex);
		const tasksExceptDragged = tasks.filter((task) => draggedTask.id !== task.id);
		const newTasks = [
			...tasksExceptDragged.slice(0, draggedEnterIndex),
			draggedTask,
			...tasksExceptDragged.slice(draggedEnterIndex),
		];
		// console.log(newTasks);
		setTasks(newTasks);

		setDraggedIndex(null);
		setDraggedEnterIndex(null);
	}

	let filteredTasks;
	switch (filterType) {
		case 'all':
			filteredTasks = tasks;
			break;

		case 'active':
			filteredTasks = tasks.filter((task) => !task.isCompleted);
			break;

		case 'completed':
			filteredTasks = tasks.filter((task) => task.isCompleted);
			break;

		default:
			break;
	}
	return (
		<ul className="task-list">
			{filteredTasks.map((task, index) => (
				<Task
					task={task}
					onDelTask={onDelTask}
					onCompleteTask={onCompleteTask}
					key={task.id}
					index={index}
					dragStart={dragStart}
					dragEnter={dragEnter}
					dragEnd={dragEnd}
				/>
			))}
		</ul>
	);
}
