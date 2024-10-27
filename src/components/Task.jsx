import './Task.scss';

export default function Task({ task, onDelTask }) {
	return (
		<li className={`task ${task.isCompleted ? 'completed' : ''}`}>
			{task.title}
			<button className="del-button" type="button" onClick={() => onDelTask(task)}>
				<span className="visually-hidden">delete task</span>
			</button>
		</li>
	);
}
