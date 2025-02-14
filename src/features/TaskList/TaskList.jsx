import { useRef } from 'react';

import Task from '../Task/Task.jsx';
import './TaskList.scss';

import { useDispatch, useSelector } from 'react-redux';

export default function TaskList() {
	const tasks = useSelector((store) => store.taskList.tasks);
	const filterType = useSelector((store) => store.control.filterType);

	const draggedIndex = useRef(null);
	const draggedEnterIndex = useRef(null);

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

	// console.log(tasks);
	// console.log('filtered:', filteredTasks);

	return (
		<ul className="task-list">
			{filteredTasks.map((task, index) => (
				<Task
					task={task}
					key={task.id}
					index={index}
					draggedIndex={draggedIndex}
					draggedEnterIndex={draggedEnterIndex}
				/>
			))}
		</ul>
	);
}
