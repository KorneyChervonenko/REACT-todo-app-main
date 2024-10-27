import Task from './Task.jsx';
import './TaskList.scss';

export default function TaskList({ tasks }) {
	return (
		<ul className="task-list">
			{tasks.map((task) => (
				<Task task={task} key={task.id} />
			))}
		</ul>
	);
}
