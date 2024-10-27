import Task from './Task.jsx';
import './TaskList.scss';

export default function TaskList({ tasks, onDelTask }) {
	return (
		<ul className="task-list">
			{tasks.map((task) => (
				<Task task={task} onDelTask={onDelTask} key={task.id} />
			))}
		</ul>
	);
}
