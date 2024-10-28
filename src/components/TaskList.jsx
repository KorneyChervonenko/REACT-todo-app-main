import Task from './Task.jsx';
import './TaskList.scss';

export default function TaskList({ tasks, onDelTask, onCompleteTask }) {
	return (
		<ul className="task-list">
			{tasks.map((task) => (
				<Task task={task} onDelTask={onDelTask} onCompleteTask={onCompleteTask} key={task.id} />
			))}
		</ul>
	);
}
