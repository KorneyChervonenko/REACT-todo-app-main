import { useRef } from 'react';
import { useSelector } from 'react-redux';

import Task from '../Task/Task.jsx';
import './TaskList.scss';

export default function TaskList() {
	const tasks = useSelector((store) => store.taskList.tasks);
	const filterType = useSelector((store) => store.control.filterType);
	const draggedTaskRef = useRef(null);

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
				<Task task={task} key={task.id} draggedTaskRef={draggedTaskRef} />
			))}
		</ul>
	);
}
