import Task from './Task.jsx';
import './TaskList.scss';

export default function TaskList({ tasks, onDelTask, onCompleteTask, filterType }) {
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
			{filteredTasks.map((task) => (
				<Task task={task} onDelTask={onDelTask} onCompleteTask={onCompleteTask} key={task.id} />
			))}
		</ul>
	);
}
